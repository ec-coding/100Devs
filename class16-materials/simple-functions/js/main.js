//---Easy
//create a function that subtracts two numbers and alerts the difference

function result(n1,n2) {
    alert( n1 - n2)
}

result(4,2)

//create a function that divides three numbers and console logs the quotient

function divisor(x1,x2,x3) {
    console.log( x1 / x2 / x3)
}

divisor(12,4,3)

//create a function that multiplys three numbers and returns the product

function product(m1,m2,m3) {
    return m1 * m2 * m3
}

let multiply = product(12,5,2)

alert(multiply)


function turnIntoMoney() {
    let multiply = product(4,3,2)
    alert( '$' + multiply)
}

turnIntoMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function turnsThree(t1,t2,t3) {
    // let addTwo = +t1 + +t2;
    // return +addTwo % +t3  
    return (t1 + t2) % t3
}

console.log(turnsThree(8,6,5))


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFour(f1,f2,f3,f4) {
    let multTwo = +f1 * +f2;
if (multTwo > 100) {
    console.log(+f3 + +f4)
} else if (multTwo < 100) {
    console.log(+f3 - +f4)
} else {
    alert( +f1 * +f2 * +f3 % +f4)
}
}

takeFour(50,2,3,70)