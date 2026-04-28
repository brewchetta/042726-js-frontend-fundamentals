// variable
let greeting = "Day One Review"
// constants cannot change but let can

greeting = "Welcome to Day One Review" // <<< this would break

// console.log prints the variable into the console
console.log(greeting)

// defining the function
function makeSandwich(extraIngredient) {
    console.log("First get the bread")
    console.log("Then get the peanut butter")
    console.log("Get the jelly")
    console.log("Also add the " + extraIngredient)
    console.log("Smush it all together")
    console.log("Your cat gets ahold of it and eats it")
}

// if / else --> conditional logic
function currentMeal() {

    const now = new Date()
    const currentHour = now.getHours()

    if (currentHour < 12) { // breakfast before noon
        console.log("Eating breakfast")
    
    } else if (currentHour < 17) { // lunch before 5pm
        console.log("Eating lunch")
    
    } else if (currentHour < 22) { // dinner before 10pm
        console.log("Eating dinner")
    
    } else { // midnight snack after that
        console.log("Eating a midnight snack")
    }

}


// arrays
const myArray = [0,1,2,3,4,5,6]
// adding / removing items
myArray.push(7)
myArray.pop()

const evilLairs = [
    "the moon",
    "the bottom of the ocean",
    "a volcano",
    "new york city"
]

function letterIsNotO(letter) {
  return letter !== "o"
} 

// looping over secret evil lairs
for (let i = 0; i < evilLairs.length; i++) {
    // get the current evil lair
    const currentLair = evilLairs[i]
    // split the letters into an array
    const currentLairLetters = currentLair.split("")
    // filter so that letters that aren't O get included
    const filteredLetters = currentLairLetters.filter(letterIsNotO)
    // join the letters back into a word
    const joinedLetters = filteredLetters.join("")
    // print to console
    console.log(joinedLetters)
}

// objects
const person = {
    firstName: "Chett",
    lastName: "Tiller",
    age: 21
}

const firstNameById = document.getElementById("first-name")

// the DOM
function showPersonOfInterest() {
    const firstNameByQuery = document.querySelector("#first-name")
    firstNameByQuery.textContent = person.firstName
    
    const lastNameByQuery = document.querySelector("#last-name")
    lastNameByQuery.textContent = person.lastName
    
    const ageByQuery = document.querySelector("#age")
    ageByQuery.textContent = person.age
}