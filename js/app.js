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
        updateScreen();
    });
});

function updateScreen() {
    $('#screen').text(calcString);
}