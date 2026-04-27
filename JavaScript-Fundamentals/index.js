// <--- comment

// alert(123 + 456);

// STRING -- text --> quotation marks
// NUMBER -- number

console.log("Hello world");

// VARIABLES
// var myName = "Chett";
let letMyName = "Chett";
const constMyName = "Chett";

letMyName = "Chester";

// let can change over time
// const is a CONSTANT and cannot change once set

// lowerCamelCase <<< used by JS
// snake_case
// kebab-case

// DATA TYPES

// string -- text
const firstName = "Chett";
const lastName = "Tiller";
const fullName = firstName + " " + lastName;
const fullNameWithBacktics = `My name is: ${firstName} ${lastName}`;

// numbers
const arithmetic = 123 + 4;
const subtraction = 123 - 4;
const multiplication = 123 * 4;
const division = 123 / 4;

// boolean -- yes or no / true or false
const iAmTrue = true; 
const iAmFalse = false;

if (5 > 6) {
    const firstResult = "It was true"
} else {
    const secondResult = "FALSE"
}

// DOM MANIPULATION
// document object model

const heading = document.querySelector("h1")

heading.textContent = "Why Hello There"