import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
      }),
    )
    
  app.setGlobalPrefix('api/v1');
  await app.listen( process.env.PORT );
  console.log(`App running on PORT:${process.env.PORT}`)
}
bootstrap();
