//Create an array of movies with at least three movies.

let movieArray = ['RoboCop', 'Terminator 2', 'Independence Day']

//Using the array from above, store the first movie in a variable

let varOne = movieArray [0]

//Get the length of the original array and store it in a new variable

let arrayLength = movieArray.length

console.log(arrayLength)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

// let varThree = movieArray[2]

let varThree = movieArray [ movieArray.length - 1 ]  //movieArray.length would always give you the number of ELEMENTS
                                                    // -1 is there because arrays start at 0 (The last element in the array will always be off by 1 because of index)

console.log(varThree)

// let bestColors = ['green', 'blue', 'yellow', 'red']

// for(let i = 0; i < bestColors.length; i++) {
//     console.log( bestColors[i] )
// }

let bestColors = ['green', 'blue', 'yellow', 'black'] 

bestColors.forEach ((x,i)=> console.log(x,i))