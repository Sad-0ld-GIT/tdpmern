'use strict'

// TASK
// Using the .html file provided or creating your own from scratch, build a working calculator in HTML, CSS and JS.
// Try adding bootstrap to your calculator.
// Provide it two inputs for calculations.
// When loading the calculator script, make sure the script type in your .html file is "module".
// You must be able to add, subtract, multiply and divide the inputs.
// Every new result should be written to the page as a new list item in the Output List.
// Upload your work to GitHub.

// EXT
// Display the full calculation in the output list (e.g: 1 + 1 = 2).
// Try converting any functions that you can into arrow functions.
// Add an 'equals' button and store the calculation in memory, only writing it to the Output List when the equals button is pressed.
// Create a function to clear the Output List and both inputs.
// Hook that new functionality up to a button.

const myForm = document.getElementById(`myForm`)
const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);
const addSum = document.getElementById(`button_add`);
const subSum = document.getElementById(`button_subtract`);
const multiSum = document.getElementById(`button_multiply`);
const divSum = document.getElementById(`button_divide`);
const output = document.getElementById(`list_output`);
const equalSum = document.getElementById(`button_equal`);
const clearSum = document.getElementById(`button_clear`);

let total = 0
console.log(total)
// addSum.onclick =()=> {
//     let sum = parseInt(inputOne.value) + parseInt(inputTwo.value)
//     console.log(sum)
//     let el = document.createElement('li');
//     el.innerText = sum;
//     output.appendChild(el);
// }

// function addToSum() {
//     total = parseInt(inputOne.value) + parseInt(inputTwo.value);
//     console.log(total)
// }

// addSum.onclick =()=> {
//     addToSum(total);
//     // addToList(total);
// }  

addSum.onclick =()=> {
    let sum = parseInt(inputOne.value) + parseInt(inputTwo.value)
    console.log(sum)
    total = sum;
    // addToList(total)
}

subSum.onclick =()=> {
    let sum = parseInt(inputOne.value) - parseInt(inputTwo.value)
    console.log(sum)
    total = sum;
    // addToList(total)
}

multiSum.onclick =()=> {
    let sum = parseInt(inputOne.value) * parseInt(inputTwo.value)
    console.log(sum)
    total = sum;
    // addToList(total)
}

divSum.onclick =()=> {
    let sum = parseInt(inputOne.value) / parseInt(inputTwo.value)
    console.log(sum)
    total = sum;
    // addToList(total)
}

equalSum.onclick =()=> {
    addToList(total);
}

clearSum.onclick =()=> {
    myForm.reset();
    while (output.lastElementChild) {
        output.removeChild(output.lastElementChild);
    }
}

let addToList =(total)=> {

    let el = document.createElement('li');
    el.innerText = total;
    output.appendChild(el);

}

console.log(total)