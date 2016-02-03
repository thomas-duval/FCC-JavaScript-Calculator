var calculation = [0];

function one() {
    calculation.push(1);
    $("#calculation").html(calculation);
}

function two() {
    calculation.push(2);
    $("#calculation").html(calculation);
}

function three() {
    calculation.push(3);
    $("#calculation").html(calculation);
}

function four() {
    calculation.push(4);
    $("#calculation").html(calculation);
}

function five() {
    calculation.push(5);
    $("#calculation").html(calculation);
}

function six() {
    calculation.push(6);
    $("#calculation").html(calculation);
}

function seven() {
    calculation.push(7);
    $("#calculation").html(calculation);
}

function eight() {
    calculation.push(8);
    $("#calculation").html(calculation);
}

function nine() {
    calculation.push(9);
    $("#calculation").html(calculation);
}

function plus() {
    calculation.push("+");
    $("#calculation").html(calculation);
}

function minus() {
    calculation.push("-");
    $("#calculation").html(calculation);
}

function multiply() {
    calculation.push("*");
    $("#calculation").html(calculation);
}

function divide() {
    calculation.push("/");
    $("#calculation").html(calculation);
}

function clear() {
    calculation = [];
    $("#calculation").html(calculation);
}

function cancel() {
    calculation.pop();
    $("#calculation").html(calculation);
}

$(document).ready(function () {
    $('#one').click(function () {one;
    });
    $('#two').click(function () {two;
    });
    $('#three').click(function () {three;
    });
    $('#four').click(function () {four;
    });
    $('#five').click(function () {five;
    });
    $('#six').click(function () {six;
    });
    $('#seven').click(function () {seven;
    });
    $('#eight').click(function () {eight;
    });
    $('#nine').click(function () {nine;
    });
    $('#plus').click(function () {plus;
    });
    $('#minus').click(function () {minus;
    });
    $('#multiply').click(function () {multiply;
    });
    $('#divide').click(function () {divide;
    });
    $('#one').click(function () {one;
    });
    $('#AC').click(function () {clear;
    });
    $('#CE').click(function () {cancel;
    });

});