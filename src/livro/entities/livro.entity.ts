import { Entity, PrimaryGeneratedColumn, Column } from  'typeorm'; 

@Entity()
export class Livro {

    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    titulo: string;

    @Column()
    subtitulo: string;

    @Column()
    tituloOriginal: string;

    @Column()
    autores: string;

    @Column({length: 8})
    siglaISOIdioma: string;
    
    @Column({length: 8})
    edicao: string;

    @Column()
    cidade: string;

    @Column()
    ano: number;

    @Column()
    genero: string;
    
    @Column()
    editora: string;

    @Column({length: 64}) 
    colecao: string;

    @Column({default: 'C'})
    estado: string;

    @Column({default: true})
    isActive: boolean;

    @Column({default: false})
    isAntigo: boolean;

    @Column({length: 255, default: ""})
    observacoes: string; 
  
}
