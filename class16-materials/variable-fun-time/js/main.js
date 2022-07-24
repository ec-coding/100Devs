//--- Easy
//create a variable and assign it a number

let numb = 25

//minus 10 from that number

numb = 25 - 10

//print that number to the console

console.log(numb)

//--- Medium
//create a variable that holds a value from the input

let newnumb = document.querySelector('#danceDanceRevolution').value

//add 25 to that number

newnumb = newnumb + +25

//alert that number

alert(newnumb)  // <-- Function Call

// alert is a method, AKA a built-in function

//--- Hard
//create a variable that holds the h1

const h1Hold = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

// document.querySelector('h1').addEventListener('click', sum)

// function sum() {
//     let total = +newnumb + +numb
//     console.log(total)
// }

h1Hold.addEventListener('click', sum)

function sum() {
    console.log(+newnumb + +numb)
}
