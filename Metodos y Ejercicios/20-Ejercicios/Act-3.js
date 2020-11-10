/* 3. Escribe una función que reciba un string como parametro y 
regrese el string con "Py" al principio, si el string ya tiene 
"Py" regresar el string original
 Ej ---> addPy("hola") resultado ---> "Pyhola"
 */
let reGex = /^(Py|PY|py|pY)/g;
let addPy = (Pstring) => {
    if (typeof Pstring == "string") {

        if (reGex.test(Pstring) == true) {
            return Pstring.replace(reGex, '');
        } else {
            Pstring = "Py" + Pstring;
            return Pstring;
        }
    } else {
        return "No es un String";
    }
}
console.log(addPy("PyHola"));