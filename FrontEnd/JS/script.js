// 'use strict';
// Getting started
// exercise 1
// console.log("Phil");
// console.log("Greenwood");
// console.log("London");
// console.log("Capricorn");

// // exercise 2
// let make = "Audi";
// let model = "A5";

// console.log("My Favourite car is " + make + " and the model is " + model);

// //) exercise 3
// console.log("example %c message","color: orange;font-family:fantasy; font-style: Bold; background-color: black; padding: 10px");

// //variables
// //exercise 1
// let a;
// let b = "12345";
// let c = 12344;
// let d = true;
// let e = {a:"JavaScript"};

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));

// //exercise 2
// let totalMoney = 4000;
// let moneyPaidSoFar = 2348;
// let totalLeftToPay = totalMoney - moneyPaidSoFar;

// console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);

// //iterations (loops)

// //exercise 1
// let number = 100;
// while (number <= 200) {
//     console.log(number);
//     number++;
// }

// //exercise 2
// let number2 = 100;
// while (number2 <= 200) {
//     if (number2 % 2 == 0) {
//         console.log("-");
//     } else {
//         console.log("*");
//     }
//     number2++;
// }

// //exercise 3
// for (let a = 1; a <= 10; a++) {
//     for (let b = 1; b <= 10; b++) {
//         console.log(b);
//     }
//   }

// // exercise 4
// for (a = 100; a <= 200; a++) {
//     console.log(a);
// }

// for (a = 100; a <= 200; a++) {
//     if (a % 2 == 0) {
//         console.log("-")
//     } else {
//         console.log("*")
//     }
// }

// //exercise 5
// let day = "Friday";
// switch (day) {
//     case "Monday":
//         console.log(`It's Monday`);
//     case "Monday":
//         console.log(`It's Tuesday`);
//     case "Wednesday":
//         console.log("It's Wednesday");
//     case "Thursday":
//         console.log("It's Thursday");
//     case "Friday":
//         console.log("It's Friday");
//         break;
//     case "Saturday":
//         console.log("It's Saturday");
//         break;
//     case "Sunday":
//         console.log("It's Sunday");
//         break;
//     default:
//         console.log("That's not correct!")
//         break;
// }

// objects

// let giraffe = {species: "mammal", height: "14-19ft", weight: "1,180-1,192kg" };
// let zebra = {species: "mammal", height: "4-5ft", weight: "220–322kg" };
// let elephant = {species: "mammal", height: "9.8-13.1ft", weight: "6,000kg" };

// let animals = [];

// console.log(animals.push(giraffe, zebra, elephant));

// for (let animal of animals) {
//     console.log(animal.species);
// }
// console.log(animals[0]);

// let carPark = [
//     { make: "Audi", model: "A5", carReg: "AB12CDE" },
//     { make: "Hyundai", model: "i30", carReg: "AB11CDE" },
//     { make: "VW", model: "Golf", carReg: "AB10CDE" },
//     { make: "BMW", model: "M3", carReg: "AB13CDE" }
// ]
// console.log(carPark[1].carReg);

// for (let car of carPark) {
//     console.log(car)
// }


// carPark[0].numberOfDoors = 5;
// carPark[1].numberOfDoors = 3;
// carPark[2].numberOfDoors = 5;
// carPark[3].numberOfDoors = 3;

// for (let car in carPark) {
//     console.log(car)
// }

// for (let car of carPark) {
//     console.log(car)
// }

// for (let car of carPark) {
//     console.log(car.numberOfDoors)
// }

// let counter = 1;

// while (counter <= 20) {
//     console.log(counter);
//     counter++;
// }


// for (x = 1; x <= 10; x++) {
//     for (y = 1; y <= 10; y++) {
//         console.log(x);
//     }
// }

// console.log(7 % 14);

// let age = 25;
// if (age < 18) {
//     console.log("underage")
// } else if (age > 65) {
//     console.log("overage")
// } else {
//     console.log("within age range")
// }

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

function isPrime(n) {
    let prime = true
    for (i = 0; i <= n; i++) {
        if (i % n !== 0) {
            prime = false;
            console.log(`${n} is not prime`)
            break;
        }
    } console.log(`${n} is not prime`);
}

// isPrime(prompt("enter a number"))