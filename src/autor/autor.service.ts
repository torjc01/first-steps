import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';
import { Autor } from './entities/autor.entity';

@Injectable()
export class AutorService {

  constructor(@InjectRepository(Autor)
    private autorRepository: Repository<Autor>
  ){}

  create(createAutorDto: CreateAutorDto) {
    console.log('This action adds a new autor');
    return this.autorRepository.save(createAutorDto);
  }

  findAll() {
    console.log(`This action returns all autor`);
    return this.autorRepository.find();
  }

  findOne(codigo: number) {
    console.log(`This action returns a #${codigo} autor`);
    return this.autorRepository.findOneBy({codigo});
  }

  update(codigo: number, updateAutorDto: UpdateAutorDto) {
    console.log(`This action updates a #${codigo} autor`);
    return this.autorRepository.update(codigo, updateAutorDto);
  }

  remove(codigo: number) {
    console.log(`This action removes a #${codigo} autor`);
    return this.autorRepository.delete(codigo);
  }
}
