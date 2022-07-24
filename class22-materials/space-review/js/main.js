//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArray = [6, 8, 12, 4]

// let sum = 0

// for (let i = 0; i < numArray.length; i++) {
//     sum = sum + numArray[i]
// }

// console.log(sum)


let sum = numArray.reduce( (acc, c) => acc + c, 0 ) //comma 0 makes the accumulator start at 0 

alert(sum)

//converting a string to a number:
//Number(c)
//+c


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
