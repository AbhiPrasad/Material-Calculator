"use strict"; // E C M A S C R I P T

var calcString = "";
var operators = ['+', '-', 'x', '÷'];

$(document).ready(function() {
    updateScreen();

    $('.num').click(function(e) {
        e.preventDefault();
        calcString += event.target.id;;
        updateScreen();
    });

    $('#clear').click(function(e) {
        e.preventDefault();
        calcString = "";
        updateScreen();
    });

    $('#add').click(function(e) {
        e.preventDefault();
        calcString += operators[0];
        updateScreen();
    });

    $('#subtract').click(function(e) {
        e.preventDefault();
        calcString += operators[1];
        updateScreen();
    });

    $('#multiply').click(function(e) {
        e.preventDefault();
        calcString += operators[2];
        updateScreen();
    });

    $('#divide').click(function(e) {
        e.preventDefault();
        calcString += operators[3];
        updateScreen();
    });

    $('#enter').click(function(e) {
        e.preventDefault();
        calculate();
    });
});

function updateScreen() {
    if (temp1 != "" && temp2 === "") {
        calcString = "";
    }
    $('#screen').text(calcString);
}