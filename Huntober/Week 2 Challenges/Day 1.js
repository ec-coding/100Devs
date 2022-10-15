// Write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// // each of these arrays have 3 nested arrays of 3 strings each 
// const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

// const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
// const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
// const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// // if we were to use our function to compare all the possible pairs
// // ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// // etc.

function arrChecker(arr1, arr2) {
    for (i = 0; i < arr1.flat().length; i++) {
        if (arr1.flat()[i] !== arr2.flat()[i]) {
            return false;
        }
    }
    return true
}

// PREP
// PARAMETERS
// Enter in 2 arrays
// RETURNS
// Return true if all elements in both arrays match each other, otherwise return false
// EXAMPLES
// See above
// PSEUDO
// Flatten both arrays
// Use a for loop to scan each element in both arrays to check if they equal each other at the given index
// Return false if they do not, otherwise return true at the end