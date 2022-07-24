//Create a constructor with 4 properties and 3 methods

function MakePizza(pizzaToppings, pizzaSize, pizzaCrust, pizzaCut) {
    this.toppings = pizzaToppings,
    this.size = pizzaSize,
    this.crust = pizzaCrust,
    this.cut = pizzaCut,

    this.baking function() {
        console.log(`Your ${this.size} pizza is currently being baked!`)
    }

    this.delivery function() {
        console.log("Your pizza is on the way!")
    }

    this.stolen function() {
        console.log("Uh oh! Your pizza was stolen!")
    }
}

let pepperoniPizza = new MakePizza(["pepperoni, basil"], "medium", "pan", "square")
