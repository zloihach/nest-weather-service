FROM node:22-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma/

RUN npx prisma generate

COPY . .

COPY check-db.sh /usr/src/app/check-db.sh

RUN chmod +x /usr/src/app/check-db.sh

RUN npm run build

EXPOSE 3000

# Запускаем скрипт проверки базы данных перед стартом приложения
CMD ["/usr/src/app/check-db.sh"]
