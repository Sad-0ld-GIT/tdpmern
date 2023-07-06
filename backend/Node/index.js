// https://www.npmjs.com/package/colors
// print 3 lines
// one with coloured text
// one with coloured background
// one with both text and background
// print 1 - 100 with random colours
// remake fizzbuzzzing but..
// mutltiple of 3 says fizz in red
// mutltiple of 5 says buzz in green
// mutltiple of 7 says zing in blue
// single player rock paper scissors
// Math.random() for computer
// prompt-sync is the module name for inputs https://www.npmjs.com/package/prompt-sync// ext add colour
// add lizard and spock

const colors = require("colors")
const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log("Hello world!".america)
console.log("Hello world!".bgRed)
console.log("Hellow world!".green.bgWhite)

for (i = 1; i <= 100; i++) {
    console.log(i.toString().random)
}

for (i = 1; i <= 100; i++) {
    console.log((i))
    if (i % 3 == 0) {
        console.log(colors.red("fizz"))
    } if (i % 5 == 0) {
        console.log(colors.green("buzz"))
    } if (i % 7 == 0) {
        console.log(colors.blue("zing"))
    }
}

let player = prompt('Enter rock, paper or scissors');
let randNum = Math.floor(Math.random() * 3) + 1;
let comp = ""

if (randNum == 1) {
    comp = "rock" 
} else if (randNum == 2) {
    comp = "paper"
} else if (randNum == 3) {
    comp = "scissors"
}

console.log(comp)

result = ""

 if (player == "scissors" && comp == "paper") {
    result = "player wins"
 } else if (player == "scissors" && comp == "rock") {
    result = "comp wins"
 } else if (player == "paper" && comp == "rock") {
    result = "player wins"
 } else if (player = "paper &&" && comp == "scissors") {
    result = "comp wins"
 } else if (player == "rock" && comp == "paper") {
    result = "comp wins"
 } else if (player == "rock" && comp == "scissors") {
    result = "player wins"
 } else if (player == comp) {
    result = "it's a draw"
 }

 console.log(result);