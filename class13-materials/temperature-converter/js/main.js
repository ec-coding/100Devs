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


function filterRange(arr, a, b) {

    let result = arr.filter(num => num >= a && num <= b)
    console.log(result)
  }
  
  filterRange([5, 3, 8, 1], 1, 4)
  