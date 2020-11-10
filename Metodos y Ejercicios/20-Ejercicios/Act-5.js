/* 5. Escriba un programa JavaScript para crear 
una nueva cadena a partir de una cadena dada cambiando
 la posición del primer y último carácter. La longitud de
  la cadena debe ser mayor o igual a 1.
Ej ----> firstLast("Hola") resultado ---> "aolH"
 */

let firstLast = (pString) => {
    let iString = "";
    for (let i = pString.length - 1; i >= 0; i--) {
        console.log(i);
        iString = iString + pString[i];
    }
    console.log(iString);
    console.log(pString.length);
    return iString;
}
console.log(firstLast("Hola"));