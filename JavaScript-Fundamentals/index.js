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
const title = document.querySelector("h1")

// set attributes of an individual item
title.textContent = "Why Hello There"

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
welcomeMessage.id = "lake-tahoe-greeting"
welcomeMessage.style.color = "red"

// 3. give it a place to live (append or prepend)
const body = document.body

// body is where it lives
// welcomeMessage is the thing that lives there
body.append(welcomeMessage)

// REMOVING ELEMENTS

welcomeMessage.remove()

// EXERCISE

// // 1. Create a li --> it doesn't have a space to live & it doesn't have text yet
const newLi = document.createElement("li")

// // 2. Change the li textContent so it reads a fun fact
newLi.textContent = "Lake Tahoe has trees"

// // 3. Select the ul --> to be used later
const tahoeList = document.querySelector("ul")

// // 4. Put the li somewhere so that it displays
tahoeList.append(newLi)


// FUNCTIONS

// D.R.Y. --> don't repeat yourself

// newFact is an argument that will be given when we call the fn
function addNewLakeTahoeFact( newFact ) {
    // your instructions for the fn go here
    const newLi = document.createElement("li")
    newLi.textContent = newFact
    const tahoeList = document.querySelector("ul")
    tahoeList.append(newLi)
}

// invoke the fn (basically we make it happen)
addNewLakeTahoeFact("Sasquatch lives in lake tahoe")
addNewLakeTahoeFact("Lake Tahoe has trees")
addNewLakeTahoeFact("Lake Tahoe has winter sports")
addNewLakeTahoeFact("People live around Lake Tahoe")

// define a fn
function addOne( num ) {
    console.log(num + 1)
}

// run a fn
addOne(6)

function printFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`
    console.log(fullName)
}

printFullName("Chett", "Tiller") // "Chett Tiller"
printFullName("Jim", "Bob") // "Jim Bob"

function isItLargerThanFive(num) {
    if (num > 5) {
        console.log("Yep it's larger than 5")
    } else {
        console.log("No it's not larger than 5...")
    }
}

isItLargerThanFive(4)
isItLargerThanFive(9)

// CHANGE TITLE COLOR

// function makeTitleMagenta() {
//     const title = document.querySelector("h1")
//     title.style.color = "magenta"
// }

// function makeTitleMauve() {
//     title.style.color = "#E0B0FF"
// }

// more flexible function that can take in a color arg
function changeTitleColor(colorArgument) {
    const title = document.querySelector("h1")
    title.style.color = colorArgument
}

// COOKIE CLICKER

let cookiesClicked = 1000000000

function handleClickCookie() {
    cookiesClicked = cookiesClicked + 1
    const cookieCounter = document.querySelector("#cookie-counter")
    cookieCounter.textContent = `You have clicked the cookie ${cookiesClicked} times`
}

const cookieButton = document.querySelector("#cookie-button")
cookieButton.addEventListener("click", handleClickCookie)


// ARRAYS //

// data structures --> a piece of data which contains other data

const listOfFavoriteMovies = [
    "Saving Private Ryan",  // 0
    "Terminator 2",         // 1
    "Aladdin",              // 2
    "Gremlins",             // 3
    "Back to the Future",   // 4
    "Meet the Robinsons",   // 5
    "Interstellar"          // 6
]

// REMINDER: JS starts counting at 0
listOfFavoriteMovies[0] // "Saving Private Ryan"
listOfFavoriteMovies[0] = "How to Train Your Dragon" 

listOfFavoriteMovies.push("Alien")
listOfFavoriteMovies.pop()

// Random Number Generator
function getRandomMovie() {
    const randDecimalNumber = Math.random() * listOfFavoriteMovies.length
    const index = Math.floor(randDecimalNumber)
    const randomFavMovie = listOfFavoriteMovies[index]
    alert(randomFavMovie)
}

// FOR LOOPS
for (let i = 0; i < listOfFavoriteMovies.length; i++) {
    // get movie from the array based on i
    const movieName = listOfFavoriteMovies[i]
    // make an li
    const li = document.createElement("li")
    // give li textContent
    li.textContent = movieName
    // put the li in the movie-list
    const movieList = document.querySelector("#movie-list")
    movieList.append(li)
}

//     "Saving Private Ryan",  // 0
//     "Terminator 2",         // 1
//     "Aladdin",              // 2
//     "Gremlins",             // 3
//     "Back to the Future",   // 4
//     "Meet the Robinsons",   // 5
//     "Interstellar"          // 6


// OBJECTS //

// data structure -- data type that contains data

const person = {
    firstName: "Chett",
    lastName: "Tiller",
    favoritePizza: "Hawaiian",
    favoriteShirt: "Hawaiian",
    numberOfCats: 2,
    isLegalDrinkingAge: true,
    favoriteMovies: ["Back to the Future", "Alien"]
}
// key: value

person.favoritePizza // "Hawaiian"
person.favoriteMovies // [ "Back to the Future", "Alien" ]

person.age = 21 // set a value
person.age = 22

const listOfMovies = [
    {title: "Alien", year: 1979, cast:[]},
    // ... more of these go here
]