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

// get an individual item
const heading = document.querySelector("h1")

// set attributes of an individual item
heading.textContent = "Why Hello There"

// get all items
const allPTags = document.querySelectorAll("p")

// get a specific item from all items
const thirdPTag = allPTags[2]

thirdPTag.style.fontFamily = "monospace"

// JS STARTS COUNTING AT 0 SO [2] IS ACTUALLY THE THIRD ONE


// ADDING ELEMENTS

// 1. use document.createElement --> element type
// makes the element but it is not actually on the page
const welcomeMessage = document.createElement("h2") 

// 2. change whatever is important about the element
welcomeMessage.textContent = "Welcome to Lake Tahoe"

// 3. give it a place to live (append or prepend)
const body = document.body
body.append(welcomeMessage)

// REMOVING ELEMENTS

// welcomeMessage.remove()

// EXERCISE

// // 1. Select the ul --> to be used later
// const tahoeList = document.querySelector("ul")

// // 2. Create a li
// const newLi = document.createElement("li")

// // 3. Change the li textContent so it reads a fun fact
// newLi.textContent = "Lake Tahoe has trees"

// // 4. Put the li somewhere so that it displays
// tahoeList.append(newLi)


// FUNCTIONS

// D.R.Y. --> don't repeat yourself

// newFact is an argument that will be given when we call the fn
function addNewLakeTahoeFact( newFact ) {
    // your instructions for the fn go here
    const tahoeList = document.querySelector("ul")
    const newLi = document.createElement("li")
    newLi.textContent = newFact
    tahoeList.append(newLi)
}

// invoke the fn (basically we make it happen)
addNewLakeTahoeFact("Sasquatch lives in lake tahoe")

// define a fn
function addOne( num ) {
    console.log(num + 1)
}

addOne(6)