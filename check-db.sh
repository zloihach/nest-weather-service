#!/bin/sh

# Проверяем, есть ли хотя бы одна таблица в базе данных
if npx prisma db execute --stdin <<EOF
SELECT 1 FROM "WeatherData" LIMIT 1;
EOF
then
  echo "База данных уже существует, пропускаем миграции..."
else
  echo "База данных не найдена, выполняем миграции..."
  npx prisma migrate deploy
fi

# Запускаем приложение
npm run start:prod
