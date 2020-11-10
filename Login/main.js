(function() {
    'use strict'

    var botonLogin = document.getElementById('login-btn')

    botonLogin.addEventListener('click', function() {


        var email = document.getElementById('exampleInputEmail1')
        var password = document.getElementById('exampleInputPassword1')


        var EMAIL_SUCCESS = 'micorreo@gmail.com'
        var PASSWORD_SUCCESS = '123'


        if (email.value === EMAIL_SUCCESS) {
            if (password.value === PASSWORD_SUCCESS) {

                $('#modal-login-success').modal('show')
            } else {
                alert('Usuario existe pero la contraseña nel')
            }
        } else {
            alert('Email no encontrado')
        }
    })
})()