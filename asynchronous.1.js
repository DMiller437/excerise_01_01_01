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

//asynchronous version of readdirSync
//using the callback function  as an anomous function to siomply do it and get the data
fs.readdir('/', function(err,data) {
    console.log("data: ", data);
});
//show code
console.log("This code is executed last");