'use strict'

// SCOPE

// two MAIN type
// LOCAL scope, GLOBAL scope

// LOCAL SCOPE

// FUNCTIONAL SCOPE
// variables declared inside a function
// cannot be accessed from outside of the function

function foo() {
    let bar = 'Hello World!';
    console.log(bar);
}

foo();

// BLOCK SCOPE
// variables declared inside a block cannot be accessed
// outside of the block

{
    let x = 1;
    console.log(x);
}

// unless you declare as a var
// one of the reasons we don't use var anymore
{
    var y = 3;
}

console.log(y);

// GLOBAL SCOPE

// Automatically Global
// if we don't declare a variable but we reference one
// (ususally in a function)

// it is created and added to the global scope
// VERY BAD PRACTICE

/* 
function globalVar() {
    greeting = 'Hello';
}
globalVar();
console.log(greeting);
*/

// Standard Global

// declaring a variable outside of a code block
// it can be accessed from anywhere

let a = 'a';

console.log(a);

function b() {
    console.log(`the letter is ${a}`);
}

b();