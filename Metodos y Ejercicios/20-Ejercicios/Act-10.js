/*
10. Escriba una función de JavaScript para contar 
el número de vocales en una cadena dada.
 */
let reGex = /[aeiou]/gi;
let vocalArray;

let vocalNumber = (pString) => {
    vocalArray = pString.match(reGex);
    return `La cadena ${pString} tiene ${vocalArray.length} vocales`;
}
console.log(vocalNumber("Aiiiiiiiiiiiiiiiiiiiuda"));