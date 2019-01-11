/*  Exercise 01_01_01

    Excerise 01_01_01
    Author: Dylan Jones-Miller
    Date:   1.9.18

    Filename: sychronous.js
*/

//fs=filesystem
//require is used as a command module
//loading in the package
var fs = require('fs');

//callback for something when done
//returns an err or something in data
function phoneNumber(err, data) {
    console.log("data: ", data);
}


//asynchronous version of readdirSync
//using the callback function for it to go to
fs.readdir('/', phoneNumber);

//show code
console.log("This code is executed last");