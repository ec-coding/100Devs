//Create a dog object that has four properties and three methods

let dog {
    name: "Alpha",
    color: "gray",
    breed: "husky"
    eyes: "blue",

    dog.bark function() {
        console.log("Bark!")
    }

    dog.sprint function() {
        console.log(`${dog.name} is chasing you!`)
    }

    dog.fetch function() {
        console.log(`${dog.name} is retrieving its toy!`)
    }
}

//Create a pizza object that has four properties and three methods

let pizza {}
    pizza.toppings: ["pepperoni", "onions", "beef", "bell peppers"]
    pizza.size: "medium",
    pizza.shape: "square",
    pizza.crust: "thin"

    pizza.delivery function() {
        console.log(`Your pizza has arrived!`)
    }

    pizza.check function() {
        console.log(`Please confirm your desired pizza is a ${pizza.size}.`)
    }

    pizza.stolen function() {
        console.log("Uh oh! Someone stole your pizza!")
    }


function MakePizza(pizzaToppings, pizzaSize, pizzaCut, pizzaCrust) {
    this.toppings = pizzaToppings,
    this.size = pizzaSize,
    this.cut = pizzaCut,
    this.crust = pizzaCrust,

    this.delivery function() {
        console.log("Your pizza is on the way!")
    }

    this.check function() {
        console.log(`Please confirm your desired toppings are as follows: ${this.toppings}`)
    }

    this.stolen function() {
        console.log("Uh oh! Someone stole your pizza!")
    }
}

let supremePizza = new MakePizza(["pepperoni", "beef", "ham", "onions", "green peppers", "basil"], "large", "pie-cut", "hand-tossed")

let veggiePizza = new MakePizza(["onions", "green peppers", "tomatoes", "basil", "spinach", "olives"], "medium", "square-cut", "New York style")

let hawaiianPizza = new MakePizza(["ham", "pineapple"], "medium", "pie-cut", "thin")

MakePizza.prototype.oliveOil = true

veggiePizza.oliveOil = true

// What is the prototype chain?