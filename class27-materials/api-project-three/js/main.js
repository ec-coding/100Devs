//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getRandomCards)

function getRandomCards(){

  const url = `https://api.pokemontcg.io/v2/cards/?`

  fetch(url + `pageSize=50`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let randomCard1 = Math.floor(Math.random() * data.data.length)
        let randomCard2 = Math.floor(Math.random() * data.data.length)
        let randomCard3 = Math.floor(Math.random() * data.data.length)

        document.querySelector('#card1name').innerText = data.data[randomCard1].name
        document.querySelector('#card1img').src = data.data[randomCard1].images.small

        document.querySelector('#card2name').innerText = data.data[randomCard2].name
        document.querySelector('#card2img').src = data.data[randomCard2].images.small

        document.querySelector('#card3name').innerText = data.data[randomCard3].name
        document.querySelector('#card3img').src = data.data[randomCard3].images.small

        // document.querySelector('#card1name').innerText = data.data[0].name
        // document.querySelector('#card1img').src = data.data[0].images.small
        // document.querySelector('#card2name').innerText = data.data[1].name
        // document.querySelector('#card2img').src = data.data[1].images.small
        // document.querySelector('#card3name').innerText = data.data[2].name
        // document.querySelector('#card3img').src = data.data[2].images.small
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

