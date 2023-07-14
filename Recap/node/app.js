// NODE Package file

// {
//     "name": "node-stuff",
//     "version": "1.0.0",
//     "description": "",
//     "main": "app.js",
//     "type": "module",            - ADD type 'module' to allow IMPORT function
//     "scripts": {
//       "start" : "node app.js",   - ADD 'start' script 
//       "test": "echo \"Error: no test specified\" && exit 1"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC"
//   }


// const os = require('os');
import os from 'os';

/*
process.stdout.write('Hello World!');
process.stdout.clearLine(0);
process.stdout.cursorTo(0);
process.stdout.write('new message');
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.totalmem() - os.freemem());
console.log(100 * ( ( os.totalmem() - os.freemem() ) / os.totalmem() ));
*/

setInterval( function() {
    process.stdout.clearLine(0); // clear the first output line
    process.stdout.cursorTo(0); // move cursor to the first output line

    let totalRAM = os.totalmem();
    let freeRAM = os.freemem();
    let usedRAM = totalRAM - freeRAM;
    let percentRAM = 100 * (usedRAM / totalRAM);

    // to 2 sig figs
    let output = Number(percentRAM.toPrecision(4));

    process.stdout.write(`RAM: ${output}%`); // write to where the cursor is

}, 500);