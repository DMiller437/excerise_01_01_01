/*  Exercise 01_01_01

    Excerise 01_01_01
    Author: Dylan Jones-Miller
    Date:   1.10.18

    Filename: gulpfile.js
*/

//bringing in the gulp package by using the require
var gulp = require('gulp');

//using the task method to define a task and then using the callback anon function to run it
gulp.task('default',  async function()  {
        console.log("Hello from gulp");
});
