// *Variables*
// Declare a variable, assign it a value, and alert the value

let numberOne = 2

alert(numberOne)

// Create a variable, divide it by 10, and console log the value

let numberTwo = 20

console.log(+20 / +10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiThree(m1,m2,m3) {
    alert(+m1 * +m2 * +m3)
}

multiThree(4,3,2)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function numFour(n1,n2,n3,n4) {
    console.log((+n1 + +n2) - +n3 - +n4)
}

numFour(5,6,7,8)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function takeThree(t1,t2,t3) {
    let threeSum = ((100 + +t1) - +t2) / +t3;
    if (threeSum > 25) {
        console.log("WE HAVE A WINNNA")
    } 
}

takeThree(100,5,2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

// function dayOfTheWeek(day) {
//     if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
//         alert("week day")
//     } else if (day === 'Saturday' || day === 'Sunday') {
//         alert("weekend")
//     } else {
//         alert("Try again!")
//     }
// }

// dayOfTheWeek('Sunday')

function dayOfTheWeek(day) {
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        alert("week day")
    } else if (day === 'Saturday' || day === 'Sunday') {
        alert("weekend")
    } else {
        alert("Try again!")
    }
}

dayOfTheWeek('Tuesday')


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3


// function takeNumber(tn1) {
//     for(let i = 1; i <= tn1; i++) {
//         console.log(i);
//         i++;
//         i++;
//     }
// }

// takeNumber(12)

function takeNumber(tn1) {
    for(let i = 1; i <= tn1; i++) {
        console.log(i);
        i++;
        i++;
    }
}