import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEditoraDto } from './dto/create-editora.dto';
import { UpdateEditoraDto } from './dto/update-editora.dto';
import { Editora } from './entities/editora.entity';

@Injectable()
export class EditoraService {

  constructor(@InjectRepository(Editora)
    private editoraRepository: Repository<Editora>
  ){}

  create(createEditoraDto: CreateEditoraDto) {
    console.log('This action adds a new editora');
    return this.editoraRepository.save(createEditoraDto);
  }

  findAll() {
    console.log(`This action returns all editora`);
    return this.editoraRepository.find(); 
  }

  findOne(codigo: number) {
    console.log(`This action returns a #${codigo} editora`);
    return this.editoraRepository.findOneBy({codigo})
  }

  update(codigo: number, updateEditoraDto: UpdateEditoraDto) {
    console.log(`This action updates a #${codigo} editora`);
    return this.editoraRepository.update(codigo, updateEditoraDto);
  }

  remove(codigo: number) {
    console.log(`This action removes a #${codigo} editora`);
    return this.editoraRepository.delete({codigo});
  }
}
