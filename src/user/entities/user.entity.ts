import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn() 
    codigo: number; 


    @Column({ 
        type: "char", 
        length: 32
    })
    nome: string;

    @Column({
        type: "char", 
        length: 32
    })
    sobrenome: string; 

    @Column({
        type: "varchar",
        length: 150,
        unique: true
    })
    email: string;

    @Column({
        type: "varchar",
        length: 64,
        unique: true
    })
    password : string;

    @Column({
        type: "char", 
        length: 1, 
        default: "C"
    })
    codigoStatus : string;

    @CreateDateColumn()
    dataCriacao: Date;

    //@Column({ default: () => "NOW()" })
    @UpdateDateColumn()
    dataModificacao: Date;

    @VersionColumn()
    versao: number; 


}
