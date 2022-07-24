
// Factory Function - If you return an object in a function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
circle.draw();

// Constructor Function - Uses 'this' and 'new' keywords
function Circle(radius) {
    this.radius = radius;

    //Private members of a circle object
    let defaultLocation = { x: 0, y: 0 };  // Local Variable

    let computeOptimumLocation = function() {
        // ...
    }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    this.draw = function() {
        let x, y; //After this function finishes, this x and y will go out of scope. (scope is temporary, but closure stays there)

        computeoptimumLocation(); //This is an example of closure
        // defaultLocation
        // this.radius

        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.')

            defaultLocation = value;
        }
    });
}


const another = new Circle(1); //This [new] operator will create a new object
circle.computeOptimumLocation();
circle.draw();
circle.defaultLocation()
circle.defaultLocation = 1;


circle.location = { x: 1 };
circle['location'] = { x: 1 };

delete circle.location;

for (let key in circle) {
    if (typeof circle[key] !== 'function') // if circle of key is not equal to function, then display it on the console
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) // if radius is in circle [In Operator]
console.log('Circle has a radius')