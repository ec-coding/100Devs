//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name //The underscore communicates that this property should never be changed
    }
    get name(){  //get enables us to use name() as a property
        return this._name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        //Super command enables you to take stuff from the parent 
        //Efficient, as you no longer need to duplicate tedious amounts of code
        super(name)
        this.breed = breed
    }
}
//Homework: Build more classes and play with the code
class Cat extends Animal{
    constructor(name,breed){
        super(name)  
        this.breed = breed
    }
    speak(){
        console.log("Meow!") //Prototypal inheritance - this function is looked at first before it goes up the chain to the next function
    }
}
class Domesticated extends Animal{
    constructor(name, breed, ysd){
        super(name)
        this.breed = breed
        this.yearSinceDomestication = ysd
    }
}
class Wild extends Animal{
    constructor(name, habitat){
        super(name)
        this.habitat = habitat
    }
}


let simba = new Dog('Simba', 'Sheperd')
let minko = new Cat('Minko', 'Tabby')
let zebra = new Wild('zebra', 'Africa')