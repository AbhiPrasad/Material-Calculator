"use strict"; // E C M A S C R I P T

var calcString = "";
var operators = ['+', '-', 'x', '÷'];

$(document).ready(function() {
    updateScreen();

    $('.num').click(function(e) {
        e.preventDefault();
        nanCheck();
        calcString += event.target.id;;
        updateScreen();
    });

    $('#clear').click(function(e) {
        e.preventDefault();
        nanCheck();
        calcString = "";
        updateScreen();
    });

    $('#add').click(function(e) {
        e.preventDefault();
        nanCheck();
        checkOperator();
        calcString += operators[0];
        updateScreen();
    });

    $('#subtract').click(function(e) {
        e.preventDefault();
        nanCheck();
        checkOperator();
        calcString += operators[1];
        updateScreen();
    });

    $('#multiply').click(function(e) {
        e.preventDefault();
        nanCheck();
        checkOperator();
        calcString += operators[2];
        updateScreen();
    });

    $('#divide').click(function(e) {
        e.preventDefault();
        nanCheck();
        checkOperator();
        calcString += operators[3];
        updateScreen();
    });

    $('#enter').click(function(e) {
        e.preventDefault();
        var eq = calcString;

        var lastl = eq.slice(-1);

        if (operators.indexOf(lastl) > -1) {
            eq = eq.slice(0, -1);
        }

        eq = eq.replace(/x/g, "*").replace(/÷/g, "/");

        var ans = eval(eq);

        console.log(ans);

        calcString = ans.toString();
        updateScreen();
    });
});

function updateScreen() {
    console.log(calcString);
    $('#screen').text(calcString);
}

function checkOperator() {
    var lastl = calcString.slice(-1);
    if (operators.indexOf(lastl) > -1) {
        calcString = calcString.slice(0, -1);
    }
}

function nanCheck() {
    if (calcString === "NaN" || calcString === NaN || calcString === null) {
        calcString = "";
    }
}