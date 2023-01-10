import { Module } from '@nestjs/common';
import { EditoraService } from './editora.service';
import { EditoraController } from './editora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Editora } from './entities/editora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Editora])],
  controllers: [EditoraController],
  providers: [EditoraService],
  exports: [TypeOrmModule]
})
export class EditoraModule {}
