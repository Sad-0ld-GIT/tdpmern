// objects

let giraffe = {species: "mammal", height: "14-19ft", weight: "1,180-1,192kg" };
let zebra = {species: "mammal", height: "4-5ft", weight: "220–322kg" };
let elephant = {species: "mammal", height: "9.8-13.1ft", weight: "6,000kg" };

let animals = [];

console.log(animals.push(giraffe, zebra, elephant));

for (let animal of animals) {
    console.log(animal.species);
}
console.log(animals[0]);

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "Hyundai", model: "i30", carReg: "AB11CDE" },
    { make: "VW", model: "Golf", carReg: "AB10CDE" },
    { make: "BMW", model: "M3", carReg: "AB13CDE" }
]
console.log(carPark[1].carReg);

for (let car of carPark) {
    console.log(car)
}


carPark[0].numberOfDoors = 5;
carPark[1].numberOfDoors = 3;
carPark[2].numberOfDoors = 5;
carPark[3].numberOfDoors = 3;

for (let car in carPark) {
    console.log(car)
}

for (let car of carPark) {
    console.log(car)
}

for (let car of carPark) {
    console.log(car.numberOfDoors)
}

let counter = 1;

while (counter <= 20) {
    console.log(counter);
    counter++;
}


for (x = 1; x <= 10; x++) {
    for (y = 1; y <= 10; y++) {
        console.log(x);
    }
}

console.log(7 % 14);

let age = 25;
if (age < 18) {
    console.log("underage")
} else if (age > 65) {
    console.log("overage")
} else {
    console.log("within age range")
}

// let a = 50;
// let b = 100;
// let c = 500;
// let counter = 0;

// while (counter < 1000) {
//     if (counter > a && counter <= b) {
//         console.log(`${counter} is greater than ${a}`);
//     } if (counter > a && counter > b && counter <= c) {
//         console.log(`${counter} is greater than both ${a} and ${b}`)
//     } if (counter > a && counter > b && counter > c) {
//         console.log(`${counter} is greater than ${a}, ${b} and ${c}`)
//     }
//     counter +=10;
// }

// Functions
function yourName(name) {
    console.log(`Hello ${name}`);
}

yourName("Phil")

function add(a, b) {
    return a + b;
}

console.log(add(3, 5));

function sub(a, b) {
    return a - b;
}

console.log(sub(3, 5));

function div(a, b) {
    return a / b;
}

console.log(div(3, 5));

function calc(op, a, b) {
    if (op == "add") {
        return a + b;
    } else if (op == "sub") {
        return a - b;
    } else if (op == "div") {
        return a / b;
    } else {
        console.log("operator not valid")
    }
}

console.log(calc("add", 20, 5));
console.log(calc("sub", 16, 5));
console.log(calc("div", 36, 7));

function fib(n) {
    let seq = [0, 1, 1]
    for (i = 2; i <= n; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    console.log(seq);
}

fib(prompt("Enter a number"));
// fib(15);

function isPrime(n) {
    let prime = true
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        } 
    } if (prime == true) {
        console.log(`${n} is prime`);
    } else {
        console.log(`${n} is not prime`);
    }
}

isPrime(prompt("enter a number"))

// const helloWorld = (name) => `Hello ${name}`;
// console.log(helloWorld("Phil"));

// const list = [1,1,2,2,44,66,33,77,88];

// list.forEach(i => console.log(i));

// // const add = (x, y) => x + y;
// // const sub = (x, y) => x - y;
// // const div = (x, y) => x / y;

// console.log(7 )