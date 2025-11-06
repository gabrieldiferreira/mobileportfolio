#!/bin/bash

# Script para baixar todas as imagens externas e armazená-las localmente

set -e

echo "🖼️  Baixando imagens externas..."

# Criar diretório para imagens baixadas
mkdir -p assets/app-images
mkdir -p assets/instagram-images
mkdir -p assets/profile

# Função para baixar imagem
download_image() {
    local url=$1
    local filename=$2
    local dir=$3
    
    echo "📥 Baixando: $filename"
    
    if command -v curl &> /dev/null; then
        curl -L -s -o "$dir/$filename" "$url" && echo "✅ $filename baixado" || echo "⚠️  Falha ao baixar: $filename"
    elif command -v wget &> /dev/null; then
        wget -q -O "$dir/$filename" "$url" && echo "✅ $filename baixado" || echo "⚠️  Falha ao baixar: $filename"
    else
        echo "❌ curl ou wget não encontrado."
        exit 1
    fi
}

# Baixar imagens de apps
download_image "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=center" "fitaicoach-workout.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=150&h=150&fit=crop&crop=center" "fitaicoach-analysis.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop&crop=center" "fitaicoach-progress.jpg" "assets/app-images"

download_image "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=150&h=150&fit=crop&crop=center" "crypto-dashboard.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=150&h=150&fit=crop&crop=center" "crypto-analytics.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&h=150&fit=crop&crop=center" "crypto-portfolio.jpg" "assets/app-images"

download_image "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=150&h=150&fit=crop&crop=center" "remotework-video.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop&crop=center" "remotework-tasks.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=center" "remotework-collab.jpg" "assets/app-images"

download_image "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=center" "mindspace-meditation.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=center" "mindspace-mood.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=center" "mindspace-wellness.jpg" "assets/app-images"

download_image "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/79/95/ce/7995ce86-9a85-9d88-7b8b-6747ec4b62fa/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x600wa.png" "f1tracker-icon.png" "assets/app-images"
download_image "https://pbs.twimg.com/media/Gtz5nDqXoAAbhra.jpg:large" "f1tracker-analytics.jpg" "assets/app-images"
download_image "https://punditfeed.com/app/uploads/2023/05/Icon_hochzwei_924563-scaled.jpg" "f1tracker-performance.jpg" "assets/app-images"

download_image "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=150&fit=crop&crop=center" "shoppar-ar.jpg" "assets/app-images"
download_image "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=150&h=150&fit=crop&crop=center" "shoppar-visualization.jpg" "assets/app-images"

download_image "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop&crop=center" "ai-tutor.jpg" "assets/app-images"
download_image "https://cdn.mos.cms.futurecdn.net/Ht8m53wtazPLtQAUmGq2q6.jpg" "smart-home.jpg" "assets/app-images"

# Baixar imagens do Instagram
download_image "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center" "instagram-programming.jpg" "assets/instagram-images"
download_image "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center" "instagram-development.jpg" "assets/instagram-images"
download_image "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center" "instagram-coding.jpg" "assets/instagram-images"
download_image "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop&crop=center" "instagram-post.jpg" "assets/instagram-images"

# Baixar imagem de perfil
download_image "https://avatars.githubusercontent.com/u/161978029?v=4" "profile-github.jpg" "assets/profile"

echo ""
echo "✅ Download concluído!"
echo "📊 Imagens salvas em:"
echo "   - assets/app-images/"
echo "   - assets/instagram-images/"
echo "   - assets/profile/"
echo ""
echo "🔄 Agora execute: bash update-html-images.sh"
