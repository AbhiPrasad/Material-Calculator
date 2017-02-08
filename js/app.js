"use strict"; // E C M A S C R I P T

var calcString = "";
var temp1 = "";
var temp2 = "";
var ans = 0;
var operation = "";

$(document).ready(function() {
    updateScreen();

    $('.num').click(function(e) {
        e.preventDefault();
        var numba = event.target.id;

        calcString += numba;
        temp += numba;
        updateScreen();
    });

    $('#clear').click(function(e) {
        e.preventDefault();
        updateScreen();
    });

    $('#add').click(function(e) {
        e.preventDefault();
        updateScreen();
    });

    $('#subtract').click(function(e) {
        e.preventDefault();
        updateScreen();
    });

    $('#multiply').click(function(e) {
        e.preventDefault();
        updateScreen();
    });

    $('#divide').click(function(e) {
        e.preventDefault();
        updateScreen();
    });

    $('#enter').click(function(e) {
        e.preventDefault();
        calculate();
    });
});

function updateScreen() {
    $('#screen').text(calcString);
}