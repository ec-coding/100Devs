// I need twin functions, a function that swaps a given primitive value in a given 1-dimensional array to an index to the left, and another that swaps it to the right.

// Some things to note:

// If the given value is on the edge of the array and can't move in that direction, don't move it.
// The array passed in should be mutated by this function. Scandalous, I know.
// Example:

// COPY
// myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

myArray = ['abc', 'xyz', 1, 2, 'Hey!']

function arrLeft(value) {
    if ((myArray.indexOf(value) != 0) && (myArray.includes(value))) {
        let indexOfValue = myArray.findIndex((element) => (element === value));
        let leftOfIndex = indexOfValue - 1
        let leftOfIndexValue = myArray.find((element, index) => index === leftOfIndex)
        myArray.splice(indexOfValue, 1, leftOfIndexValue)
        myArray.splice(leftOfIndex, 1, value)
        return myArray
    } else {
        return myArray
    }
}

function arrRight(value) {
    if ((myArray.indexOf(value) != myArray.length - 1) && (myArray.includes(value))) {
        let indexOfValue = myArray.findIndex((element) => (element === value));
        let rightOfIndex = indexOfValue + 1
        let rightOfIndexValue = myArray.find((element, index) => index === rightOfIndex)
        myArray.splice(indexOfValue, 1, rightOfIndexValue)
        myArray.splice(rightOfIndex, 1, value)
        return myArray
    } else {
        return myArray
    }
}

// PREP
// PARAMETERS
// Enter in an array, and a primitive value
// RETURNS
// Return the array with a particular array shifted (left or right)
// EXAMPLES
// See above
// PSEUDO
// Take the index of the primitive value in the array by using indexOf
// If the function is moving the value to the left, take the index of the item left of it by subtracting 1 from the primitive value's index
// If the function is moving the value to the right, take the index of the item right0 of it by adding 1 from the primitive value's index
// After the index of the side value is obtained, we will use that index to replace that of the entered primitive value's index
// Splice will be used to replace the two values, since we want to mutate the original array