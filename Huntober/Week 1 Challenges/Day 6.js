// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. 
// Counting should begin from the first element in the string and should continue in that pattern until the end of the string.


decoder("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4)

function decoder(str, int) {
  let string = str.split('')
    for (i = int-1; i < string.length; i+=int) {
        string[i] = ""
    }
    return string.join('')
}