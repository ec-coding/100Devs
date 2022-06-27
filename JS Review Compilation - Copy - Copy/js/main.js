
// *******************************************************************************
// BACKGROUND PICKER
// *******************************************************************************

document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(127, 0, 255)'
    document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgb(255, 0, 0)'
  document.querySelector('body').style.color = 'white'
}


// *******************************************************************************
// ANGRY PARENT SIMULATOR
// *******************************************************************************

document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }


// *******************************************************************************
// CLASS WEEKEND BORING
// *******************************************************************************

document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()  //Functions require parenthesis at the end

  //Conditionals go here
if(day === "tuesday" || day === "thursday" ){
  document.querySelector('#placeToSee').innerText = "Class day!";
}else if(day === "saturday" || day === "sunday" ){
  document.querySelector('#placeToSee').innerText = "Weekend!";
}else{
  document.querySelector('#placeToSee').innerText = "BORING!";
  }
}


// *******************************************************************************
// SIMPLE CALCULATOR
// *******************************************************************************

let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#atlas').addEventListener('click', sub8)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub8() {
  total = total - 8
  document.querySelector('#placeToPutResult').innerHTML = total
}


// *******************************************************************************
// BACHELOR CODE 1
// *******************************************************************************

document.querySelector('#finalRose').addEventListener('click', hide)

function hide(){
	document.querySelector('#claire').style.display = 'none'
	document.querySelector('#sharleen').style.display = 'none'
}


// *******************************************************************************
// BACHELOR CODE 2
// *******************************************************************************

const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', andiNext)
document.querySelector('#claireNext').addEventListener('click', claireNext)
document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function andiNext(){
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

function claireNext(){
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function sharleenNext(){
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}


// *******************************************************************************
// BACHELOR CODE 3
// *******************************************************************************

const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

//Check which contestant has the rose

//If the right person has it, show their picture

//If the wrong person is selected, alert "Wrong!"

let homeWorld = "Earth"

let currentVisitor = "Mark"


// *******************************************************************************
// TEMPERATURE CONVERTER
// *******************************************************************************

//Write your psuedo code first! 
//0 -> 32

document.querySelector("#check").addEventListener('click', convert)


function convert() {
    let celsius = document.querySelector('#celsius').value

//Get the celsius value
    celsius = celsius * 1.8 + 32
//Convert it into farenheit
    document.querySelector('#resultGoesHere').innerText = celsius
//Display the farenheight value

}

  
// *******************************************************************************
// AGE CHECKER
// *******************************************************************************

// //Create a conditonal that checks their age
// //If under 16, tell them they can not drive

// if (age < 16) {
//     console.log("You cannot drive.")
// }
// //If under 18, tell them they can't hate from outside the club, because they can't even get in

// if (age < 18) {
//     console.log("You can't hate from outside the club because you can't even get in")
// }

// //If under 21, tell them they can not drink

// if (age < 21) {
//     console.log("You cannot drink.")
// }

// //If under 25, tell them they can not rent cars affordably

// if (age < 25) {
//     console.log("You cannot rent cars affordably.")
// }

// //If under 30, tell them they can not rent fancy cars affordably

// if (age < 30) {
//     console.log("You cannot rent fancy cars affordably.")
// }

// //If under over 30, tell them there is nothing left to look forward too

// if (age > 30) {
//     console.log("There is nothing left to look forward to")
// }

let age = 17

if  (age < 16) {
    console.log("You cannot drive.");
}else if (age < 18) {
    console.log("You can't hate from outside the club because you can't even get in.");
}else if (age < 21) {
    console.log("You cannot drink.");
}else if (age < 25) {
    console.log("You cannot rent cars affordably.");
}else if (age < 30) {
    console.log("You cannot rent fancy cars affordably.");
}else if (age >= 30) {
    console.log("There is nothing left to look forward to.")
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector('h1').addEventListener('click', result)

function result() {
    document.querySelector('p').innerText = age;

}


// *******************************************************************************
// BRING IT ON
// *******************************************************************************

// *Variables*
// Create a variable and console log the value

let numberOne = 1

console.log(numberOne)

// Create a variable, add 10 to it, and alert the value

let sumTwo = 5

alert( sumTwo + +10)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFour(s1,s2,s3,s4) {
    alert( +s1 - +s2 - +s3 - +s4)
}

subtractFour(20,8,6,2)

// Create a function that divides one number by another and returns the remainder

function divideMod(d1,d2) {
    return +d1 % +d2
}

console.log(divideMod(8,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function sumJumanji(j1,j2) {
    let plus = +j1 + +j2
    if (plus > 50) {
        alert("Jumanji!")
    }
}

sumJumanji(50,80)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiThree(m1,m2,m3) {
    let divisor = +m1 * +m2 * +m3;
    if (divisor % 3 === 0) {
        alert("ZEBRA!")
    }
}

multiThree(9,6,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordNum(word1,num1) {
    for(let i = 1; i <= num1; i++) {
        console.log(word1)
    }
}

wordNum('endure',8)


// *******************************************************************************
// BRING IT ON AGAIN
// *******************************************************************************

// *Variables*
// Declare a variable, assign it a value, and alert the value

let numberOne = 2

alert(numberOne)

// Create a variable, divide it by 10, and console log the value

let numberTwo = 20

console.log(+20 / +10)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiThree(m1,m2,m3) {
    alert(+m1 * +m2 * +m3)
}

multiThree(4,3,2)

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function numFour(n1,n2,n3,n4) {
    console.log((+n1 + +n2) - +n3 - +n4)
}

numFour(5,6,7,8)

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function takeThree(t1,t2,t3) {
    let threeSum = ((100 + +t1) - +t2) / +t3;
    if (threeSum > 25) {
        console.log("WE HAVE A WINNNA")
    } 
}

takeThree(100,5,2)

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

// function dayOfTheWeek(day) {
//     if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
//         alert("week day")
//     } else if (day === 'Saturday' || day === 'Sunday') {
//         alert("weekend")
//     } else {
//         alert("Try again!")
//     }
// }

// dayOfTheWeek('Sunday')

function dayOfTheWeek(day) {
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        alert("week day")
    } else if (day === 'Saturday' || day === 'Sunday') {
        alert("weekend")
    } else {
        alert("Try again!")
    }
}

dayOfTheWeek('Tuesday')


//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3


// function takeNumber(tn1) {
//     for(let i = 1; i <= tn1; i++) {
//         console.log(i);
//         i++;
//         i++;
//     }
// }

// takeNumber(12)

function takeNumber(tn1) {
    for(let i = 1; i <= tn1; i++) {
        console.log(i);
        i++;
        i++;
    }
}


// *******************************************************************************
// SIR SAVAGE THE 21ST
// *******************************************************************************

//Create a function that has a loop that prints '21' 21 times to the console and then call that function

function savage21() {
    for(let i = 1; i < 22; i++) {
        document.querySelector('#savageSays').innerText += " 21"
}
}
savage21()

//Bonus can you make it print '21' 21 times to the dom?


// *******************************************************************************
// STOP SNACKING
// *******************************************************************************

//Create a function that grabs the number of snacks from the input and tells you to stop that many times

let snacks = document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking() {

    document.querySelector('#stops').innerText = ''

    let snackCounter = Number(document.querySelector('input').value);

    for(let i = 1; i <= snackCounter; i++) {//<-- What is the i++ for? Ask Tatsu

        document.querySelector('#stops').innerText += " Stop snacking!"

    }  //<-- What happens if I don't put the above querySelector in brackets for the for loop?
}


// *******************************************************************************
// VARIABLE FUN TIME
// *******************************************************************************

//--- Easy
//create a variable and assign it a number

let numb = 25

//minus 10 from that number

numb = 25 - 10

//print that number to the console

console.log(numb)

//--- Medium
//create a variable that holds a value from the input

let newnumb = document.querySelector('#danceDanceRevolution').value

//add 25 to that number

newnumb = newnumb + +25

//alert that number

alert(newnumb)  // <-- Function Call

// alert is a method, AKA a built-in function

//--- Hard
//create a variable that holds the h1

const h1Hold = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

// document.querySelector('h1').addEventListener('click', sum)

// function sum() {
//     let total = +newnumb + +numb
//     console.log(total)
// }

h1Hold.addEventListener('click', sum)

function sum() {
    console.log(+newnumb + +numb)
}


// *******************************************************************************
// BRING IT ON - ALL OR NOTHING
// *******************************************************************************

// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let x = false;
alert(x)

// Declare a variable, reassign it to your favorite color, and console log the value

let favColor = 'blue';
favColor = 'gray';
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNum(n1,n2,n3,n4){
    let fourSum = (n1 + n2 + n3) / n4
    return(fourSum)
}

fourNum(3,4,12,2)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function twoSum(t1,t2) {
    console.log(Math.pow(t1, t2))
}

twoSum(8,4)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function booString(boolean,string) {
    if (boolean = true) {
        alert(string)
    } else if (boolean = false) {
        console.log(string)
    }
    // b ? alert(string) : console.log(string)
}

booString(true,'WOOO!')

// const booString = (boolean, string) => b ? alert(str) : console.log(str)

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function numLog(x1) {
    for(let i = 1; i <= x1; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(i);
        }
    }
}

numLog(4)


// *******************************************************************************
// ARRAYS - IN IT TO WIN IT
// *******************************************************************************

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


// *******************************************************************************
// ARRAYS - FIGHT TO THE FINISH
// *******************************************************************************

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


// *******************************************************************************
// REVIEW - IN PARADISE
// *******************************************************************************

// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = "pasta"
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let twoString = "Calypso"

alert(twoString[1])

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeDivide(t1,t2,t3) {
    alert((+t1 / +t2) * +t3)
}

threeDivide(12,4,2)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(o1) {
    console.log(Math.cbrt(o1).toFixed(4))
}

oneNum(9)


// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function month(m1) {
    let m1LowerCase = m1.toLowerCase()
if (m1LowerCase === 'may' || m1LowerCase === 'june' || m1LowerCase === 'july') {
    alert("YAY")
} else {
    alert("Booo")
}
}

month('june')


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function takeNum(n1) {

for (i = 0; i <= n1; i++) {

if (i % 5 !== 0) {
    console.log(i)
 }
}
}

takeNum(12)


// *******************************************************************************
// REVIEW - IN PARADISE AFTER PARADISE
// *******************************************************************************

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


// *******************************************************************************
// REVIEW - SUMMER GAMES
// *******************************************************************************

//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr(arr){  //This function is taking in an array
    let product = 1     //Multiply by 1, not 0
    // arr.forEach( num => product = product * num )  //num is merely a bucket
    for(let i = 0; i < arr.length; i++){
        product = arr[i] * product
    }
    alert(product) //If you put this in the loop bracket, it will show the product of each multiplication
}

multiNumsInArr([10,2,3]) //This array is being passed into where "arr" is

//Parameters do not need to be declared (ie. arr, num)


// *******************************************************************************
// REVIEW - WINTER GAMES
// *******************************************************************************

//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenSelection(nums) {
    let evens = []
nums.forEach( n => {
    if(n % 2 === 0){
        evens.push(n)
        }
    })

    return evens
}

console.log(evenSelection([12, 5, 9, 14, 8]))


// *******************************************************************************
// TURBO REVIEW
// *******************************************************************************

// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let favDrink = " lemon flavored water "
favDrink = favDrink.trim()
console.log(favDrink)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let multipleWords = "rain, apple, signal, break"

console.log(multipleWords.search("apple"))

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

function checkWin(playerChoice){
    let botChoice = rockPaperScissors()
    if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ) {
        console.log("You win!")
    } else if ( (playerChoice === botChoice) ) {
        console.log("You tied!")
    } else {
        console.log("You lose!")
    }
}

checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
    arr.forEach( choice => checkWin(choice) )
}

playGameXTimes(['rock','paper','scissors'])


// *******************************************************************************
// SPACE REVIEW
// *******************************************************************************

//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let numArray = [6, 8, 12, 4]

// let sum = 0

// for (let i = 0; i < numArray.length; i++) {
//     sum = sum + numArray[i]
// }

// console.log(sum)


let sum = numArray.reduce( (acc, c) => acc + c, 0 ) //comma 0 makes the accumulator start at 0 

alert(sum)

//converting a string to a number:
//Number(c)
//+c

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not


// *******************************************************************************
// OBJECTS - LOST GALAXY
// *******************************************************************************

//Create a mouse object that has four properties and three methods

let mouse {
    color: black,
    size: medium,
    speed: fast,
    buttons: 15,
}

mouse.colorSwap = function() {
    console.log("color is now blue")
}

mouse.onClick = function() {
    console.log("click!")
}

mouse.selfDestruct = function() {
    console.log("Self-Destruct Sequence Initiated")
}

function MakeCar(carMake,carModel,carColor,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function() {
        alert('BEEP BEEP FUCKER')
    }
    this.lock = function() {
        alert(`Locked ${this.doors} doors!`)
    }
}

let hondaCivic = new MakeCar('Honda','Civic','Silver',4)

let teslaRoadster = new MakeCar('Tesla','Roadster','Red',2)

console.log(teslaRoadster.bluetooth) //undefined

MakeCar.prototype.bluetooth = true //prototypal inheritance

console.log(teslaRoadster.bluetooth) //true


// *******************************************************************************
// OBJECTS - STREET FIGHTER
// *******************************************************************************

//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateFighter(fighterName,fighterSpeed,fighterStrength,fighterStamina){
    this.name = fighterName
    this.speed = fighterSpeed
    this.strength = fighterStrength
    this.stamina = fighterStamina
    this.select = function() {
        alert(`You have chosen ${this.name}. `)
    }
    this.start = function() {
        alert(`Let's get ready to battle!`)
    }
    this.end = function() {
        alert(`You were defeated!`)
    }
}

let fighterRyu = new CreateFighter('Ryu','medium','high','high')

let fighterCammy = new CreateFighter('Cammy','very high','medium','medium')

fighterRyu.select()