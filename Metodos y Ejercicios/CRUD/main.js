const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/';

function createAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {
    const URI = 'authors/'
    var URL_FINAL = URL_BASE + URI

    var jsonSend = {
        "name": nombre,
        "last_name": apellidos,
        "nacionalidad": nacionalidad,
        "biography": biografia,
        "gender": genero,
        "age": edad
    }

    return new Promise((resolve, reject) => {
        request.post({ url: URL_FINAL, form: jsonSend }, (err, response, body) => {
            let json = JSON.parse(body)
            response.statusCode == 201 ?
                resolve(json) :
                reject('Error al crear un nuevo autor')
        })
    })
}



function readAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.get(URL_FINAL, (error, response, body) => {


            response.statusCode == 200 ?
                resolve(JSON.parse(body)) :
                reject(`404: El autor con id ${id} no existe.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}



function updateAuthor(id, name, last_name, nacionalidad, biography, gender, age) {
    const URI = `authors/${id}/`;
    var urlendpoint2 = URL_BASE + URI;
    var jsonUpdate = {
        "name": name,
        "last_name": last_name,
        "nacionalidad": nacionalidad,
        "biography": biography,
        "gender": gender,
        "age": age
    }
    return new Promise((resolve, reject) => {
        request.put({ url: urlendpoint2, form: jsonUpdate }, (error, response, body) => {
            response.statusCode == 200 ?
                resolve(JSON.parse(body)) :
                reject(`Error en Update: El autor con id ${id} no pudo ser actualizado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}


function deleteAuthor(id) {
    const URI = `authors/${id}/`;
    var URL_FINAL = URL_BASE + URI;
    return new Promise((resolve, reject) => {
        request.delete(URL_FINAL, (error, response, body) => {
            response.statusCode == 204 ?
                resolve("Autor eliminado exitosamente") :
                reject(`Error al eliminar: El autor con id ${id} no pudo ser eliminado.\nCuerpo de la respuesta:\n${body}\nError:\n${error}`)
        });
    });
}



createAuthor('Belen', 'Billarreal', 'MX', 'Sensei', 'M', 1)
    .then((autorCreado) => {
        console.log(autorCreado);
        return updateAuthor(autorCreado.id, 'Berenice', 'Villarreal')
    })
    .then((autorActualizado) => {
        console.log(autorActualizado);
        return deleteAuthor(autorActualizado.id)
    })
    .then((autorEliminado) => {
        console.log(autorEliminado);
    })
    .catch((error) => console.log(error));