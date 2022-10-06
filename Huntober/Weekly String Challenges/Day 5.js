let str = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

// Here are the rules these submissions had to follow:
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)

let result = str.replaceAll(/dog|bark|bone/gi, ' ')
let splitStr = result.split(',')
let strTrim = splitStr.map((a) => a.trim())

let newArr = []
for (i = 0; i < strTrim.length; i++) {
  if (strTrim[i].length % 5 !== 0) {
    newArr.push(strTrim[i])
  }
}

let newerArr = []
for (i = 0; i < newArr.length; i++) {
  if ((newArr[i].charCodeAt(0) + newArr[i].charCodeAt(newArr[i].length-1)) % 2 != 0 ) {
    newerArr.push(newArr[i])
  }
}

let shinyArr = []
for (i = 0; i < newerArr.length; i++) {
  let indxMid = (newerArr[i].length / 2)
  if (newerArr[i].charAt(indxMid + 1) != 'e') {
    shinyArr.push(newerArr[i])
  }
}

let shinierArr = []
for (i = 0; i < shinyArr.length; i++) {
  let lowerCount = shinyArr[i].length - shinyArr[i].replace(/[a-z]/g, '').length
  if (lowerCount % 2 === 0) {
    shinierArr.push(shinyArr[i])
  }
}

let shiniestArr = []
for (i = 0; i < shinierArr.length; i++) {
  let upperCount = shinyArr[i].length - shinyArr[i].replace(/[A-Z]/g, '').length
  if (upperCount >= 2) {
    shiniestArr.push(shinierArr[i])
  }
}

let finalArr = []
for (i = 0; i < shiniestArr.length; i++) {
  if (shiniestArr[i].includes('S') === false) {
    finalArr.push(shiniestArr[i])
  }
}

console.log(finalArr)