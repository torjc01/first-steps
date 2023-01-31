import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    codigo          : number; 

    @Column({length: 32}) 
    nome            : string;
    
    @Column({length: 32})
    sobrenome       : string;

    @Column({length: 255, default: ""})
    outrasDenominacoes: string; 

    @Column({length: 3})
    siglaISOPais    : string;
    
    @Column()
    anoNascimento   : number;

    @Column({length: 2048})
    biografia       : string;

}
