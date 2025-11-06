# 🚀 Guia de Otimização do Portfolio

## ✅ Tarefas Concluídas (sem npm)

As seguintes otimizações já foram aplicadas:

1. ✅ **Lazy Loading e Dimensões nas Imagens**
   - Todas as imagens no HTML agora têm `loading="lazy"` e atributos `width`/`height`
   - Isso melhora o CLS (Cumulative Layout Shift) e o desempenho

2. ✅ **Cache de Longo Prazo**
   - Arquivo `.htaccess` criado com configuração de cache para assets estáticos
   - Cache configurado para 1 ano (31536000 segundos)

3. ✅ **SEO - Sitemap e Robots.txt**
   - `sitemap.xml` criado
   - `robots.txt` configurado

4. ✅ **Font-display: swap**
   - Já configurado nas fontes do Google Fonts (via parâmetro `display=swap`)

## 📦 Tarefas que Requerem npm

Para executar as seguintes otimizações, você precisa ter Node.js e npm instalados:

### Instalação do Node.js (se necessário)

```bash
# macOS (via Homebrew)
brew install node

# Ou baixe de https://nodejs.org/
```

### Executar Otimizações

```bash
# Opção 1: Executar o script completo
bash optimize.sh

# Opção 2: Executar comandos manualmente
```

### Comandos Manuais

#### 1. Instalar Dependências

```bash
npm install -g sharp-cli terser clean-css-cli html-minifier-cli sitemap-generator-cli
```

Ou instalar localmente no projeto:

```bash
npm init -y
npm install --save-dev sharp-cli terser clean-css-cli html-minifier-cli sitemap-generator-cli
```

#### 2. Converter Imagens para WebP

```bash
mkdir -p assets/webp

find assets -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -exec bash -c '
  file="$1"
  name=$(basename "$file")
  base="${name%.*}"
  echo "🔄 Convertendo $file → assets/webp/${base}.webp"
  npx sharp-cli -i "$file" -o "assets/webp/${base}.webp" --resize 1920 --webp --quality 80
' _ {} \;
```

#### 3. Minificar JavaScript

```bash
npx terser js/*.js -o js/script.min.js --compress --mangle
```

#### 4. Minificar CSS

```bash
npx clean-css-cli -o css/style.min.css css/style.css css/utilities.css css/refined.css
```

#### 5. Minificar HTML

```bash
npx html-minifier-cli --input-dir . --output-dir . --collapse-whitespace --remove-comments --minify-css true --minify-js true --file-ext html
```

## 📊 Tamanhos Atuais

```
assets: 860K
css:    152K
js:     84K
```

## 🔄 Próximos Passos

1. Instalar Node.js/npm (se ainda não tiver)
2. Executar `bash optimize.sh` ou os comandos manuais acima
3. Atualizar referências no HTML para usar arquivos minificados (.min.js, .min.css)
4. Considerar usar imagens WebP no HTML (substituir .png/.jpg por .webp)

## 📝 Notas

- O script `optimize.sh` foi criado para automatizar todas as otimizações
- As imagens WebP serão salvas em `assets/webp/`
- Após minificar, atualize as referências no HTML para usar os arquivos `.min.js` e `.min.css`
- GitHub Pages não suporta `.htaccess`, mas você pode configurar cache via headers no `_config.yml` do Jekyll

