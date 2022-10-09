const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

// Day 1
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

// Result: "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs"

// Day 2
keyChars = {'S' : ' ', 'p' : ' ', 'a' : ' ', 'c' : ' ', 'e' : ' '}

// Day 3
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

// Result : " !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs"

// Day 4
function strReverse(str) {
    return str.split('').reverse().join('')
}

// Result: "sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! "

// Day 5
// Count = 3

// Day 6
function decoder(str, int) {
  let string = str.split('')
    for (i = int-1; i < string.length; i+=int) {
        string[i] = ""
    }
    return string.join('')
}

// Result: "sfQmg4lyviO 1h DVV^P YWLDM2. A#100!wVdEH dbv 8tl t)vg1!!"

// Day 7
function scrambler(str) {
    let alphaCaps = {'A': 'z', 'B': 'y', 'C': 'x', 'D': 'w', 'E': 'v', 'F': 'u', 'G': 't', 'H': 's', 'I': 'r',
                    'J': 'q', 'K': 'p', 'L': 'o', 'M': 'n', 'N': 'm', 'O': 'l', 'P': 'k', 'Q': 'j', 'R': 'i',
                    'S': 'h', 'T': 'g', 'U': 'f', 'V': 'e', 'W': 'd', 'X': 'c', 'Y': 'b', 'Z': 'a'}
    
    let alphaLower = {'a': 'Z', 'b': 'Y', 'c': 'X', 'd': 'W', 'e': 'V', 'f': 'U', 'g': 'T', 'h': 'S', 'i': 'R',
                    'j': 'Q', 'k': 'P', 'l': 'O', 'm': 'N', 'n': 'M', 'o': 'L', 'p': 'K', 'q': 'J', 'r': 'I',
                    's': 'H', 't': 'G', 'u': 'F', 'v': 'E', 'w': 'D', 'x': 'C', 'y': 'B', 'z': 'A'}

    let newStr = ''
    for (i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i)
        if (alphaCaps[currentChar]) {
          newStr += alphaCaps[currentChar]
        } else if (alphaLower[currentChar]) {
          newStr += alphaLower[currentChar]
        } else {
          newStr += currentChar
        }
    }
    return newStr
}

// Result: "HUNTOBER 1 week down. #100Devs WE GO GET!!"