import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisService {

  constructor(@InjectRepository(Pais)
    private paisRepository: Repository<Pais>
  ){}

  create(createPaisDto: CreatePaisDto) {
    console.log(`This action adds a new pais ${createPaisDto}`);
    return this.paisRepository.save(createPaisDto);
  }

  findAll(): Promise<Pais[]> {
    console.log(`This action returns all pais`);
    return this.paisRepository.find();
  }

  findOne(codigo: number): Promise<Pais> {
    console.log(`This action returns a #${codigo} pais`);
    return this.paisRepository.findOneBy({codigo});
  }

  update(codigo: number, updatePaisDto: UpdatePaisDto) {
    console.log(`This action updates a #${codigo} pais`);
    return this.paisRepository.update(codigo, updatePaisDto);
  }

  remove(codigo: number) {
    console.log(`This action removes a #${codigo} pais`);
    return this.paisRepository.delete(codigo);
  }
}
