const request = require('request');

const URL_BASE = 'https://www.superheroapi.com/api.php/1824612991012125/306';

function superHerofistAppearance() {
    request.get(URL_BASE, (error, response, body) => {
        if (response.statusCode === 200) {
            const bodyInJSON = JSON.parse(body);

            console.log(`La primera aparicion de ${bodyInJSON.name } fue en ${bodyInJSON.biography['first-appearance']} de ${bodyInJSON.biography.publisher}`);
        }
    });

};
superHerofistAppearance();