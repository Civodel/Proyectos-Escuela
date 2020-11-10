(function() {
    "use strict"
    var banderas = document.querySelector('.flags')
    banderas.innerHTML = ''

    console.log(datos)

    console.log(datos[144])

    function obtenerPais() {
        var random = Math.floor(Math.random() * datos.length)
        console.log("Num pais:", random)
        return datos[random]
    }

    var paises = []


    for (var i = 0; i < 3; i++) {
        var pais = obtenerPais()
        paises.push(pais)
    }

    console.log(paises)
    var paisCorrecto = paises[Math.floor(Math.random() * paises.length)]
    console.log(paisCorrecto)


    var textoPais = document.getElementById('country-name')
    textoPais.innerHTML = paisCorrecto.translations.es


    var respuesta = document.getElementById('answer');
    var poblacion = document.getElementById('population');
    var capital = document.getElementById('capital');

    respuesta.innerHTML = ''
    poblacion.innerHTML = ''
    capital.innerHTML = ''


    for (var i = 0; i < paises.length; i++) {
        var img = document.createElement('img')
        img.setAttribute('src', paises[i].flag)
        img.setAttribute('id', paises[i].name)

        img.addEventListener('click', function(evento) {
            console.log(evento)
            console.log(evento.target)
            console.log(evento.target.id)
            if (paisCorrecto.name === evento.target.id) {
                respuesta.innerHTML = "¡Correcto!"
                poblacion.innerHTML = "Poblacion: " + paisCorrecto.population
                capital.innerHTML = "Capital: " + paisCorrecto.capital
            } else {
                respuesta.innerHTML = "¡Incorrecto!"
            }
        })
        banderas.appendChild(img)
    }

})();