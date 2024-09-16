#!/bin/sh

# Проверяем, есть ли таблица WeatherData в базе данных
if npx prisma db execute --stdin <<EOF
SELECT 1 FROM "WeatherData" LIMIT 1;
EOF
then
  echo "Таблица WeatherData существует, пропускаем миграции..."
else
  echo "Таблица WeatherData не найдена, выполняем миграции..."
  npx prisma migrate deploy
fi

# Запускаем приложение
npm run start:prod
