'use strict'

// loop from 1 to 100
for (let i = 1; i <= 100; i++){
    if ( i % 15 == 0 ) { // if i % 15 has a remainder of 0
        console.log('FizzBuzz'); // log fizzbuzz
    } else if ( i % 3 == 0 ){ // if i % 3 has a remainder of 0
        console.log('Fizz'); // log fizz
    } else if ( i % 5 == 0 ){ // if i % 5 has a remainder of 0
        console.log('Buzz'); // log buzz
    } else {
        console.log(i); // else log the number
    }
}

// SWITCH

for (let i = 1; i <= 100; i++){

    switch(true) {
        case ( i % 15 == 0 ) :
            console.log('FizzBuzz');
            break;
        case ( i % 3 == 0 ):
            console.log('Fizz');
            break;
        case ( i % 5 == 0 ):
            console.log('Buzz');
            break;
        default: 
            console.log(i);
    }

}


// TERNARY IF

for (let i = 1; i <= 100; i++){

    let str;

    // if "i % 3" <--- change this to be falsey
    if (i%3) {
        str = ``;
    } else {
        str = `Fizz`;
    }

    if (i%5) {
        str = `${str}`;
    } else {
        str = `${str}Buzz`;
    }

    if (str) { // <--- is string truthy?
        console.log(str);
    } else {
        console.log(i);
    }

}


// two vertical pipes || is an OR operator
for (let i = 1; i <= 100; i++){

    console.log(`${ i%3 ? '' : 'Fizz'}${ i%5 ? '' : 'Buzz'}` || i);

}