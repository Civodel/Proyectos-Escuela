/* 
 6. Escriba un programa JavaScript
  para cambiar el uso de mayúsculas en todas las letras de una 
  cadena determinada.
 Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS" */

let changeMayus = (pString) => {
    let varAux = pString.split('', pString.length);
    let rString = "";
    let reGex = /([A-Z])/;
    varAux.forEach(element => {
        if (reGex.test(element) == true) {
            rString = rString + element.toLowerCase();
        } else {
            rString = rString + element.toUpperCase();
        }
    });
    return (rString);
}
console.log(changeMayus("HoooooooLa"));