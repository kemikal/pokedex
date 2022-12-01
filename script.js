let pokemonLista = document.getElementById("pokemonLista");
let pokemonData = document.getElementById("pokemonData");

console.log("POKEMON FTW!");

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(res => res.json())
.then(pokemon => {
    printPokemons(pokemon);
})

function printPokemons(pokemons) {
   console.log("pokemon", pokemons); 

   pokemons.results.map(pokemon => {
     console.log("en pokemon", pokemon);

     let li = document.createElement("li");
     li.innerText = pokemon.name;

    pokemonLista.appendChild(li)
   })
}
