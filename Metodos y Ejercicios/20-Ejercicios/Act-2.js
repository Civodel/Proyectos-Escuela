/* 2. Crear una función que genere un numero aleatorio entre 1 y 10, 
esta función recibe un numero como parametro si el numero es igual 
al numero generado aleatoriamente
 regresara "Buen Trabajo" de lo contrario regresara "Intenta de nuevo".
Ej ---> randomGuess(7)  resultado ---> "Buen trabajo" o "Intenta de Nuevo"
 */

let randomNumberguess = (num) => {

    rNum = (Math.floor(Math.random() * (11 - 1) + 1));
    console.log(rNum);
    if (num == rNum) {
        return ("Buen Trabajo");
    } else {
        return ("Intenta de Nuevo");
    }
}

console.log(randomNumberguess(9));