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