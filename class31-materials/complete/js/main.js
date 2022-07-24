class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Domesticated extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
}

class Wild extends Animal{

}

class Dog extends Domesticated{
    constructor(name,breed){
        super(name, breed)
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}

class Cat extends Domesticated{
    constructor(name,breed){
        super(name, breed)
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
        
    }
}

let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')



// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }
// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }    
// }
// class Cat extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }    
// }



let farm = [simba,machi,salem]

for( a of farm ){
    a.speak()
}