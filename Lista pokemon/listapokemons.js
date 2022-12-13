function getPokemons() {
    return [
        {
            nome: 'Pikachu',
            tipo: 'eletric',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        },
        {
            nome: 'Squirtle',
            tipo: 'water',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        },
        {
            nome: 'Bulbasaur',
            tipo: 'grass',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        },
        {
            nome: 'Charmander',
            tipo: 'fire',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        },
        {
            nome: 'Meowth',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
        },
        {
            nome: 'Rattata',
            tipo: 'normal',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png'
        },
        {
            nome: 'Jigglypuff',
            tipo: 'fairy',
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
        }
    ]
}

var listaPokemons = getPokemons();
var cardTemplate = document.getElementById('cardTemplate');

for (let index = 0; index < listaPokemons.length; index++) {
    var pokemon = listaPokemons[index];

    var card = cardTemplate.content.cloneNode(true).getElementById('card').outerHTML;
    card = card.replace(/{{nome}}/g, pokemon.nome);
    card = card.replace(/{{tipo}}/g, pokemon.tipo);
    card = card.replace(/{{imagem}}/g, pokemon.imagem);
    container.innerHTML += card;
    
}
