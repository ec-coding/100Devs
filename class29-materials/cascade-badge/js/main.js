//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

let partyOrder = ['Onyx', 'Squirtle', 'Pikachu', 'Pidgeot']

function reverseParty() {
    const reversedPartyList = partyOrder.reverse()
    console.log(reversedPartyList)
}

reverseParty()

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of 
//each element in a is strictly greater than the sum of the cubes of each element in b.

let intArrayOne = [8, 4, 3, 12, 20]
let intArrayTwo = [2, 5, 7]

function intAnalyzer() {
    sumSquared = intArrayOne.reduce((a, num) => a + (num **2), 0)
    sumCubed = intArrayTwo.reduce((a, num) => a + (num **3), 0)
    console.log(sumSquared)
    console.log(sumCubed)
    if (sumSquared > sumCubed) {
        return true
    } else {
        return false
    }
}

console.log(intAnalyzer())


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

numberArray = [40, 2, 9, 6, 12, 5]

function arrayMultiple(arr) {
    return arr.filter((e,i) => e % i === 0)   //filtering the element and the index (but not the array)
}

console.log(arrayMultiple([40, 2, 3, 6, 13, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfValues([5, 2, '3', '5']))