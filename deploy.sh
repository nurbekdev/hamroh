#!/usr/bin/env bash
# Hamrohio — serverga deploy (64.23.243.111, hamrohio.tech)
# Ishlatish: ./deploy.sh   yoki   bash deploy.sh

set -e

SERVER_USER="${DEPLOY_USER:-root}"
SERVER_HOST="${DEPLOY_HOST:-64.23.243.111}"
REMOTE_DIR="${REMOTE_APP_DIR:-/var/www/hamrohio}"
APP_NAME="hamrohio"

echo "==> Build..."
npm run build

echo "==> Serverda papka yaratish (agar bo'lmasa)..."
ssh "${SERVER_USER}@${SERVER_HOST}" "mkdir -p ${REMOTE_DIR}/standalone"

echo "==> Standalone fayllarni serverga yuborish..."
rsync -avz --delete \
  .next/standalone/ \
  "${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/standalone/"

rsync -avz --delete \
  .next/static/ \
  "${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/standalone/.next/static/"

rsync -avz \
  public/ \
  "${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/standalone/public/"

echo "==> Serverda PM2 ni qayta ishga tushirish..."
ssh "${SERVER_USER}@${SERVER_HOST}" "cd ${REMOTE_DIR}/standalone && pm2 restart ${APP_NAME} --update-env || (pm2 start server.js --name ${APP_NAME} -- --port 3000)"

echo "==> Tayyor. https://hamrohio.tech tekshiring."
