/* 12. Hay dos matrices con valores individuales, 
escriba un programa JavaScript para calcular la suma de 
cada valor de índice individual de las matrices dadas
Ej. sumIndex([1,0,2,3,4],[3,5,6,7,8,13]) salida --> [4, 5, 8, 10, 12, 13]
 */
let sumIndex = (array1, array2) => {

    let arrayResp = [];
    while (array1.length > array2.length) {
        array2.push(0);

    }
    while (array2.length > array1.length) {
        array1.push(0);

    }

    for (let i = 0; i < array1.length; i++) {

        arrayResp[i] = array1[i] + array2[i];

    }

    return arrayResp;

}

console.log(sumIndex([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));