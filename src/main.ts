import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './common/data-source';
import "reflect-metadata"
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initializedS!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
