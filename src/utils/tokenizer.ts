/*
 * Funçao para criar tokens individuais a partir de uma string 
 * de elementos, separados por um char especifico.
 * 
 * @ param: a string de elementos separados 
 * @ separador: o caracter utilizado como separador dos elementos
 * @returns array contendo todos os elementos da entrada; cada elemento
 *          tem espacos em branco removidos do começo e do fim da string
 * @ exemplos
 *   tokenizer("fr; gr;la ", ";")          retornara  [ 'fr', 'gr', 'la' ]
 *   tokenizer(" Iliada, Odisseia ", ",")  retornara  [ 'Iliada', 'Odisseia' ]
 */
export function tokenizer(parm:string , separador:string){
    return parm.split(separador).map(function(item){
        return item.trim();
    });
}
