//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class MakeEspresso{
    constructor(espressoSize,espressoFlavor,espressoPrice,espressoCreamer) {
        this.size = espressoSize
        this.flavor = espressoFlavor
        this.price = espressoPrice
        this.creamer = espressoCreamer
    }
    ready(){
        alert(`Your ${this.flavor} espresso is ready!`)
    }
    pay(){
        alert(`Your espresso will be ${this.price}.`)
    }
    spilled(){
        alert(`Uh oh, you spilled your espresso!`)
    }
} 

let restretto = new MakeEspresso(`small`,'restretto',5.99,false)
let mocha = new MakeEspresso('medium','mocha',8.29,true )


//TAXES

//Data
let hourlyRate = 250
let hours = 160
let taxRate = .35


//Functionality
function calculateProfit(rate, numOfHours, taxes){
    return rate * numOfHours * (1 - taxes)
}

function holdForTaxes(profitMade){
    return hourlyRate * hours - profitMade
}

let profit = calculateProfit(hourlyRate, hours, taxRate)

let taxesHeld = holdForTaxes(profit)

console.log(profit)

console.log(taxesHeld)


//Data and Functionality Combined
//Object
//Encapsulation
let seriousBusinessPerson = {
    hourlyRate: 250,
    hours: 160,
    taxRate: .40,  //changed 
    calculateProfit: function() {
        return this.hourlyRate * this.hours * (1 - this.taxRate)
    }
    calculateTaxesHeld: function() {
        return this.hourlyRate * this.hours - this.calculateProfit()
    }
}