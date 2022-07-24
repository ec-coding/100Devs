//Create a dog object that has four properties and three methods

let dog {
    paws: 4,
    color: gray,
    size: medium,
    name: Syvnir

    dog.bark = function() {
        console.log("BARK!")
    }

    dog.sprint = function() {
        console.log("The dog is chasing you!")
    }

    dog.retrieveToy = function() {
        console.log("The dog is bringing back the toy!")
    }
}


function MakeDog(dogPaws, dogColor, dogSize, dogName) {
    this.paws = dogPaws
    this.color = dogColor
    this.size = dogSize
    this.name = dogName
    this.bark = function() {
        console.log(`${this.name} is barking at you!`)
    }
    this.sprint = function() {
        console.log(`${this.name} is chasing you!`)
    } 
    this.retrieveToy = function() {
        console.log(`${this.name} is coming back with its toy!`)
    }
}

let Fenrir = new MakeDog(4, 'gray', 'large', 'Fenrir')
