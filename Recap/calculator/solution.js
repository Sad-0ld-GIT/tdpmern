'use strict'

// our inputs
const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);

// the buttons
const buttonAdd = document.getElementById(`button_add`);
const buttonSubtract = document.getElementById(`button_subtract`);
const buttonMultiply = document.getElementById(`button_multiply`);
const buttonDivide = document.getElementById(`button_divide`);

// the list
const output = document.getElementById(`list_output`);

let addToList =x=> {
    let child = document.createElement('li');
    child.innerText = x;
    child.classList.add('list-group-item');
    output.append(child);
}

let addition =(a,b)=> Number(a)+Number(b);
let subtraction =(a,b)=> Number(a)-Number(b);
let multiplication =(a,b)=> Number(a)*Number(b);
let division =(a,b)=> Number(a)/Number(b);

buttonAdd.onclick =()=> addToList(addition(inputOne.value, inputTwo.value));
buttonSubtract.onclick =()=> addToList(subtraction(inputOne.value, inputTwo.value));
buttonMultiply.onclick =()=> addToList(multiplication(inputOne.value, inputTwo.value));
buttonDivide.onclick =()=> addToList(division(inputOne.value, inputTwo.value));