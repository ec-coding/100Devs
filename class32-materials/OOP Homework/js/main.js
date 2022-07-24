// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Exile{
    constructor(name,alignment,baseClass){
        this._name = name
        this._alignment = alignment
        this._baseClass = baseClass
    }
    get name(){
        return this._name
    }
    get alignment(){
        return this._alignment
    }
    get baseClass(){
        return this._baseClass
    }
    battleIntro(){
        console.log(`${this._name} has entered the fray! With their skills as a ${this._baseClass}, they seek further attunement towards the ${this._alignment}.`)
    }
}
class Jedi extends Exile{
    constructor(name,alignment,baseClass,prestigeClass){
        super(name,alignment,baseClass)
        this._prestigeClass = prestigeClass
    }
    get prestigeClass(){
        return this._prestigeClass
    }
    battleIntro(){
        super.battleIntro()
        console.log(`There is no emotion, there is peace. I have awakened to the calling of a ${this._prestigeClass} and seek enlightment through the Force.`)
    }
}
class Sith extends Exile{
    constructor(name,alignment,baseClass,prestigeClass) {
        super(name,alignment,baseClass)
        this._prestigeClass = prestigeClass
    }
    get prestigeClass(){
        return this._prestigeClass
    }
    battleIntro(){
        super.battleIntro()
        console.log(`Peace is lie, there is only passion. With my power as a ${this._prestigeClass}, I will crush you into dust!`)
    }
}
class Gray extends Exile{
    constructor(name,alignment,baseClass,neutralClass) {
        super(name,alignment,baseClass)
        this._neutralClass = neutralClass
    }
    get neutralClass(){
        return this._neutralClass
    }
    battleIntro(){
        console.log(`There is no dark side, nor a light side. There is only the Force. Through my rebirth as a ${this._neutralClass}, I shall await the hour of my intervention.`)
    }
}

let meetra = new Exile('Meetra','Light Side','Sentinel')
let zolere = new Jedi('Zolere', 'Light Side', 'Guardian', 'Jedi Weaponmaster')
let adrastea = new Sith('Adrastea', 'Dark Side', 'Consular', 'Sith Marauder')
let ophistor = new Gray('Ophistor','Gray Affinity','Sentinel','Force Guardian')
