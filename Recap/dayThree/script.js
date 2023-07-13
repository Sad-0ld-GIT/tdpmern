'use strict'

// DECLARE VARIABLES FROM THE DOM
const pageInput = document.getElementById('textInput');
const pageButton = document.getElementById('btn');

//pageButton.onclick =()=> console.log(pageInput.value);

pageButton.onclick = function () {

    console.log(      pageInput.value     )

}

// -----------

const pageParagraph = document.getElementById('textOutput');

pageParagraph.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam error, voluptatibus quidem facere nihil tempore dolor, velit debitis odio quam iste eveniet quo illum aut. Qui adipisci natus nesciunt magni.';

// -------------------------------

const boldText = document.createElement('b');
// <b></b>

boldText.innerText = 'I am some bold text';
// <b>I am some bold text</b>

pageParagraph.appendChild(boldText);
// <p>Lorem, ipsum dolor .... <b>I am some bold text</b></p>

/*
const underlinedText = document.createElement('u');
underlinedText.innerText = 'I am some underlined text';
pageParagraph.append(boldText, underlinedText);
*/