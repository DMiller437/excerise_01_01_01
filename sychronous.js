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


//data holds info from the file system 
var data = fs.readdirSync('/');
//logging info to the console
console.log("data: ", data);

console.log("This code is executed last");