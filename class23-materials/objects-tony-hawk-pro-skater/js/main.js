//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkFighter(fighterName, fighterSpeed, fighterSpecialMove, fighterTaunt) {
    this.name = fighterName
    this.speed = fighterSpeed
    this.specialMove = fighterSpecialMove
    this.taunt = fighterTaunt
    this.victoryLap = function() {
        console.log(`Hahaha! ${this.taunt}`)
    }
    this.fightIntro = function() {
        console.log(`You can't handle my ${this.SpecialMove}!`)
    }
    this.fightBegin = function() {
        console.log(`${this.name} has entered the arena!`)
    }
}

let tonyHawk = new TonyHawkFighter('Tony Hawk', 'very fast', '180 Trick Stomp', 'You\'re yesterday\'s news!')