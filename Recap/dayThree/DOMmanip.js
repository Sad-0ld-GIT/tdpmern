'use strict'

// DOM

// DOCUMENT OBJECT MODEL

/*
    HTML (page)
        HEAD
            METADATA
        BODY
            HEADER
            DIV
            PARAGRAPH
            UL
                LI
                LI
                LI
                LI
*/

// DECLARE VARIABLES FROM THE DOM
const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');
const pageParagraph = document.getElementById('textOutput');

let changeText =str=> pageParagraph.innerText = `${str}`;

// pageButton.onclick =()=> changeText(pageInput.value);

// ----------------

const pageList = document.getElementById('myList');

let addToList =(str)=> {

    let el = document.createElement('li');
    el.innerText = str;
    pageList.appendChild(el);

}

pageButton.onclick =()=> addToList(pageInput.value);