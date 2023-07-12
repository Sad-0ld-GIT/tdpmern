// USE STRICT

/*
    Forces us to write 'secure' JS
    it WILL NOT run bad syntax
    * can't accidentally create a global var
    * can't assign a value to a non-writable property
    * can't use protected keywords
*/

'use strict'

// protected keyword example
//let let = 2;

// standard output
console.log(`Hello World!`);

// different kinds of logging

let message = `this is a message`;

console.log(message);

console.warn(message);

console.error(message);

// console.info();


// we can use the console to output any datatype in JS including OBJECTS

// we can STYLE the console log

console.log(`%c` + message, `color:black; background-color: white; font-size: 20px; padding: 5px;`);

console.log(`%c` + message + `%c` + message, `color:red;`, `color:blue;`);