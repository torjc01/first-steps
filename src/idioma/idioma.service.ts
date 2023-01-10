import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Livro } from 'src/livro/entities/livro.entity';
import { Repository } from 'typeorm';
import { CreateIdiomaDto } from './dto/create-idioma.dto';
import { UpdateIdiomaDto } from './dto/update-idioma.dto';
import { Idioma } from './entities/idioma.entity';

@Injectable()
export class IdiomaService {

  constructor(@InjectRepository(Idioma)
    private idiomasRepository: Repository<Idioma>
  ){}
  create(createIdiomaDto: CreateIdiomaDto) {
    console.log(`This action adds a new idioma`);
    return this.idiomasRepository.save(createIdiomaDto);
  }

  findAll(): Promise<Idioma[]> {
    console.log(`This action returns all idioma`);
    return this.idiomasRepository.find();
  }

  findOne(codigo: number) {
    console.log(`This action returns a #${codigo} idioma`);
    return this.idiomasRepository.findOneBy({codigo});
  }

  update(id: number, updateIdiomaDto: UpdateIdiomaDto) {
    console.log(`This action updates a #${id} idioma`);
    return this.idiomasRepository.update(id, updateIdiomaDto);
  }

  remove(codigo: number) {
    console.log(`This action removes a #${codigo} idioma`);
    return this.idiomasRepository.delete({codigo});
  }
}
