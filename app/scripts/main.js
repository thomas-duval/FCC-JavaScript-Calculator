/* global $ */
/* global displayer */
var calculation = [];

function display() {
    $('#displayer').html(calculation.join(""))
}

$(document).ready(function () {
    $('#one').click(function () {
        calculation.push(1);
        display()     
    });
    $('#two').click(function () {
        calculation.push(2);
        display()     
    });
    $('#three').click(function () {
        calculation.push(3);
        display()     
    });    
    $('#four').click(function () {
        calculation.push(4);
        display()     
    });    
    $('#five').click(function () {
        calculation.push(5);
        display()     
    });    
    $('#six').click(function () {
        calculation.push(6);
        display()     
    });    
    $('#seven').click(function () {
        calculation.push(7);
        display()     
    });    
    $('#eight').click(function () {
        calculation.push(8);
        display()     
    });    
    $('#nine').click(function () {
        calculation.push(9);
        display()     
    });    
    $('#zero').click(function () {
        calculation.push(0);
        display()     
    });    
    $('#dot').click(function () {
        calculation.push(".");
        display()     
    });    
    $('#AC').click(function () {
        calculation = [];
        display()     
    });    
    $('#CE').click(function () {
        calculation.pop();
        display()     
    });    
    $('#percentage').click(function () {
        calculation.push("/100");
        display()     
    });    
    $('#plus').click(function () {
        calculation.push("+");
        display()     
    });    
    $('#minus').click(function () {
        calculation.push("-");
        display()     
    });    
    $('#multiply').click(function () {
        calculation.push("*");
        display()     
    });    
    $('#divide').click(function () {
        calculation.push("/");
        display()     
    });
    $('#equal').click(function () {
        $('#displayer').html(eval(calculation.join("")))
        calculation = [eval(calculation.join(""))]    
    });

});