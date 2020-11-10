/* 7. Escriba una función de JavaScript para redondear 
un número a una cantidad específica de dígitos.
Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34
 */

let roundNumber = (float, intNumber) => {
    let divNumber = 1;
    let rNumber = 0;
    for (let index = 0; index < intNumber; index++) {
        divNumber = divNumber * 10
    }
    rNumber = (float * divNumber)
    return Math.trunc(rNumber) / divNumber
}

console.log(roundNumber(98.536554455, 3));