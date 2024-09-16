import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Настройка CORS для разрешения запросов с любых доменов
  app.enableCors({
    origin: '*',  // Разрешаем любые источники
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Weather API')
    .setDescription('Ny vrode workaet s bogom!')
    .setVersion('1.3.3.7(a)')
    .addTag('Weather')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Подключаем cookie-parser и глобальные pipes
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap().then(() => console.log('All good Direc ❤'));
