//Create a function that grabs the number of snacks from the input and tells you to stop that many times

let snacks = document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {

    document.querySelector('#stops').innerText = ''

    let snackCounter = Number(document.querySelector('input').value);

    for(let i = 1; i <= snackCounter; i++) {//<-- What is the i++ for? Ask Tatsu

        document.querySelector('#stops').innerText += " Stop snacking!"

    }  //<-- What happens if I don't put the above querySelector in brackets for the for loop?
}