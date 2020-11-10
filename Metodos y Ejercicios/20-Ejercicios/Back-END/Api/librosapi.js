/*  //importo la libreria request pa consumir endpoints
 const request = require('request');
 //creo el url base
 const URL_BASE = 'http://openlibrary.org/search.json?q=';


 function bookPeticion(nombredellibro) {
     //constante que lleva la url para la peticion
     const bookurl = URL_BASE + nombredellibro;
     //hago el request
     request.get(bookurl, (err, response, body) => {

         if (response.statusCode === 200) {
             const JSONRequestBody = JSON.parse(body);
             console.log('El primer libro de la busqueda es:');
             console.log(JSONRequestBody.docs[0].title_suggest);
             console.log('de:');
             for (let i = 0; i < JSONRequestBody.docs[0].author_name.length; i++) {
                 console.log(JSONRequestBody.docs[0].author_name[i]);

             }else{
                 console.log('no ai error no ai error);
             }
         }

     })

 }



 console.log(bookPeticion('jurassic park'));
 */

const request = require('request');

const URL_BASE = 'http://openlibrary.org/search.json?author=';

function getBooksByAuthor(author) {

    const authorBookSearch = URL_BASE + author;

    request.get(authorBookSearch, (err, response, body) => {
        if (response.statusCode === 200) {
            const bodyInJSON = JSON.parse(body);

            console.log(`El autor ${bodyInJSON}`);
        }
    });

};

getBooksByAuthor('Lovecraft');