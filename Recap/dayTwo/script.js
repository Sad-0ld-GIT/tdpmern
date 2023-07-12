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