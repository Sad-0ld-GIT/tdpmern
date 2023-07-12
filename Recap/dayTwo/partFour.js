'use strict'

// CONDITIONALS

// Truthy or Falsey

// WHAT IS FALSEY
/*
    false
    0
    ''
    ``
    ""
    undefined
    null
    NaN - not a number
*/

// EVERYTHING ELSE IS TRUTHY

// IF (ELSE IF and ELSE)
// check a condition, then run a code block if the condition is met

let a = 5;

if (a == 0) {
    console.log('sunshine');
} else if (a != 5) {
    console.log('moonlight');
} else {
    console.log('boogie');
}

// you can evaluate truthfulness with a variable
let b = true;
if (b){
    console.log('b is truthy')
} else {
    console.log('b is falsey')
}

// TERNARY IF
// shorthand version of an IF, ELSE statement
let x = 2;

if (x == 2) {
    console.log('x is 2');
} else {
    console.log('x is not 2');
}

let y = 4;

y == 2 ? console.log('y is 2') : console.log('y is not 2');

// EQUALITY AND TYPE

if ( 1 == '1') {
    console.log('hello!');
}

1 == '1' ? console.log(true) : console.log(false);

// JavaScript is MUTATING the TYPE so that ONE is equal to ONE.
// It is checking the VALUE only, not the TYPE

// STRICTLY EQUAL OPERATOR
// ===

1 === '1' ? console.log(true) : console.log(false);