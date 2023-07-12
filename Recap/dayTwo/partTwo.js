'use strict'

// VARIABLES and DATA TYPES

/*
    In JavaScript TYPES of data are 
    DYNAMIC and MUTABLE
    they are stored as text in memory until they are needed
    they are converted to whatever 'seems' best
*/

// VARIABLES

/*
    * 'let' is your standard variable (to be able to change)
    * 'const' if we have a constant variable (won't change)
    * 'var' the old and insecure way of storing variables
    * we use camelCase for naming
*/

// DATATYPES

/*
    two types of 'types'
    primatives and objects
    similar to java
    primatives : boolean, number, string, null, undefined, bigint, symbol
    objects : objects
*/

let aBoolean = true;
let aNumber = 124;
let aString = `a message`;
let aBigInt = 9999999999999999n;
let aSymbol = Symbol(`description`); // always unique
let aNull = null; // trying to get data out of bounds in an array
let anUndefined;

console.log(anUndefined);
console.log(typeof(anUndefined));


// Objects are a collecction of properties
// these properties can be stored in any order
// and are mutable

let myObject = {
    key : `value`,
    anotherKey : 12345
};

console.log(myObject);

// STRINGS
// CONCATENATION
// Joining strings end-to-end

// this is quite memory intensive
let stringOne = `41 * 12 = `;
let result = 41 * 12;

console.log(stringOne + result);


// INTERPOLATION
// uses ONE string
// string literals as placeholders (template literals)

let stringTwo = `43 * 12 = ${43 * 12}`;
console.log(stringTwo);