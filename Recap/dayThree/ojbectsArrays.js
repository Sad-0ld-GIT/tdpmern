'use strict'

// OBJECTS, ARRAYS and JSON

// OBJECTS
// a collection of data in ANY order
// made up of KEY : VALUE pairs

// lets create some objects

let animal = new Object();

animal["name"] = "Clifford";
animal["type"] = "Dog";
animal["size"] = "Big";

console.log(animal);
console.log(animal.name); // we specify the KEY to get the VALUE

animal.colour = "Red";

console.log(animal);

// We can also use LITERAL notation
// quicker and easier

let vehicle = {
    "type" : "bike",
    "seats" : 1,
    "wheels" : 2
}

console.log(vehicle);
console.log(vehicle.type);

// OBJECTS can be stored in an ARRAY
// an array with LITERAL notation

let garage = [
    vehicle,
    {"type" : "car", "seats": 5, "wheels" : 4}
]

console.log(garage);

// let's loop through an array

let x = ['a','b','c','d','e'];

for (let i = 0; i < x.length; i++){
    console.log(x[i])
}

// an ENHANCED for loop
for (let item of x) {
    console.log(item)
}

// ARRAY OBJECT METHODS
// these are some default methods you can use to carry out
// functions on arrays

// lets reverse our array
console.log(x.reverse());

// the join method (converts an array to a string)
console.log(x.join(" .-. "));

// JSON
// subset of LITERAL notation for objects
// JavaScript Object Notation
let newJSON = {
    "name" : "Cameron",
    "age" : 30
}

// JSON to String
let strJSON = JSON.stringify(newJSON);
console.log(strJSON);

// String to JSON
let jsonStr = JSON.parse(strJSON);
console.log(jsonStr)