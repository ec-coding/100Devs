// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question

const wordAssign = "difficulty"

const variableSentence = `The ${wordAssign} of JavaScript is beginning to climb.`

if (variableSentence.indexOf("?") != -1) {
    alert ("This is a question!")
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

const multipleWords = "I am replacing each instance of the word jr. dev, so that you can see this method replaces jr. dev multiple times."

const replaceWords = multipleWords.replaceAll('jr. dev', 'software engineer')

console.log(replaceWords)

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    let random = Math.random() 
        if (random < .33) {
            return 'rock'
        } else if (random < .66) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

console.log(rockPaperScissors())

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function botRPS(playerInput) {
    let botPick = rockPaperScissors()
    if ( (playerInput === "rock" && botPick === "scissors") || (playerInput === "paper" && botPick === "rock") || (playerInput === "scissors" && botPick === "paper")) {
        console.log("You win!");
    } else if (playerInput === botPick) {
        console.log("You tied!");
    } else {
        console.log("You lost!")
    }
}

botRPS("rock")


//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function rpsLooper(rpsArray) {
    rpsArray.forEach( choice => botRPS(choice) )
}

rpsLooper(['rock', 'paper', 'scissors'])