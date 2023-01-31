import { IsString } from "class-validator";

export class CreatePaisDto {

    readonly codigo: number; 
    
    @IsString()
    readonly siglaISO: string;

    @IsString()
    readonly nome: string;

    readonly nomeEn: string;
    
    readonly nomeFr: string;
    
    readonly nomeOriginal: string;
    
    readonly nomeExtensivo: string;
}
