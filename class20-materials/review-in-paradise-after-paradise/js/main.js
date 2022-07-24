// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


let takeArray = [4, 7, 9, 4]

function arrayGames() {

let lastVar = takeArray [ takeArray.length - 1 ]

 if (takeArray[0] < lastVar) {
    alert("Hi")
} else if (takeArray[0] > lastVar) {
    alert("Bye")
} else {
    alert("We close in an hour")
}
}

arrayGames()