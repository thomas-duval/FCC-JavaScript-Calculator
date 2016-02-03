/* global displayer */
var calculation = [];
var operation = "";
var result

function display() {
    operation = calculation.join("");
    $('#displayer').html(operation)
}

$(document).ready(function () {
    $('#one').click(function () {
        calculation.push(1);
        display()     
    });
    $('#plus').click(function () {
        calculation.push("+");
        display()     
    });
    $('#equal').click(function () {
        result = eval(calculation.join(""));
        $('#displayer').html(result)    
    });

});