/*
A ternary operator is a shorthand way of writing an if/else statement in JavaScript. 
It's called "ternary" because it operates on three operands: a condition, 
an expression if the condition is true,
 and an expression if the condition is false.
*/


//  condition ? expressionIfTrue : expressionIfFalse;


let number = 5;

// Using a ternary operator
let result = (number >= 0) ? "The number is positive." : "The number is negative.";

console.log(result); // Output: "The number is positive."


let age = 18;

// Using a ternary operator to determine if someone is an adult
let isAdult = (age >= 18) ? true : false;

console.log(isAdult); // Output: true
