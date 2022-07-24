//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const poke1 = document.querySelector('#poke1').value
  const poke2 = document.querySelector('#poke2').value
  const url = 'https://pokeapi.co/api/v2/pokemon/'+poke1
  const url2 = 'https://pokeapi.co/api/v2/pokemon/'+poke2
  let pokeStore = []
  let pokeImg = []

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        pokeStore.push(data.types[0].type.name)
        pokeImg.push(data.sprites.front_shiny)
        
        document.querySelector('#pkmn-name-1').innerText = data.name
        document.querySelector('#pkmn-type-1').innerText = ''
        data.types.forEach( element => {
          //create an li
          const li = document.createElement('li')
          //add text to li
          li.textContent = element.type.name
          //append the li to the ul
          document.querySelector('#pkmn-type-1').appendChild(li)
        })
        fetch(url2)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

          pokeStore.push(data.types[0].type.name)
          pokeImg.push(data.sprites.front_shiny)
      

          document.querySelector('#pkmn-name-2').innerText = data.name
          document.querySelector('#pkmn-type-2').innerText = ''
          data.types.forEach( element => {
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = element.type.name
            //append the li to the ul
            document.querySelector('#pkmn-type-2').appendChild(li)
          })

          document.querySelector('#pokeImg1').src = pokeImg[0]
          document.querySelector('#pokeImg2').src = pokeImg[1]

          // if((pokeStore[0] === "grass" && pokeStore[1] === 'water')){
          //   document.querySelector('#pokeImg1').src = pokeImg[0]
          //   document.querySelector('#pokeImg2').src = pokeImg[1]
          //   document.querySelector('h2').innerText = " 2x > "
          // }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });


      })
      .catch(err => {
          console.log(`error ${err}`)
      });



      
}