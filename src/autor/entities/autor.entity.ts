import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor {

    @PrimaryGeneratedColumn()
    codigo          : number; 

    @Column({length: 16, default:""})
    titulos         : string; 

    @Column({length: 32, default:""}) 
    nome            : string;
    
    @Column({length: 32, default:""})
    sobrenome       : string;

    @Column({length: 32, default:""})
    nomeCompleto     : string;

    @Column({length: 255, default: ""})
    outrasDenominacoes: string; 

    @Column({length: 3, default:""})
    siglaISOPais    : string;
    
    @Column({default: 0})
    anoNascimento   : number;

    @Column({length: 2048})
    biografia       : string;

}
