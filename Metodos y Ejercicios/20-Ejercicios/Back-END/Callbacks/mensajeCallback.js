function mensajeInConsole(mensaje, callback) {
    callback(mensaje);
}

mensajeInConsole('Aiuda', (mensaje) => {
    console.log(mensaje);
    console.warn(mensaje);
    console.info(mensaje);
    console.table(mensaje);
    console.dirxml(mensaje);

})