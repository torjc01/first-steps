import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    codigo          : number; 

    @Column() 
    nome            : string;
    
    @Column()
    sobrenome       : string;

    @Column()
    siglaISOPais    : string;
    
    @Column()
    anoNascimento   : number;

    @Column()
    biografia       : string;

}
