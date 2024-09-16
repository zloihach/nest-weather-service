#!/bin/sh

# Проверяем, есть ли хотя бы одна таблица в базе данных (замените на команду для вашей базы)
if npx prisma db execute --stdin <<EOF
SELECT 1
EOF
then
  echo "База данных уже существует, пропускаем миграции..."
else
  echo "База данных не найдена, выполняем миграции..."
  npx prisma migrate deploy
fi

# Запускаем приложение
npm run start:prod
