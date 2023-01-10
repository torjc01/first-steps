import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pais {

    @PrimaryGeneratedColumn()
    codigo: number; 
    
    @Column()
    siglaISO: string; 
    
    @Column()
    nome : string;
    
    @Column()
    nomeEn : string;
    
    @Column()
    nomeFr : string;
    
    @Column()
    nomeOriginal : string;

    @Column()
    nomeExtensivo: string

}
