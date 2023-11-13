// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askForName(name) {
  return `Thanks for telling me your name, ${name}!`;
}

  console.log(askForName("Pareesa"));


//I introduced a parameter to the code, which makes it more dynamic and powerful

// EX 2:
function addThreeNums(first, second, third) {
var sum = first + second + third
console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//added the console.log command so that it prints the value, increases the functions utility


// EX 3:
function makeFreshPesto(){
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();

//I changed "func" to "function" - I dont believe func will work at all. It's also better if a function returns a value to increase its utility. 

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;
    console.log(avg)
  }

  average(100, 50)

//I added the console.log command to the function so the value is printed