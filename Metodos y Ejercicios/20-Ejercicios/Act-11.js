/* 11. Escriba una función de
 Javascript que convierta un numero a formato moneda
Ej ---> convertExchange(2000) resultado --> "$2,000.00"
 */

let convertExchange = () => {
    let moni = 251234545656.56;
    let moniS;
    let moniArray;
    let moniCentavos;
    let respString = '';

    moniS = moni.toString();
    moniCentavos = moniS.split('.', 2);
    moniArray = moniCentavos.shift();
    moniArray = moniArray.split('', moniArray.length);
    while (moniArray.length > 3) {
        for (let i = 1; i < 4; i++) {
            respString = moniArray[moniArray.length - 1] + respString;
            moniArray.pop();
            console.log(moniArray.length);
        }
        respString = ',' + respString;
    }
    for (let a = moniArray.length; a > 0; a--) {
        respString = moniArray[moniArray.length - 1] + respString;
        moniArray.pop();
    }
    moniCentavos = '.' + moniCentavos;
    if (moniCentavos.length < 3) {
        moniCentavos = moniCentavos + '0';
    }
    console.log(moniCentavos.length);
    console.log(respString);
    console.log(moniCentavos);
    console.log(moniArray);

    return '$' + respString + moniCentavos;



}

console.log(convertExchange());