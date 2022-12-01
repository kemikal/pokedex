export default function printPokemonData(pokemonUrl) {

    fetch(pokemonUrl)
    .then(res => res.json())
    .then(data => {
         console.log("pokemon data", data);
        pokemonData.innerHTML = "<h3>" + data.name + "</h3>";

        data.moves.map(move => {
           // console.log("a move", move.move.name);
            pokemonData.insertAdjacentHTML("beforeend", " - " + move.move.name + " - ")
        })

        let pokemonImage = document.createElement("img");
        pokemonImage.src = data.sprites.front_default
        
        pokemonData.appendChild(pokemonImage);
    })

}