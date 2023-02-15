import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, VersionColumn } from  'typeorm'; 

@Entity()
export class Livro {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column({length:128, default: ""})
    titulo: string;

    @Column({length:256, default: ""})
    subtitulo: string;

    @Column({length:128, default: ""})
    tituloOriginal: string;

    @Column({length:128, default: ""})
    autores: string;

    @Column({length: 8, default: ""})
    siglaISOIdioma: string;
    
    @Column({length: 8, default: ""})
    edicao: string;

    @Column({length: 32, default: ""})
    cidade: string;

    @Column({default: 0})
    ano: number;

    @Column({length: 256, default: ""})
    genero: string;
    
    @Column({length: 64, default: ""})
    editora: string;

    @Column({length: 64, default: ""}) 
    colecao: string;

    @Column({length: 4, default: ""})
    volume: string;

    @Column({length: 3, default: 'C'})
    status: string;

    @Column({default: '', length: 20})
    isbn: string;

    @Column({default: 0})
    paginas: number; 

    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isAntigo: boolean;

    @Column({length: 512, default: ""})
    observacoes: string; 

    @CreateDateColumn()
    dataCriacao: Date; 

    @UpdateDateColumn()
    dataModificacao: Date; 

    @DeleteDateColumn()
    dataSupressao: Date; 

    @VersionColumn()
    versao: number; 
  
}
