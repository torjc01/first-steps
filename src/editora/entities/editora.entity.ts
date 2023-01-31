import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editora {

    //  codigo, nome, endereco, cidade, codigoPais, site
    @PrimaryGeneratedColumn()
    codigo : number;

    @Column({length: 64})
    nome : string;

    @Column({length: 64})
    endereco: string; 

    @Column({length: 32})
    cidade: string; 

    @Column({length: 10, default: ''})
    codigoPostal: string; 

    @Column({length: 3, default: ''})
    siglaEstadoPais: string;

    @Column({length: 2, default: ''})
    siglaISOPais: string;

    @Column({length: 64})
    site: string;

}
