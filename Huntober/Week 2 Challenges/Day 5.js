// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. 
// The inner primitive values can move to any of the inner arrays, but the length of those inner arrays must always remain X. Other than that, shuffle away! 
// Do your best to have a thorough, random shuffle in a single call of your function.

// For example:
// myArray = [[1,2,3],[4,5,6],[7,8,9]]
// // shuffle shuffle
// => [[8,3,5],[2,4,9],[6,7,1]]

function arrSorter(arr) {
    let randomArr = arr.flat().sort((a, b) => 0.5 - Math.random())
    let newArr = []
    for (i = 0; i < randomArr.length; i += arr[0].length) {
        let insert = randomArr.slice(i, i + arr[0].length)
        newArr.push(insert)
    }
    return newArr
}

// PREP
// PARAMETERS
// Enter in an array with sub arrays containing numbers
// RETURNS
// Return the array with the same number/length of subarrays, but with the numbers sorted.
// EXAMPLES
// See above.
// PSEUDO
// Flatten the array, then sort it with the property of Math.random() and 0.5
// Create an empty array and set it to a variable
// Use a for loop to slice segments off the flattened array, with their lengths equal to the original subarrays
// Push the sliced segments into the empty array and return it
