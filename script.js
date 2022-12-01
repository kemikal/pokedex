import printPokemonData from "./printPokemonData.js";

let pokemonLista = document.getElementById("pokemonLista");
let pokemonData = document.getElementById("pokemonData");
let nextButton = document.getElementById("nextButton");

const queryString = window.location.search;
console.log("qs", queryString);
const urlParams = new URLSearchParams(queryString);

let offset = urlParams.get("offset");
console.log("offset", offset);

fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offset)
.then(res => res.json())
.then(pokemon => {
    printPokemons(pokemon);
})

function printPokemons(pokemons) {

    offset = Number(offset) + 20;

    nextButton.href = "?offset=" + offset;

  // console.log("pokemon", pokemons); 

   pokemons.results.map(pokemon => {
    // console.log("en pokemon", pokemon);

     let li = document.createElement("li");
     li.innerText = pokemon.name;

     li.addEventListener("click", () => {
       //  console.log("Vi klickade på ", pokemon.name);
        printPokemonData(pokemon.url)
     })

    pokemonLista.appendChild(li)
   })
}
