'use strict'

// FUNCTIONS

/*
    a block of code that does a thing
    they are ENVOKED (or run) when something CALLS it
    DRY principles
    They can take ARGUMENTS
    They are globally scoped
*/

function hello(message) {
    // execute code in here
    console.log(message);
}

hello('Hello my name is Cameron');
hello('Hi!');

// WHAT ARE RETURNS?

// when a function reaches a RETURN STATEMENT
// it stops

let bye = false;
//console.log(bye);

function goodbye() {
    console.log('goodbye');
    return bye = true;
}

let test = goodbye();
console.log(test);

// VARIABLE RETURNS
let result;

function sum(a, b) {
    return result = a+b;
}

console.log(sum(3,5));

// ARROW FUNCTIONS
// Ecma Script 5 and 6 shorthand for functions
// ES6

/*
function greetings(message) {
    return message;
}
let greetings =(message)=> {
    return message;
}
// if ONE and ONLY ONE arguemnt, you can lose the brackets!
let greetings =message=> {
    return message;
}
*/

// drop the return if we squash into one line
let greetings =message=> message;
// ^ name   ^ argument  ^ return

console.log(greetings('hi'));