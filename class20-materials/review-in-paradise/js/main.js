// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "pasta"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let twoString = "Calypso"

alert(twoString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeDivide(t1,t2,t3) {
    alert((+t1 / +t2) * +t3)
}

threeDivide(12,4,2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(o1) {
    console.log(Math.cbrt(o1).toFixed(4))
}

oneNum(9)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function month(m1) {
    let m1LowerCase = m1.toLowerCase()
if (m1LowerCase === 'may' || m1LowerCase === 'june' || m1LowerCase === 'july') {
    alert("YAY")
} else {
    alert("Booo")
}
}

month('june')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function takeNum(n1) {

for (i = 0; i <= n1; i++) {

if (i % 5 !== 0) {
    console.log(i)
 }
}
}

takeNum(12)
