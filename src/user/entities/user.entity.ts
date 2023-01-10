import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    codigo: number; 

    @Column({length: 32})
    nome : string; 

    @Column({length: 32})
    sobrenome: string; 

    @Column({length: 64})
    email : string;

    @Column({length: 2})
    codigoStatus: string; 

}
