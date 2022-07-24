//Write your psuedo code first! 
//0 -> 32

document.querySelector("#check").addEventListener('click', convert)


function convert() {
    let celsius = document.querySelector('#celsius').value

//Get the celsius value
    celsius = celsius * 1.8 + 32
//Convert it into farenheit
    document.querySelector('#resultGoesHere').innerText = celsius
//Display the farenheight value

}

  