#!/bin/bash
# Synorq Web - VPS Deploy Script
# Çalıştırmak için: chmod +x deploy.sh && ./deploy.sh

set -e

echo "🚀 Synorq Web deploy başlıyor..."

# Repo varsa güncelle, yoksa clone'la
DEPLOY_DIR="/var/www/synorq-web"

if [ -d "$DEPLOY_DIR" ]; then
  echo "📦 Repo güncelleniyor..."
  cd $DEPLOY_DIR
  git pull origin main
else
  echo "📦 Repo clone'lanıyor..."
  git clone https://github.com/SynOrq/synorq-web.git $DEPLOY_DIR
  cd $DEPLOY_DIR
fi

echo "📥 Bağımlılıklar yükleniyor..."
npm ci --production=false

echo "🔨 Build alınıyor..."
npm run build

echo "♻️  PM2 ile restart..."
pm2 restart synorq-web 2>/dev/null || pm2 start ecosystem.config.js

pm2 save

echo "✅ Deploy tamamlandı! Site http://localhost:3000 adresinde çalışıyor."
echo "Nginx ile synorq.com'a yönlendirmeyi unutmayın."
