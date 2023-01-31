import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const user = process.env.MYSQL_USER; 
  console.log("User: " + user);
  const config = new DocumentBuilder()
    .setTitle("Biblioteca")
    .setDescription("Descricao da API de biblioteca pessoal")
    .setVersion("1.0")
    .addTag("exlibris")
    .build(); 

  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api', app, document); 

  app.useGlobalPipes(new ValidationPipe()); 
  
  await app.listen(3000);
}
bootstrap();
 