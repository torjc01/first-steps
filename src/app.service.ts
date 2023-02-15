import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1> Biblioteca ExLibris </h1> <h3>Julio Cesar Torres (C) 2022</h3>';
  }
}
