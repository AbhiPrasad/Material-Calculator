"use strict"; // E C M A S C R I P T

var calcString = "";
var temp = "";
var runningTotal = 0;

$(document).ready(function() {
    updateScreen();

    $('.num').click(function(e) {
        e.preventDefault();
        var numba = event.target.id;

        calcString += numba;
        temp += numba;
        console.log(parseInt(temp));
        updateScreen();
    });

    $('#clear').click(function(e) {
        e.preventDefault();
        calcString = "";
        runningTotal = 0;
        temp = "";
        updateScreen();
    });

    $('#add').click(function(e) {
        e.preventDefault();
        temp = "";
        calcString += " + ";
        runningTotal += parseInt(temp)
        updateScreen();
    });

    $('#subtract').click(function(e) {
        e.preventDefault();
        temp = "";
        calcString += " - ";
        runningTotal -= parseInt(temp)
        updateScreen();
    });

    $('#multiply').click(function(e) {
        e.preventDefault();
        temp = "";
        calcString += " * ";
        runningTotal *= parseInt(temp)
        updateScreen();
    });

    $('#divide').click(function(e) {
        e.preventDefault();
        temp = "";
        calcString += " / ";
        runningTotal /= parseInt(temp)
        updateScreen();
    });

    $('#enter').click(function(e) {
        e.preventDefault();
        console.log(runningTotal);
        updateScreen();
    });
});

function updateScreen() {
    $('#screen').text(calcString);
}