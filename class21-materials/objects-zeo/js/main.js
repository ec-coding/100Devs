//Create a stopwatch object that has four properties and three methods

let stopwatch = {} //Literal Notation

//Properties:
stopwatch.currentTime = 10
stopwatch.brand = 'Apple'
stopwatch.size = 'Adult'
stopwatch.color = 'Black'

//Methods:
stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}.`)
}
stopwatch.tellBrand = function(brand){
    console.log(`The brand of this stopwatch is ${brand}.`)
}
stopwatch.tellSize = function(size){
    console.log(`The size of this stopwatch is ${size}.`)
}

//Function Calls:
stopwatch.tellBrand(stopwatch.brand)
stopwatch.tellSize(stopwatch.size)
stopwatch.tellTime(stopwatch.currentTime)



let stopwatchTwo = {
    brand: 'Nike',
    color: 'black',
    size: 'small',
    time: 'limited',
}

stopwatchTwo.sayStart = function(){
    console.log('START!')
}
stopwatchTwo.sayStop = function(){
    console.log('STOP!')
}