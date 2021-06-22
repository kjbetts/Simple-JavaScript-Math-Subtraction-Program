'use strict';

// variables that take user input
const number1 = prompt('Enter number 1');
const number2 =  prompt('Enter number 2');

// user input is parsed into integers
var num1 = parseInt(number1);
var num2 = parseInt(number2);

// function that subtracts the 2 numbers
function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}

// Function is invoked and stored in the answer variable
const answer = subtractTwoNumbers(num1, num2);

// Answer is shown to the user and logged to the console
alert(answer);
console.log(answer);