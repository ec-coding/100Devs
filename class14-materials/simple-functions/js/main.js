

//create a function that adds two numbers and alerts the sum
document.querySelector("#addCheck").addEventListener('click', add)

function add(){

//input 2 numbers
    let adding1 = parseInt(document.querySelector('#adding1').value)
    let adding2 = parseInt(document.querySelector('#adding2').value)
//add them
    let sum = adding1 + adding2

//display the total
    alert(sum)
}


//create a function that multiplys three numbers and console logs the product
document.querySelector("#multiplyCheck").addEventListener('click', multiply)

function multiply(){

//input 3 numbers
    let multi1 = document.querySelector('#multi1').value
    let multi2 = document.querySelector('#multi2').value
    let multi3 = document.querySelector('#multi3').value
//multiply them
    let product = +multi1 * +multi2 * +multi3

//console log the result
    console.log(product)
}


//create a function that divides two numbers and returns the ???
document.querySelector("#divideCheck").addEventListener('click', divide)

function divide(){

//input 2 numbers
    let divisor = document.querySelector('#divisor').value
    let dividend = document.querySelector('#dividend').value
//divide them
    let quotient = +divisor / +dividend

//display the result

    document.querySelector('#quotientGoesHere').innerText = quotient
}






