 //PREP - Don't type during the interview
 //PARAMETERS - RETURNS - EXAMPLES - PSEUDO CODE

 //A number 1 to number, if 3 fizz, if 5 buzz, 3&5 fizzbuzz
 //P: number, whole, positive
 //R: console
 //E: 

function fizzBuzz(num){
    //loop
    //conditionals % 3&5, % 3, % 5
    //console.log num or fizz,buzz,fizzBuzz

 }

fizzBuzz(5) // 1,2,fizz,4,buzz
fizzBuzz(3) // 1,2,fizz
fizzBuzz(15) // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzBuzz

function fizzBuzz(num){
    for(i = 1; i <= num; i++){  
        if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i)
        }
    }
}

