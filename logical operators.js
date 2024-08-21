// JavaScript Logical Operators Examples

// 1. Logical AND (&&)
// Returns true if both operands are true; otherwise, returns false
let andResult = (5 > 3 && 8 > 6);
console.log("Logical AND (5 > 3 && 8 > 6): " + " " + andResult); // Output: true

// Another example where one condition is false
andResult = (5 > 3 && 2 > 6);
console.log("Logical AND (5 > 3 && 2 > 6): " + " " + andResult); // Output: false

// 2. Logical OR (||)
// Returns true if at least one of the operands is true; otherwise, returns false
let orResult = (5 > 3 || 2 > 6);
console.log("Logical OR (5 > 3 || 2 > 6): " + " " + orResult); // Output: true

// Another example where both conditions are false
orResult = (1 > 3 || 2 > 6);
console.log("Logical OR (1 > 3 || 2 > 6): " + " " + orResult); // Output: false

// 3. Logical NOT (!)
// Reverses the truth value of the operand; true becomes false, and false becomes true
let notResult = !(5 > 3);
console.log("Logical NOT (!(5 > 3)): " + " " + notResult); // Output: false

// Another example where the condition is false
notResult = !(1 > 3);
console.log("Logical NOT (!(1 > 3)): " + " " + notResult); // Output: true

// Combining logical operators
// Example: Check if a number is within a range (between 10 and 20, inclusive)
let number = 15;
let isInRange = (number >= 10 && number <= 20);
console.log("Is 15 within the range 10-20? (number >= 10 && number <= 20): " + " " + isInRange); // Output: true

// Example: Check if a number is outside a specific range
number = 25;
let isOutsideRange = (number < 10 || number > 20);
console.log("Is 25 outside the range 10-20? (number < 10 || number > 20): " + " " + isOutsideRange); // Output: true

// Example: Combining AND and OR with NOT
let complexCondition = !(number > 0 && (number < 10 || number > 20));
console.log("Complex Condition (!(number > 0 && (number < 10 || number > 20))): " + " " + complexCondition); // Output: false
