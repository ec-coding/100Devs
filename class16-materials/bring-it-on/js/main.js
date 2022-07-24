// *Variables*
// Create a variable and console log the value

let numberOne = 1

console.log(numberOne)

// Create a variable, add 10 to it, and alert the value

let sumTwo = 5

alert( sumTwo + +10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(s1,s2,s3,s4) {
    alert( +s1 - +s2 - +s3 - +s4)
}

subtractFour(20,8,6,2)

// Create a function that divides one number by another and returns the remainder

function divideMod(d1,d2) {
    return +d1 % +d2
}

console.log(divideMod(8,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumJumanji(j1,j2) {
    let plus = +j1 + +j2
    if (plus > 50) {
        alert("Jumanji!")
    }
}

sumJumanji(50,80)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(m1,m2,m3) {
    let divisor = +m1 * +m2 * +m3;
    if (divisor % 3 === 0) {
        alert("ZEBRA!")
    }
}

multiThree(9,6,3)


//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(word1,num1) {
    for(let i = 1; i <= num1; i++) {
        console.log(word1)
    }
}

wordNum('endure',8)