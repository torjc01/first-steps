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
import { secret } from './utils/constants';
import { join } from 'path/posix'
import { ServeStaticModule } from '@nestjs/serve-static';
import { MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } from './utils/constants';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: MYSQL_USER,       //process.env.MYSQL_USER, 
      password: MYSQL_PASSWORD,   //process.env.MYSQL_PASSWORD, 
      database: MYSQL_DATABASE,   //process.env.MYSQL_DATABASE, 
      autoLoadEntities: true, 
      synchronize: true
    }),
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
