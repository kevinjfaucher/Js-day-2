function sayHello() {
    console.log("Hello, world!");
}

// Call the function
sayHello();


/*

Function Definition: function sayHello() { ... } defines a 
function named sayHello with no parameters.

Body: Inside the curly braces {}, the function contains a 
single statement that prints "Hello, world!" to the console.

Function Call: sayHello(); calls the function, causing it 
to execute and print the message.

*/


function greet(name, greeting) {
    console.log(greeting + ", " + name + "!");
}

// Call the function with arguments
greet("Kevin", "Hello");
greet("Alice", "Good morning");


// Example: Simulating Function Overloading -----------------------------------------------

javascript

function greet(name, greeting) {
    if (greeting === undefined) {
        // If only one argument is passed, use a default greeting
        greeting = "Hello";
    }

    console.log(greeting + ", " + name + "!");
}

// Call the function with two arguments
greet("Kevin", "Good morning"); // Output: Good morning, Kevin!

// Call the function with one argument
greet("Alice"); // Output: Hello, Alice!

/*
Explanation:

    Single Function: The greet function handles different numbers of
     arguments by checking if the greeting parameter is undefined.
    Two Arguments: When greet("Kevin", "Good morning"); is called,
     both name and greeting are provided, so it prints "Good morning, Kevin!".
    One Argument: When greet("Alice"); is called, 
    only name is provided. 

    The function detects that greeting is undefined and assigns it a 
    default value of "Hello", resulting in "Hello, Alice!".

This approach allows you to create flexible functions that can behave
 differently based on the number or type of arguments passed, simulating function overloading.
*/

// -------------------------------------------------------------------------------------


// Example: Function that Squares a Number

function squareNumber(number) {
    return number * number;
}

// Call the function and store the result
let result2 = squareNumber(4);

// Output the result
console.log("The square of 4 is: " + result);



/*
    Function Definition: The squareNumber function takes one parameter, number.
    Function Body: The function calculates the square 
    of the input by multiplying number by itself and then returns the result.
    Function Call: When squareNumber(4) is called, 
    the function returns 16, which is the square of 4.
    Output: The result is stored in the variable result, 
    and "The square of 4 is: 16" is printed to the console.

    This example demonstrates a basic function that takes an 
    input (number) and returns a calculated value (the square of that number).
*/


// ---------------------------------------------------------------------------------------------

// Example: Function Calling Another Function


function add(a, b) {
    return a + b;
}

function multiplyAndAdd(x, y, z) {
    // Call the add function inside multiplyAndAdd
    let sum = add(x, y);
    return sum * z;
}

// Call the multiplyAndAdd function
let result = multiplyAndAdd(2, 3, 4);
console.log("Result is: " + result);


/*

    Function add(a, b): This function takes two parameters, a and b, and returns their sum.
    Function multiplyAndAdd(x, y, z): This function calls the add function 
    with x and y as arguments, stores the result in the variable sum, 
    and then multiplies sum by z. It returns the final result.

    Function Call: multiplyAndAdd(2, 3, 4) calls the multiplyAndAdd function, 
    which in turn calls the add function. The result of add(2, 3) is 5, and then 5 * 4 
    gives 20, which is returned and printed as "Result is: 20".

    This example shows how one function (multiplyAndAdd) can call another
    function (add) to perform part of its work.

*/


// ------------------------------------------------------------------------------


// Arrow function

function sayHello() {
    console.log("Hello, world!");
}

// Call the function
sayHello();


const sayHello2 = () => {
    console.log("Hello, world!");
}

// Call the arrow function
sayHello2();


/*
const greet = const greet =: 
This part defines a 
constant variable named greet and assigns the arrow function to it.
The arrow function itself is anonymous (it has no name),
but it's stored in the greet variable so it can be called later.

*/

/*
() =>

(): These parentheses are used to define the parameters for the function. 
In this case, the function doesn't take any parameters,
so the parentheses are empty.
If there were parameters, they would go inside the parentheses, 
like this: (name) =>.

*/


/*  
=>: 

This is the arrow, which is what gives the arrow function its name. 
It separates the parameter(s) 
from the function body and indicates that this is an arrow function.

*/



/*
greet();: This calls the arrow function stored in the greet variable. When called, 
it executes the code inside the function body, printing "Hello!" to the console.

*/


// ---------------------------------------------------------------------------------

// Example: Arrow Function with a Parameter
const greet = (name) => {
    console.log("Hello, " + name + "!");
};

// Call the arrow function with an argument
greet("Kevin");
// 