import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      }),
    )
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Accept',
  });
    
  app.setGlobalPrefix('api/v1');
  await app.listen( process.env.PORT );
  console.log(`App running on PORT:${process.env.PORT}`)
}
bootstrap();
