 //1. Crear una función que dado un año determine si es un año bisiesto o no.
 //Ej---> isLeap(2016)  Resultado ----> true

 //Para saber que un año es bisiesto dicho año poder ser dividido entre 400 y 4 dando como residuo 0



 let isLeapyear = (year) => {
     if (year % 100 == 0) {
         if (year % 400 == 0 && year % 4 == 0) {
             return `El año ${year} es bisiesto`;
         } else {
             return `El año ${year} no es bisiesto`;
         }
     } else {
         if (year % 4 == 0) {
             return `El año ${year} es bisiesto`;
         } else {
             return `El año ${year} no es bisiesto`;
         }
     }
 }
 console.log(isLeapyear(1600));