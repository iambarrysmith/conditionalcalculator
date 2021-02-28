var containerEle = document.body.querySelector(".container");


var num1 = parseInt(prompt('Enter first number: '));
if(isNaN(num1)) alert("Invalid number 1");
var operator = prompt('Enter operator: ');

var num2 = parseInt(prompt('Enter second number: '));
if(isNaN(num2)) alert("Invalid number 2");

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}
containerEle.innerHTML=(`The answer is ${result}.`);