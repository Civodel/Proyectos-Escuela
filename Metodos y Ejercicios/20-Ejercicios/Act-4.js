/* 4. Escriba una funcion JavaScript para eliminar
 un carácter en la posición especificada de una cadena dada 
 y devolver la nueva cadena
 Ej ---> removeChar("Hola",2) resultado --> "Hoa"
 */
let removeChar = (pString, removePos) => {

    if (removePos < pString.length) {
        let varAux = pString.split('', pString.length);

        return (pString.replace(varAux[removePos - 1], ''));

    } else {
        return `la posicion ${removePos} no es valida `
    }
}
console.log(removeChar("Aiuda", 2));