// IMPORTS
const express = require('express'); // imports express.js module into project

const PORT = 9000;
const app = express(); // creates a new express application

// Default routing for /
app.get('/', (req, res) => {
    res.send('This endpoint is working!');
})

// new route for /about
app.get('/about', (req, res) => {
    res.send('This is the about page!');
})

// route for creating data
app.post('/create', (req, res) => {
    res.send('post request recieved.')
})

// get request by unique identifier
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
})

/* DELETE request by unique identifier
app.get('/data/:id', (req, res) => {
    const data = req.params.id;
    res.send(`We have deleted: ${data}`);
})
*/

// This starts the application on a specific PORT
app.listen(PORT, () => {
    console.log(`Express server is running on PORT: ${PORT}`);
    console.log('to stop the server press ctrl+c')
});