let empleados = [{
    id: 1,
    nombre: 'Fermin'
}, {
    id: 2,
    nombre: 'Karla'
}, {
    id: 3,
    nombre: 'Alonso'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(null, `No existe un empleado asi en la DB ${id} `)
    } else {
        callback(null, empleadoDB);
    }
}
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(null, `No existe un salario del empleado ${empleado.nombre} `)
    } else {
        callback(null, salarioDB);
    }

}

getEmpleado(2, (error, empleado) => {
    if (error) {
        return console.log(error);
    }
    getSalario(empleado, (error, salario) => {
        if (error) {
            return console.log(error);
        }
        console.log(empleado.nombre);
        console.log(salario.salario);
    });
});