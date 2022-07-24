// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let x = false;
alert(x)


// Declare a variable, reassign it to your favorite color, and console log the value

let favColor = 'blue';
favColor = 'gray';
console.log(favColor)


// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNum(n1,n2,n3,n4){
    let fourSum = (n1 + n2 + n3) / n4
    return(fourSum)
}

fourNum(3,4,12,2)


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.


function twoSum(t1,t2) {
    console.log(Math.pow(t1, t2))
}

twoSum(8,4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function booString(boolean,string) {
    if (boolean = true) {
        alert(string)
    } else if (boolean = false) {
        console.log(string)
    }
    // b ? alert(string) : console.log(string)
}

booString(true,'WOOO!')

// const booString = (boolean, string) => b ? alert(str) : console.log(str)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function numLog(x1) {
    for(let i = 1; i <= x1; i++) {
if(i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz")
} else if (i % 5 === 0) {
    console.log("buzz")
} else if (i % 3 === 0) {
    console.log("fizz")
} else {
    console.log(i);
}
}
}

numLog(4)
