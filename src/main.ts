/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NestFactory } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // IMPORTANTE: usar ZodValidationPipe GLOBAL
  app.useGlobalPipes(new ZodValidationPipe());
  await app.listen(3000);
}
bootstrap();
