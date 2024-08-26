
/*
A switch statement in JavaScript (and in other programming languages)
 is used to execute one block of code 
among many based on the value of an expression. 
It provides an alternative to using multiple if/else if/else 
statements when you want to compare a single expression
against several possible values.

Purpose of a switch Statement:

    Simplifies Multiple Conditional Checks: The switch statement is especially
     useful when you need to compare a variable or expression against
      multiple possible values.
      
      It makes the code more readable and easier to maintain compared to using a 
      series of if/else if statements.
    Efficiency: Depending on the implementation, 
    switch statements can be more efficient than if/else if statements, 
    especially when there are many cases to evaluate.
    Clear Intent: A switch statement clearly communicates 
    that you're checking one specific value against multiple cases, 
    making your code easier to understand.
*/



switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
    case value2:
        // Code to be executed if expression === value2
        break;
    case value3:
        // Code to be executed if expression === value3
        break;
    default:
        // Code to be executed if expression doesn't match any case
}


/*
How It Works:

    expression: The value you want to compare against multiple cases.
    
    case value: Each case is a potential match for the expression. 
    If the expression matches this value, the code block under this case will be executed.
    
    break: The break statement exits the switch statement, 
    preventing the execution of subsequent cases. Without break,
     the code will continue to execute the following cases ("fall-through").
    
     default: 
    The default case is optional.
    It provides a block of code that will be executed if none of the case values match the expression. It's similar to the else statement in an if/else chain.


*/



let fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log("Bananas are $0.99 per pound.");
        break;
    case 'apple':
        console.log("Apples are $1.29 per pound."); // This will run because fruit === 'apple'
        break;
    case 'orange':
        console.log("Oranges are $1.09 per pound.");
        break;
    default:
        console.log("Sorry, we are out of that fruit.");
}

/*
Explanation:

    The switch statement checks the value of fruit.
   
    It matches the value of fruit to the case 'apple': block because fruit is equal 
    to 'apple'.
    The corresponding code console.log("Apples are $1.29 per pound."); is executed.
    
    The break statement stops the switch from continuing to check the next cases.
    If fruit had been 'banana', the first case would have executed.
     
    If it didn't match any of the listed cases, the default block would execute, 
     outputting "Sorry, we are out of that fruit."


*/



let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday"); // This will run because day === 3
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

/*

Direct Matching: The switch doesn't need to evaluate each day sequentially 
like an if/else chain might. 

Instead, it jumps directly to the case that matches day === 3
 and executes that block of code.

Reduced Checks: Unlike an if/else chain, which checks each condition one by one,
 switch finds the matching case more directly, 
 which can be faster in cases with many options.

*/

// 