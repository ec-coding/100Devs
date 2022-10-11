// Today I'd like you to write a function that:

// takes in a given array of strings and move any entries containing the letter 'a' to the front
// then move any remaining entries that have over 3 characters to the back
// please preserve the relative order of entries within their given category
// Example:


// COPY
// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function arrShifter(myArr) {
    myArr.sort((a, b) => a.split('').length - b.split('').length)
    let reverseArr = myArr.slice().reverse()

    for (i = 0; i < reverseArr.length; i++) {
        if (reverseArr[i].split('').includes('a') == true) {
            let arrValue = reverseArr[i]
            let arrIndex = myArr.indexOf(arrValue)
            myArr.unshift(reverseArr[i])
            myArr.splice((arrIndex + 1), 1)
        }
    }
    return myArr
}

// PREP
// PARAMETERS
// Enter in an array
// RETURNS
// Return the array with entries longer than 3 characters pushed to the back, and entries containing the letter 'a' moved to the front
// EXAMPLES
// See above
// PSEUDO
// Start by sorting the array based on character length
// Create a copy of the array that is reversed
// Loop through the reversed array and take the index of any elements containing 'a'
// Set that element, and its index, to separate variables
// Unshift said element to the front of the array, and then delete its former instance by splicing its array + 1 (since it was added to the front)
// Return the array 