(function() {

    function pokedex() {

        for (i = 0; i < 151; i++) {

            var info = document.getElementById('info')
            var div1 = document.createElement('div')
            div1.className = 'col-md-5'
            var image = document.createElement('img')
            image.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (i + 1) + '.png')
            image.className = 'card-img'
            image.setAttribute('id', 'buscar' + i)
            var div2 = document.createElement('div')
            div2.className = 'col-md-7'
            var card = document.createElement('div')
            card.className = 'card-body'
            var nombre = document.createElement('h5')
            nombre.innerHTML = pokemons[i].name.english
            nombre.className = 'card-title'
            nombre.style = 'font-weight: bold;text-decoration: underline;'
            var tipo = document.createElement('p')
            tipo.className = 'card-text'
            tipo.style = 'font-weight: bold;'
            if (pokemons[i].type.length == 2) {
                tipo.innerHTML = 'TIPO: ' + pokemons[i].type[0] + ', ' + pokemons[i].type[1]
            } else { tipo.innerHTML = 'TIPO: ' + pokemons[i].type[0] }
            var hp = document.createElement('p')
            hp.innerHTML = 'HP: ' + pokemons[i].base.HP
            hp.className = 'card-text'
            hp.style = 'font-weight: bold;'
            var hp2 = document.createElement('div')
            hp2.style = 'width: ' + pokemons[i].base.HP * 2 + 'px; height: 10px;background-color: aqua;'

            info.appendChild(div1)
            info.appendChild(div2)
            div1.appendChild(image)
            div2.appendChild(card)
            card.appendChild(nombre)
            card.appendChild(tipo)
            card.appendChild(hp)
            card.appendChild(hp2)
        }
    }

    pokedex()


})()