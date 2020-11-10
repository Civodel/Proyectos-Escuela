/* 9. Escriba una función deJavaScript para 
verificar si dos valores enteros dados están en el rango 50..99 
(inclusive). Devuelve verdadero si alguno de ellos está en dicho rango.
Ej --> inRange(55,47) resultado ---> true */


let inRange = (val1, val2) => {
    if ((val1 >= 50 && val1 <= 99) || val2 >= 50 && val2 <= 99) {
        return "true";

    } else {
        return false;
    }
}
console.log(inRange(50, 99));