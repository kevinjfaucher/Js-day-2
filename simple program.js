// Function to greet the user
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Function to say goodbye to the user
function sayGoodbye(name) {
    console.log("Goodbye, " + name + "!");
}

// Function to repeat the greeting multiple times
function repeatGreeting(name, times) {
    for (let i = 0; i < times; i++) {
        greetUser(name);
    }
}

// Main program
const userName = "Kevin";
const greetingTimes = 3;

repeatGreeting(userName, greetingTimes); // Greets the user 3 times
sayGoodbye(userName); // Says goodbye to the user
