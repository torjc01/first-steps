import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './livro/livro.module';
import { IdiomaModule } from './idioma/idioma.module';
import { AutorModule } from './autor/autor.module';
import { PaisModule } from './pais/pais.module';
import { UserModule } from './user/user.module';
import { EditoraModule } from './editora/editora.module';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'juliozohar',   //process.env.MYSQL_USER, 
      password: 'Achtung@2023', //process.env.MYSQL_PASSWORD, 
      database: 'biblioteca',   //process.env.MYSQL_DATABASE, 
      autoLoadEntities: true, 
      synchronize: true
    }),
    LivroModule, 
    IdiomaModule,
    AutorModule, 
    PaisModule, 
    UserModule, EditoraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSouce: DataSource){}
}
