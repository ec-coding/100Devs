// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    greet(){
        console.log(`Hi, my name is ${this._name} and I am on the ${this._role} team.`)
    }
    farewell(){
        console.log(`It has been a pleasure working with you.`)
    }
}

class FrontEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    greet(){
        console.log(`Hi, my name is ${this._name} and I am a front-end developer.`)
    }
}
class BackEnd extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    greet(){
        console.log(`Hi, my name is ${this._name} and I am a back-end developer.`)
    }
}

let cede = new Contractor('Cede', 'Front-End')
let vigil = new FrontEnd('Vigil', 'Front-End', 'CSS')
let gant = new BackEnd('Gant', 'Back-End', 'Node')


let agency = [cede,vigil,gant] //Polymorphism - code that works for all of our objects

for(person of agency){
    person.greet()
}