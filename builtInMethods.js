// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// The includes() method is being called on the string "Hello World"
// No arguments are passed; includes() checks the string to see if whatever is in the parentheses is included in the string and returns a boolean
// "Hello" is in "Hello World" so the return value is true

"Hello World".endsWith("Hello");
// The endswith() method is being called on the string "Hello World"
// No arguments are passed; endsWith() checks the string to see if it ends with whatever is in the parentheses and returns a boolean
// "Hello World" does not end with "Hello" so the return value is false

"Hello World".endsWith("rld");
// The endswith() method is being called on the string "Hello World"
// No arguments are passed; endsWith() checks the string to see if it ends with whatever is in the parentheses and returns a boolean
// "Hello World" does not end with "rld" so the return value is true


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));

var dogsName = "Obsidian"
var job = " is a scientist"

//I called the string.length method on the string variable "dogsName", this determines the number of characters in the string and returns a number
console.log(dogsName.length);

//I called the concat() method on my two string variables "dogsName" and "job" which essentialy sandwiches the two strings together in the order that I placed them (dogsName first and job second)
console.log(dogsName.concat(job))


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

var myPets = ["Obsidian", "Mako", "Oreo"];

var heights = [5, 5.5, 6.1, 6.4];

//I called the pop() method on my array of strings named myPets, I then used the console.log() command to print the result. 
//This removes the final element from the array and prints the updated array in the console.
console.log(myPets.pop());
console.log(myPets);

//I called the unshift() method on my array of numbers named heights, I then used the console.log() command to print the result.
//This puts the value within the parentheses in index position 0 in the array and then prints the updated array. 
console.log(heights.unshift(4.5));
console.log(heights);




