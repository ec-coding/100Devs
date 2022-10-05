// Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:

// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

function strReverse(str) {
    return str.split('').reverse().join('')
}


// EXTRA TASKS
// Decoder:
function charReplace(str) {
    // Key-Value Pairs
    let numbersLetters = { '0': 'O', '1': 'I', '2': 'Z', '3': 'E', '4': 'h', '5': 'S', '6': 'G', '7': 'L', '8': 'B', '9': 'q' }
    let lettersNumbers = { 'O': '0', 'I': '1', 'Z': '2', 'E': '3', 'h': '4', 'S': '5', 'G': '6', 'L': '7', 'B': '8', 'q': '9' }
  
    let newStr = ''
    for (i = 0; i < str.length; i++) {
      let currentChar = str.charAt(i)
      if (numbersLetters[currentChar]) {
        newStr += numbersLetters[currentChar]
      } else if (lettersNumbers[currentChar]) {
        newStr += lettersNumbers[currentChar]
      } else {
        newStr += currentChar
      }
    }
    return newStr
}

charReplace("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs")
// Result: "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"

keyChars = {'S' : ' ', 'p' : ' ', 'a' : ' ', 'c' : ' ', 'e' : ' '}

// Spacer
function keyDeleter(str) {
    let blankStr = ''
    for (i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i)
        if (keyChars[currentChar]) {
            blankStr += keyChars[currentChar]
        } else {
            blankStr += currentChar
        }
    }
    return blankStr
}

keyDeleter("e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs")
// Result: " !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs"

// Reverser
function strReverse(str) {
    return str.split('').reverse().join('')
}

strReverse(" !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs")
// Result: "sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! "