// Today you'll need to create a function that swaps each letter of the alphabet for its opposite. 
// A letter's opposite is one that, if the alphabet were flipped Z-A, would be the same number of letters in, and which would also have the opposite case.

// Examples:
// 'A'  // first letter of the alphabet, uppercase
// 'z'  // last letter of the alphabet, lowercase

// 'p'  // 16th letter of the alphabet, lowercase
// 'K'  // 16th letter from *end* of alphabet, uppercase

// 'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
// // function replaces letters with opposites
// 'Example: 0 number or punctuation changes'

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

// BROKEN VERSION: DOESN'T WORK IF THE CHARACTERS ARE OUT OF ORDER
// function scrambler(str) {
//     let alphaCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let alphaLower = "abcdefghijklmnopqrstuvwxyz"

//     // Splitting the alphabet letter strings into arrays
//     let alphaCapsArray = alphaCaps.split('')
//     let alphaLowerArray = alphaLower.split('')

//     // Reversed counterparts to the alphabet letter arrays
//     let alphaCapsArrayReverse = alphaCapsArray.slice().reverse()
//     let alphaLowerArrayReverse = alphaLowerArray.slice().reverse()

//     // Create a blank string to add the swapped characters to
//     let newStr = ''
//     for (i = 0; i < str.length; i++) {
//         let strSplit = str.split('')
//         // If the character in the string is a capital letter, replace it with its lowercase counterpart
//         if (strSplit[i] === alphaCapsArray[i]) {
//             let capsIndex = alphaCapsArray.indexOf(alphaCapsArray[i])
//             newStr += alphaLowerArrayReverse[capsIndex]
//         // If the character in the string is a lowercase letter, replace it with its uppercase counterpart
//         } else if (strSplit[i] === alphaLowerArray[i]) {
//             let lowerIndex = alphaLowerArray.indexOf(alphaLowerArray[i])
//             newStr += alphaCapsArrayReverse[lowerIndex]
//         // If the character in the string belongs to neither category, place it as is into the new string
//         } else {
//             newStr += strSplit[i]
//         }
//     }
//     return newStr
// }