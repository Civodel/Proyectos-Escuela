let tipeOfVar = (anyvar, callback) => {
    if (anyvar == null) {
        callback(null, 'La variable esta vacia');
    } else {
        let vartipe = typeof anyvar;

        callback(null, `la variable ${anyvar} es un ${vartipe}`);

    }
}


tipeOfVar(true, (error, response, body) => {
    if (error) {
        return console.log(error);
    } else {
        console.log(response);

    }
})