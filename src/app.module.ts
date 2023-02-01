import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivroModule } from './livro/livro.module';
import { IdiomaModule } from './idioma/idioma.module';
import { AutorModule } from './autor/autor.module';
import { PaisModule } from './pais/pais.module';
import { EditoraModule } from './editora/editora.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { join } from 'path/posix'
import { ServeStaticModule } from '@nestjs/serve-static';
import { configService } from './config.service';

require('dotenv').config();

let secret = configService.getSecret();

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    /*TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'db', 
      port: 3306, 
      username: MYSQL_USER,       //process.env.MYSQL_USER, 
      password: MYSQL_PASSWORD,   //process.env.MYSQL_PASSWORD, 
      database: MYSQL_DATABASE,   //process.env.MYSQL_DATABASE, 
      autoLoadEntities: true, 
      synchronize: true
    }), */
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    LivroModule, 
    IdiomaModule,
    AutorModule, 
    PaisModule, 
    EditoraModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSouce: DataSource){}
}
