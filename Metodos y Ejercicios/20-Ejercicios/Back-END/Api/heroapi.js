 //Constante que manda a llamar a la biblioteca request 
 //se importa la biblioteca request
 //request es una biblioteca que consume endPoints
 const request = require('request');
 //request solicita informacion al servidor
 //el metodo Get tiene dos parametros el endPoint(URL) y un callback 
 request.get('https://www.superheroapi.com/api.php/1824612991012125/306', (error, response, body) => {
     // console.log(error); = null
     //console.log(response); = respuesta completa que da el server
     //console.log(response.statusCode); // = respuesta completa que da el server
     const bodyEnJSON = JSON.parse(body); //convierte la respuesta del body que es un string a un json 
     console.log(bodyEnJSON.name);
     console.log('Ya nose que mas aiuda');
 });