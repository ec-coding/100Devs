//Example fetch using pokemonapi.co

if(!localStorage.getItem('pokemonTeam')){  // Not False

} 

localStorage.setItem('pokemonTeam', "[]")

document.querySelector("#search-pokemon").addEventListener('click', getPokemon)

function getPokemon(){
  const choice = document.querySelector('input').value.toLowerCase()

  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#pokemon-name').innerText = data.name[0].toUpperCase() + data.name.substring(1);

        document.querySelector('#ability1').innerText = data.abilities[0].ability.name[0].toUpperCase() + data.abilities[0].ability.name.substring(1);

        document.querySelector('#ability2').innerText = data.abilities[1].ability.name[0].toUpperCase() + data.abilities[1].ability.name.substring(1);

        let randomMove1 = Math.floor(Math.random() * data.moves.length)  //This could all be transformed into one function -Kevin
        let randomMove2 = Math.floor(Math.random() * data.moves.length)
        let randomMove3 = Math.floor(Math.random() * data.moves.length)
        let randomMove4 = Math.floor(Math.random() * data.moves.length)

        document.querySelector('#move1').innerText = data.moves[randomMove1].move.name[0].toUpperCase() + data.moves[randomMove1].move.name.substring(1);
        document.querySelector('#move2').innerText = data.moves[randomMove2].move.name[0].toUpperCase() + data.moves[randomMove2].move.name.substring(1);
        document.querySelector('#move3').innerText = data.moves[randomMove3].move.name[0].toUpperCase() + data.moves[randomMove3].move.name.substring(1);
        document.querySelector('#move4').innerText = data.moves[randomMove4].move.name[0].toUpperCase() + data.moves[randomMove4].move.name.substring(1);

        document.querySelector('#pokemon-img').src = data.sprites.front_default

        return [data.abilities[0].ability.url, data.abilities[1].ability.url];
      })
          .then(abilityUrls => {
            abilityUrls.forEach((abilityUrl, index) => {
              fetch(abilityUrl)
              .then(res => res.json())
              .then(data => {
                  document.querySelector(`#ability${index + 1}desc`).innerText = data.flavor_text_entries.find(item => item.language.name == "en").flavor_text
              })
          })
      })
      .catch(err => {
        document.querySelector('#pokemon-name').innerText = "Error - Pokemon not found."
      });
}

// document.querySelector('#add-pokemon').addEventListener('click', addPokemon)


// function addPokemon() {
//   let pokemonTeam = JSON.parse(localStorage.getItem('pokemonTeam'))
//   pokemonTeam.push(document.querySelector('#pokemon-name').innerText)
//   localStorage.setItem('pokemonTeam', JSON.stringify(pokemonTeam))
//   document.querySelector('#team-first').innerText = pokemonTeam
// }
