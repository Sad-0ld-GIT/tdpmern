'use strict'

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

/*
let read =URL=> {
    fetch(URL, { method: 'get' }) //takes two arguments the default method is GET
        .then(response => response.json()) // parse our response as JSON
        .then(data => {
            let image = document.createElement('img');
            image.src = data.message;
            output.append(image);
        })
        .catch(error => console.error(error));
}
// https://dog.ceo/api/breeds/image/random
    <img src="URL of the image" alt="description of image" />
*/

function read(URL) {

    fetch(URL, { method: 'get'}) 
        .then(function(response) {
            return response.json()
        }) 
        .then(function(data) {
            let image = document.createElement('img');
            image.src = data.message;
            output.append(image);
        })
        .catch(function(error) {
            console.error(error)
        });

}


/*
function read(URL) {
    fetch(URL, 
        { 
            method: 'post',
            headers: 
                {
                    "Content-type" : "application/json"
                },
            body: JSON.stringify(
                {
                    "first_name" : "Cameron",
                    "email" : "mail@server.com"
                })
        }
    ) 
        .then(function(response) {
            return response.json()
        }) 
        .then(function(data) {
            return output.innerText = JSON.stringify(data)
        })
        .catch(function(error) {
            console.error(error)
        });
}
*/

button.onclick = function() {
    read(input.value);
}

// button.onclick =()=> read(input.value);