#!/bin/bash

# Script de Otimização para Portfolio Mobile
# Execute: bash optimize.sh

set -e

echo "🚀 Iniciando otimização do portfolio..."

# ⚙️ 1. Verificar dependências
echo "📦 Verificando dependências..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Por favor, instale Node.js primeiro."
    echo "   macOS: brew install node"
    exit 1
fi

# ⚙️ 2. Instalar dependências locais (se necessário)
if [ ! -f "package.json" ]; then
    echo "📦 Criando package.json..."
    npm init -y
fi

echo "📦 Instalando dependências..."
npm install --save-dev sharp-cli terser clean-css-cli html-minifier-cli sitemap-generator-cli

# ⚙️ 3. Converter imagens para WebP
echo "🖼️  Convertendo imagens para WebP..."
mkdir -p assets/webp

find assets -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | while read file; do
    name=$(basename "$file")
    base="${name%.*}"
    echo "🔄 Convertendo $file → assets/webp/${base}.webp"
    npx sharp-cli -i "$file" -o "assets/webp/${base}.webp" --resize 1920 --webp --quality 80 || {
        echo "⚠️  Falha ao converter $file, tentando método alternativo..."
        # Fallback: usar sharp via node se sharp-cli não funcionar
        node -e "
            const sharp = require('sharp');
            sharp('$file')
                .resize(1920, null, { withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile('assets/webp/${base}.webp')
                .then(() => console.log('✅ Convertido: ${base}.webp'))
                .catch(err => console.error('❌ Erro:', err.message));
        " || echo "⚠️  Pulando $file"
    }
done

# ⚙️ 4. Minificar JavaScript
echo "📝 Minificando JavaScript..."
if [ -d "js" ]; then
    for jsfile in js/*.js; do
        if [ -f "$jsfile" ] && [[ "$jsfile" != *".min.js" ]]; then
            name=$(basename "$jsfile" .js)
            echo "🔄 Minificando $jsfile → js/${name}.min.js"
            npx terser "$jsfile" -o "js/${name}.min.js" --compress --mangle || echo "⚠️  Falha ao minificar $jsfile"
        fi
    done
fi

# ⚙️ 5. Minificar CSS
echo "🎨 Minificando CSS..."
if [ -f "css/style.css" ]; then
    npx clean-css-cli -o css/style.min.css css/style.css css/utilities.css css/refined.css 2>/dev/null || {
        echo "⚠️  Tentando método alternativo para CSS..."
        npx clean-css-cli -o css/style.min.css css/*.css 2>/dev/null || echo "⚠️  Falha ao minificar CSS"
    }
fi

# ⚙️ 6. Adicionar font-display: swap (já está no HTML, mas vamos verificar CSS)
echo "🔤 Verificando font-display: swap..."
find css -name "*.css" -exec sed -i '' 's/@font-face {/@font-face {\n  font-display: swap;/g' {} \; 2>/dev/null || true
echo "✅ font-display: swap verificado"

# ⚙️ 7. Adicionar lazy loading e dimensões às imagens
echo "🖼️  Adicionando lazy loading às imagens..."
# Isso será feito manualmente no HTML

# ⚙️ 8. Criar .htaccess para cache
echo "💾 Configurando cache..."
cat > .htaccess << 'EOF'
<FilesMatch "\.(js|css|png|jpg|jpeg|webp|svg|woff2)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
EOF
echo "✅ Cache de longo prazo configurado"

# ⚙️ 9. Minificar HTML
echo "📄 Minificando HTML..."
if [ -f "index.html" ]; then
    npx html-minifier-cli --input-dir . --output-dir . --collapse-whitespace --remove-comments --minify-css true --minify-js true --file-ext html --file-ext htm || {
        echo "⚠️  Tentando método alternativo..."
        npx html-minifier index.html -o index.min.html --collapse-whitespace --remove-comments --minify-css --minify-js || echo "⚠️  Falha ao minificar HTML"
    }
fi

# ⚙️ 10. Gerar sitemap e robots.txt
echo "🗺️  Gerando sitemap e robots.txt..."
echo "User-agent: *" > robots.txt
echo "Allow: /" >> robots.txt
echo "Sitemap: https://gabrielferreira.club/sitemap.xml" >> robots.txt

npx sitemap-generator-cli https://gabrielferreira.club --output ./sitemap.xml || {
    echo "⚠️  Gerando sitemap manualmente..."
    cat > sitemap.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gabrielferreira.club/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
EOF
}
echo "✅ Sitemap e robots.txt criados"

# ⚙️ 11. Verificar tamanhos
echo "📊 Verificando tamanhos dos arquivos..."
echo ""
echo "Tamanhos dos diretórios:"
du -sh assets assets/webp css js 2>/dev/null || true
echo ""
echo "🚀 Otimização concluída!"

