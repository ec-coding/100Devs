// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, 
// which will either move that value up one row or down one row in the array, keeping its same horizontal position. 
// It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array.

// myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// // Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

function pushUp(myGrid, value) {
    for (i = 0; i < myGrid.length; i++) {
        let targetArr = myGrid[i].flat().includes(value)
        if (targetArr) {
            if (myGrid.indexOf(myGrid[i]) != 0) {
                let firstValueIndex = myGrid[i].indexOf(value)
                let secondValue = myGrid[i - 1].find((e, i) => i === firstValueIndex)
                myGrid[i].splice(firstValueIndex, 1, secondValue)
                myGrid[i - 1].splice(firstValueIndex, 1, value)

            }
        }
    }
    return myGrid
}

function pushDown(myGrid, value) {
    for (i = 0; i < myGrid.length; i++) {
        let targetArr = myGrid[i].flat().includes(value)
        if (targetArr) {
            if (myGrid.indexOf(myGrid[i]) != myGrid.length - 1) {
                let firstValueIndex = myGrid[i].indexOf(value)
                let secondValue = myGrid[i + 1].find((e, i) => i === firstValueIndex)
                myGrid[i].splice(firstValueIndex, 1, secondValue)
                myGrid[i + 1].splice(firstValueIndex, 1, value)

            }
        }
    }
    return myGrid
}

// PREP
// PARAMETERS
// Enter in an array and a given value
// RETURNS
// Return the array with the given value pushed up or down in the grid,
// depending on which function is called (up or down)
// EXAMPLES
// See above.
// PSEUDO
// For the push up function, take the index of the given value's array, and
// check to see if there is an array before it. If so, take the index of that
// array.
// Afterwards, obtain the index of the given value, and find the value with
// that same index in the other array, and set them both to variables.
// Using splice, replace the array values with each other and return the result.
