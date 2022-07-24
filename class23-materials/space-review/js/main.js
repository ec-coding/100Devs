//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const arr = [4, 9, 20, 13, 12]

const sumOfArray = arr.reduce((a, b) => a + b, 0)  // The 0 tells the function to identify 'a' as a number

// alert( arr.reduce( (acc, c) => acc + c, 0) )

console.log(sumOfArray)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const arrTwo = [2, 4, 5, 6]

const numbSquared = arrTwo.map(number => number * number)

console.log(numbSquared)

//Create a function that takes string
//Print the reverse of that string to the console




function stringReverser = str => str.split('').reverse().join('')

console.log(joinString)


stringReverser(('typhoon'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindromeChecker(str) {
    if (str === stringReverser(str))
    alert('Palindrome Detected!')
}

palindromeChecker("oovoo")