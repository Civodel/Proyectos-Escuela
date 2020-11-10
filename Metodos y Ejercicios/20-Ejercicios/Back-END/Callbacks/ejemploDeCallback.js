let getUsuarioById = (id, callback) => {

    let usuario = {
        noombre: 'Fermin',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la DB`);
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (error, usuario) => {
    if (error) {

        return console.log(error);

    }
    console.log('Usuario en la base de datos', usuario);
});