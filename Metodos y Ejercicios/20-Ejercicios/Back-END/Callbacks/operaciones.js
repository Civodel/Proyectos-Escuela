let operations = (a, b, callback) => {
    if (callback == suma) {
        callback(null, a + b)
    } else if (callback == resta) {
        callback(null, a - b)

    } else if (callback == multi) {
        callback(null, a * b)
    }


}

let suma = (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
}
let resta = (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
}
let multi = (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
}

operations(5, 5, multi)