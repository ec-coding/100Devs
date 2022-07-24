//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ['robocop', 'terminator 2', 'spawn']

for (i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies [i];
}

// movies.forEach ((x,i)=> document.querySelector('h2').innerText =(x))


//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((item, idx) => {
    numbers[idx] = item + 3
})

// for (i = 0; i < numbers; i++) {
//     console.log([numbers.forEach + 3])
// }


//Find the average of all the numbers from question three

let sum = 0 

for(let i = 0; i < numbers.length; i++){
    // sum += numbers[i]  
    sum = sum + numbers[i]    
}

console.log( sum / numbers.length )

// numbers.forEach((first) => sum += first)