/**
 * Funćão de verificação de dígito verificador de ISBN. Retorna verdadeiro se o dígito 
 * de verificação confere, falso caso contrário. 
 * @param isbn string representando um número ISBN, que pode ter separadores por hífem 
 *             ou espacos. 
 * @returns 
 */
function checkISBN(isbn){
    // Limpa caracter '-' da string
    isbn = isbn.split('-').join('').split(' ').join('');
    
    // Convert string into array
    const isbndigits = [...isbn]; 
    let acumulador = 0;
    for(let i=0; i < 12; i++){
        //console.log(isbndigits[i]);
        if (i%2 == 0){   // 
            //console.log("==> *1 =",parseInt(isbndigits[i]) * 1)
            acumulador += parseInt(isbndigits[i]) * 1;
        } else {
            //console.log("==> *3 =", parseInt(isbndigits[i]) * 3)
            acumulador += parseInt(isbndigits[i]) * 3;
        }
    }

    let digito = 10 - (acumulador % 10); 
    (digito === 10)? digito=0: digito; 
    //console.log(digito);
    return isISBNValido(parseInt(isbndigits[12]), digito);
}

/**
 * Compara o digito verificador do ISBN informado com o calculado, 
 * e retorna se eles são identicos ou não. 
 * @param digito digito verificador presente na string de entrada
 * @param digitoCalc digito verificador calculado
 * @returns true se os dois digitos correspondem, false o contrário
 */
function isISBNValido(digito, digitoCalc){
    if(digito == digitoCalc){
        return true
    } else {
        return false;
    }
}


// Casos de teste de isbn
let isbnList = ['978-0-321-19368-1','978-85-7605-119-0', '9782760515000',
                '9782212135626', '9781585109388', '978-1-62164-146-9', 
                '978-1-944418-73-1', '978-2-76586-040-2'];

isbnList.forEach(element => {
    console.log("ISBN ", element, " ", checkISBN(element));
});

