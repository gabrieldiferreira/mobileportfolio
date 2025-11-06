#!/bin/bash

# Script para atualizar a foto de perfil
# Uso: bash update-profile-photo.sh [caminho-da-imagem]

set -e

PROFILE_DIR="assets/profile"
PROFILE_FILE="profile-github.jpg"

if [ -z "$1" ]; then
    echo "📸 Atualizar Foto de Perfil"
    echo ""
    echo "Por favor, forneça o caminho da nova imagem:"
    echo "  bash update-profile-photo.sh /caminho/para/sua/imagem.jpg"
    echo ""
    echo "Ou arraste a imagem para o terminal após digitar:"
    echo "  bash update-profile-photo.sh "
    exit 1
fi

IMAGE_PATH="$1"

if [ ! -f "$IMAGE_PATH" ]; then
    echo "❌ Arquivo não encontrado: $IMAGE_PATH"
    exit 1
fi

# Verificar se é uma imagem
if ! file "$IMAGE_PATH" | grep -qi "image"; then
    echo "❌ O arquivo não parece ser uma imagem válida"
    exit 1
fi

# Criar diretório se não existir
mkdir -p "$PROFILE_DIR"

# Copiar imagem (fazer backup da antiga se existir)
if [ -f "$PROFILE_DIR/$PROFILE_FILE" ]; then
    mv "$PROFILE_DIR/$PROFILE_FILE" "$PROFILE_DIR/profile-github.jpg.backup"
    echo "💾 Backup da foto antiga criado: profile-github.jpg.backup"
fi

# Copiar nova imagem
cp "$IMAGE_PATH" "$PROFILE_DIR/$PROFILE_FILE"

# Tentar otimizar a imagem se imagemagick estiver disponível
if command -v convert &> /dev/null; then
    echo "🔄 Otimizando imagem..."
    convert "$PROFILE_DIR/$PROFILE_FILE" -resize 400x400 -quality 85 "$PROFILE_DIR/$PROFILE_FILE"
fi

echo "✅ Foto de perfil atualizada com sucesso!"
echo "📁 Localização: $PROFILE_DIR/$PROFILE_FILE"
echo ""
echo "🔄 A página HTML já está configurada para usar esta imagem."

