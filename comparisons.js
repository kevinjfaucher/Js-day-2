// JavaScript Comparison Operators Examples

// 1. Strict Equality (===)
// Checks if two values are exactly the same, both in value and type
let isEqual = (5 === 5);
console.log("Strict Equality (5 === 5): " + " " + isEqual); // Output: true

// 2. Less Than (<)
// Checks if the left value is less than the right value
let isLessThan = (3 < 7);
console.log("Less Than (3 < 7): " + " " + isLessThan); // Output: true

// 3. Greater Than (>)
// Checks if the left value is greater than the right value
let isGreaterThan = (9 > 4);
console.log("Greater Than (9 > 4): " + " " + isGreaterThan); // Output: true

// 4. Less Than or Equal To (<=)
// Checks if the left value is less than or equal to the right value
let isLessThanOrEqual = (8 <= 8);
console.log("Less Than or Equal To (8 <= 8): " + " " + isLessThanOrEqual); // Output: true

// 5. Greater Than or Equal To (>=)
// Checks if the left value is greater than or equal to the right value
let isGreaterThanOrEqual = (6 >= 3);
console.log("Greater Than or Equal To (6 >= 3): " + " " + isGreaterThanOrEqual); // Output: true

// Why we don't like the "==" operator

// The "==" operator checks for equality in value but not in type, which can lead to unexpected results
let looseEquality = (5 == '5'); // true because "==" converts the string '5' to the number 5 before comparison
console.log("Loose Equality (5 == '5'): " + " " + looseEquality); // Output: true

// Let's see how this differs from strict equality (===):
let strictEquality = (5 === '5'); // false because "===" checks both value and type
console.log("Strict Equality (5 === '5'): " + " " + strictEquality); // Output: false

// Explanation:
// The "==" operator performs type coercion, meaning it converts one or both values to a common type before comparing them.
// This can lead to unexpected results. For example, 5 == '5' is true because the string '5' is converted to the number 5 before comparison.

// In contrast, the "===" operator does not perform type coercion. It checks both the value and the type.
// Therefore, 5 === '5' is false because the number 5 and the string '5' are of different types.

// To avoid bugs and unexpected behavior, it's generally recommended to use "===" instead of "==".

/*
Explanation:

    Strict Equality (===): Compares both the value and the type, 
    ensuring that both must be identical for the comparison to be true.
    
    Less Than (<): Checks if the left operand is less than the right operand.
    
    Greater Than (>): Checks if the left operand is greater than the right operand.
    Less Than or Equal To (<=): Checks if the left operand is less 
    than or equal to the right operand.
    
    Greater Than or Equal To (>=): Checks if the left operand is 
    greater than or equal to the right operand.

Why Avoid ==:

    Loose Equality (==): This operator compares only the values after 
    converting (coercing) them to the same type, which can lead to unexpected results. 
    For example, 5 == '5' returns true because JavaScript converts the string '5' to
     the number 5 before comparing. However, 5 === '5' returns false
      because the types are different (number vs. string).

To avoid potential bugs and unexpected behavior, 
it's better to use the === operator, which does not perform type coercion.



*/

/*
Coercion in JavaScript (and in many other programming languages) is the automatic or 
implicit conversion of values from one data type to another.
 JavaScript is a loosely typed language, which 
 means that variables are not bound to a specific type,
  and the language can automatically convert (or "coerce")
  values as needed during operations.
Types of Coercion:

    Type Coercion (Implicit Coercion):
        This happens automatically when you perform operations on 
        values of different types. JavaScript tries to make sense of 
        he operation by converting one or both of the values to a compatible type.
        Example: 5 == '5'
            Here, the string '5' is implicitly converted
             to the number 5 before comparison. As a result, 
             the expression evaluates to true.

*/
// 