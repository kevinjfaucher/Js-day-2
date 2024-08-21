// Checking if a number is positive, negative, or zero

let number = 10;

if (number > 0) {
    console.log("The number is positive."); // This will run because number is greater than 0
} else if (number < 0) {
    console.log("The number is negative."); // This won't run because the previous condition is true
} else {
    console.log("The number is zero."); // This won't run because neither of the previous conditions are true
}



// Determine the grade based on a score

let score = 85;

if (score >= 90) {
    console.log("Grade: A"); // This won't run because score is not >= 90
} else if (score >= 80) {
    console.log("Grade: B"); // This will run because score is >= 80 and < 90
} else if (score >= 70) {
    console.log("Grade: C"); // This won't run because the previous condition is true
} else if (score >= 60) {
    console.log("Grade: D"); // This won't run because the previous condition is true
} else {
    console.log("Grade: F"); // This won't run because none of the previous conditions are false
}


// Check the temperature and determine how to dress

let temperature = 45;

if (temperature >= 80) {
    console.log("It's hot outside, wear shorts."); // This won't run because temperature is not >= 80
} else if (temperature >= 60) {
    console.log("It's warm outside, wear a t-shirt."); // This won't run because temperature is not >= 60
} else if (temperature >= 40) {
    console.log("It's cool outside, wear a jacket."); // This will run because temperature is >= 40 and < 60
} else {
    console.log("It's cold outside, wear a coat."); // This won't run because the previous condition is true
}

