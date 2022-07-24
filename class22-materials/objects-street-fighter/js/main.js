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