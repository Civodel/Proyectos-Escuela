const request = require('request');
const url = 'https://pokeapi.co/api/v2/pokemon/'

function getPokeTypes(pokemonNameorId) {
    const poke = url + pokemonNameorId;
    request.get(url + pokemonNameorId, (error, response, body) => {

        if (response.statusCode === 200) {
            const bodyJson = JSON.parse(body);
            console.log(`Pokemon name: ${bodyJson.name}`);
            console.log(`Pokedex number: ${bodyJson.id}`);
            console.log(`Pokemon type(s):`);
            for (let i = 0; i < bodyJson.types.length; i++) {
                console.log(bodyJson.types[i].type.name);
            }
        } else {
            console.log('error');

        }
    });


};

console.log(getPokeTypes('30'));