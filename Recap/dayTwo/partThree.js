'use strict'

// ITERATION

// (LOOPS)

// FOR

// uses a counter
// runs until a condition is met
for(let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}

// WHILE

// work with booleans
// run until a condition is no longer true

let condition = true;
let increment = 0;

while(condition == true) {
    console.log(`increment = ${increment}`);
    increment++;

    if(increment == 3){
        condition = false;
    }
}

// DO (WHILE)

// like a while loop
// always runs AT LEAST once

let a = false;
do {
    console.log(`run forest run`);
} while (a);

// SWITCH

// run until a break or a return
// can be more effective than large if / else statements

let number = 'cheese';

switch(number) {
    case 0:
        console.log(`zero is zero`);
        break;
    case 1:
        console.log(`we are number one`);
    case 4:
        console.log(`we can count to four`);
    case 10:
        console.log(`we're at ten`);
        break;
    default:
        console.log(`you're in the wrong place`);
}