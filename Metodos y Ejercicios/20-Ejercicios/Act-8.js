/* 8. Escriba una función de de JavaScript 
para crear una nueva cadena a partir de una cadena dada con
el primer carácter de la cadena dada agregado al principio y al final.
Ej --> addFisrt("Hola") resultado ---> "HHolaH"
 */

let addFisrt = (pString) => {
    pString.split("", pString.lentgh);
    let reGex = /^[A-Z]/;
    let rString;
    let popFirst = reGex.exec(pString).pop();
    rString = popFirst + pString + popFirst;
    return rString;
}
console.log(addFisrt("Aiuda"));