// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let favHoliday = "Independence Day"
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let threeString = "fluoride"

// alert(threeString.charAt(threeString.length-3));
// alert(threeString.charAt(threeString.length-2));
// alert(threeString.charAt(threeString.length-1));

alert( threeString.slice(-3) )

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNum(f1,f2,f3,f4,f5) {
     alert(Math.abs(100 - f1 - f2 - f3 - f4 - f5))
}

fiveNum(1,2,3,4,5)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeNum(t1,t2,t3) {
    const highest = Math.max(t1,t2,t3);
    const lowest = Math.min(t1,t2,t3);
    console.log(`The lowest number is ${lowest} and the highest number is ${highest}.`)

}   

threeNum(150,85,70)


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = () => Math.random() < .5 ? 'heads' : 'tails'  //the 2nd half of this statement is an implicit return (does the return for you, you don't need to add it in)
    
//     let result = Math.random() //This returns a number between 0 and 1, which can also be decimals (doesn't include 1)
//     if(result < .5) {
//         return 'heads'
//     }else{
//         return 'tails'
//     }
// } 

// console.log(headsOrTails())


//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

const takeNum = (x1) => {
    for(let i = 1; i <= x1; i++){
        let result = headsOrTails()
        console.log(result)
    }
}   

takeNum(5)