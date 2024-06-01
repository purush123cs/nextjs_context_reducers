import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // true for all origins
    origin: '*',
  });
  await app.listen(3001);
}
bootstrap();
