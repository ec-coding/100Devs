//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiNumsInArr(arr){  //This function is taking in an array
    let product = 1     //Multiply by 1, not 0
    // arr.forEach( num => product = product * num )  //num is merely a bucket
    for(let i = 0; i < arr.length; i++){
        product = arr[i] * product
    }
    alert(product) //If you put this in the loop bracket, it will show the product of each multiplication
}

multiNumsInArr([10,2,3]) //This array is being passed into where "arr" is

//Parameters do not need to be declared (ie. arr, num)
