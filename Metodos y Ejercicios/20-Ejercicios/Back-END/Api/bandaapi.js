const request = require('request');

const URL_BASE = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=';

function bandGenre(bandname) {

    request.get(URL_BASE + bandname, (error, response, body) => {
        if (response.statusCode === 200) {
            const bodyInJson = JSON.parse(body);

            if (bodyInJson.artists != null) {
                console.log(bodyInJson.artists[0].strGenre);
            } else {
                console.log('no existe la banda owo');
            }
        } else {
            console.log(error);

        }
    });
};

bandGenre('gorillakljkz');