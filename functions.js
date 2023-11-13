// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
    return "How you doin?";
}
console.log(greeting())

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name) {
    return `How you doin, ${name}?`;
}

var name = "Pareesa"

console.log(customGreeting("Pareesa"))
// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last) {
    return `Hello ${first} ${middle} ${last}`
}

var first = "Pareesa"
var middle = "Elaine"
var last = "Kamgar-Dayhoff"
console.log(greetPerson("Pareesa", "Elaine", "Kamgar-Dayhoff"))

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.

function square(num) {
    var squared = num * num;
   return `The value of ${num} squared is ${squared}`
}

var num = 7
console.log(square(7))

// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

function checkStock(num, item) {
    if (num >= 4) {
        console.log(`${item} is stocked`)
    } else if (num === 0) {
        console.log(`${item} - OUT of stock!`)
    } else {
        console.log(`${item} - running LOW`)
    }
}



 checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

 checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"