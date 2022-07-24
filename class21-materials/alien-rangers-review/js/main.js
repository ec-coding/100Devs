//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tvShows = ['Power Rangers', 'Supernatural', 'Daredevil']

// function tvShowLoop() {
//     for (i = 0; i < tvShows.length; i++) {
//         console.log(tvShows[i])
// }
// }

// tvShowLoop()

tvShows.forEach( show => console.log( show ) ) 


//Create and array of numbers

let numArray = [7, 12, 4, 3, 6, 9]

//Return a new array of numbers that includes every even number from the previous Arrays

// const evenNum = numArray.filter(number => {
//     return number % 2 === 0;
// });

// console.log(evenNum)

let onlyEvens = arr => arr.filter( n => n % 2 === 0) //Filter will create a new array, but only with elements that pass the conditional check

console.log(onlyEvens(numArray))


//Create a function that takes in an array of numbersimage.pngimage.png
//Alert the sum of the second lowest and the second highest number

// numArr = [34, 12, 4, 14, 94]

// function sumArray(numArr) {
//     firstLargestNumber = Math.max(...numArr)
//     index = numArr.indexOf(firstLargestNumber)
//     numArr.splice(index, 1)
//     secondLargestNumber = Math.max(...numArr)

//     firstSmallestNumber = Math.min(...numArr)
//     index = numArr.indexOf(firstSmallestNumber)
//     numArr.splice(index, 1)
//     secondSmallestNumber = Math.min(...numArr)

//     alert(secondLargestNumber + secondSmallestNumber)
// }

// sumArray([34, 12, 4, 14, 94])

function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b)=> a-b)
    alert( sorted[1] + sorted[ sorted.length - 2] )
}

sumSecondLowAndHigh([2,3,1,5,4])


const fruits = ['mango', 'papaya', 'orange', 'apple']

fruits.forEach(fruits => console.log(`I want to eat a ${fruits}.`));