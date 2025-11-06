#!/bin/bash

# Script para atualizar o HTML com as imagens locais

set -e

echo "🔄 Atualizando referências de imagens no HTML..."

# Mapeamento de URLs antigas para novos caminhos locais
declare -A image_map=(
    # FitAI Coach
    ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=center"]="assets/app-images/fitaicoach-workout.jpg"
    ["https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=150&h=150&fit=crop&crop=center"]="assets/app-images/fitaicoach-analysis.jpg"
    ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=150&fit=crop&crop=center"]="assets/app-images/fitaicoach-progress.jpg"
    
    # Crypto Tracker
    ["https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=150&h=150&fit=crop&crop=center"]="assets/app-images/crypto-dashboard.jpg"
    ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=150&h=150&fit=crop&crop=center"]="assets/app-images/crypto-analytics.jpg"
    ["https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=150&h=150&fit=crop&crop=center"]="assets/app-images/crypto-portfolio.jpg"
    
    # Remote Work
    ["https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=150&h=150&fit=crop&crop=center"]="assets/app-images/remotework-video.jpg"
    ["https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop&crop=center"]="assets/app-images/remotework-tasks.jpg"
    ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop&crop=center"]="assets/app-images/remotework-collab.jpg"
    
    # MindSpace
    ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=150&fit=crop&crop=center"]="assets/app-images/mindspace-meditation.jpg"
    ["https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=center"]="assets/app-images/mindspace-mood.jpg"
    ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop&crop=center"]="assets/app-images/mindspace-wellness.jpg"
    
    # F1Tracker
    ["https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/79/95/ce/7995ce86-9a85-9d88-7b8b-6747ec4b62fa/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x600wa.png"]="assets/app-images/f1tracker-icon.png"
    ["https://pbs.twimg.com/media/Gtz5nDqXoAAbhra.jpg:large"]="assets/app-images/f1tracker-analytics.jpg"
    ["https://punditfeed.com/app/uploads/2023/05/Icon_hochzwei_924563-scaled.jpg"]="assets/app-images/f1tracker-performance.jpg"
    
    # ShopAR
    ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=150&fit=crop&crop=center"]="assets/app-images/shoppar-ar.jpg"
    ["https://images.unsplash.com/photo-1556742111-a301076d9d18?w=150&h=150&fit=crop&crop=center"]="assets/app-images/shoppar-visualization.jpg"
    
    # Coming Soon
    ["https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop&crop=center"]="assets/app-images/ai-tutor.jpg"
    ["https://cdn.mos.cms.futurecdn.net/Ht8m53wtazPLtQAUmGq2q6.jpg"]="assets/app-images/smart-home.jpg"
    
    # Instagram
    ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center"]="assets/instagram-images/instagram-programming.jpg"
    ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=center"]="assets/instagram-images/instagram-development.jpg"
    ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center"]="assets/instagram-images/instagram-coding.jpg"
    ["https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=400&fit=crop&crop=center"]="assets/instagram-images/instagram-post.jpg"
    
    # Profile
    ["https://avatars.githubusercontent.com/u/161978029?v=4"]="assets/profile/profile-github.jpg"
)

# Atualizar HTML
html_file="index.html"
temp_file=$(mktemp)

cp "$html_file" "$temp_file"

for old_url in "${!image_map[@]}"; do
    new_path="${image_map[$old_url]}"
    # Escapar caracteres especiais para sed
    escaped_url=$(printf '%s\n' "$old_url" | sed 's/[[\.*^$()+?{|]/\\&/g')
    sed -i '' "s|$escaped_url|$new_path|g" "$temp_file"
    echo "✅ Atualizado: $(basename "$new_path")"
done

mv "$temp_file" "$html_file"

echo ""
echo "✅ HTML atualizado com sucesso!"
echo "📝 Todas as imagens agora apontam para arquivos locais"

