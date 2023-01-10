import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LivroService {

  constructor(@InjectRepository(Livro)
    private livrosRepository: Repository<Livro>
  ){}
  
  create(createLivroDto: CreateLivroDto) {
    console.log('This action adds a new livro');
    return this.livrosRepository.save(createLivroDto);
  }

  findAll(): Promise<Livro[]> {
    console.log(`This action returns all livro`);
    return this.livrosRepository.find();
  }

  findOne(codigo: number): Promise<Livro> {
    console.log(`This action returns a #${codigo} livro`);
    return this.livrosRepository.findOneBy({codigo});
  }

  update(codigo: number, updateLivroDto: UpdateLivroDto) {
    console.log(`This action updates #${codigo} livro`);
    return this.livrosRepository.update(codigo, updateLivroDto);
    //return ;
  }

  remove(codigo: number) {
    console.log(`This action removes a #${codigo} livro`)
    return this.livrosRepository.delete({codigo});
  }
}
