// JAVA SCRIPT

// GENERAL PRINCIPLES

// Loosely typed language - stores variables that can be changed
// Strictly typed language  - HTML difficult to mutuate
// Blocks of code written in functions (which are objects)
// Critical render path - browers read html, css and then js
// Stops running the code when it reaches the return statement
// Using vanilla js put the scripts between body and html for set up
// DOM queries HTML and CSS and returns an object which then can be mutated
// Methods used depend on the library - jQuery, React-js, Node-js are library dependencies
// Node package manager helps you access some of these dependencies

// FUNCTIONAL PROGRAMMING

// GENERAL PRINCIPLES

// A function merely is a block of code designed to peform a particular task
// Makes programming modular and scalable
// In other languages it is called a subroutine or a procedure
// It is a complex data type - it is, ultimately an object
// Data types that a function can mutate are
// Primitives - strings, numbers as well as complex-data-types
// Arrays and Objects
// Higher order functions mutate arrays and objects with specific methods
// Most common are - map, reduce, filter though there are several math ones as well
// Math random, Math pi, etc.,
// Mutation happens with the use of conditionals and boolean evaluation

// DISPLAYING JS FUNCTIONS

// document.getElementById('nameOfId').innerHTML = function();
// you can target the attributes - name, value, class of the element
// console.log()
// window.alert()
// document.() - deletes all html so only used for testing

// SYNTAX
// To identify numbers specifically as numbers functions can have numbers within them
// They should not start with a number as the browser will try to parse (read) it as a number
// Case sensitive nameOfFunction and nameoffunction will be read as 2 different identifiers
// Similarly const - CONST and Const will not be recognised as variables
// Hypens will be read as subtraction signs
// lower camelCase is preferred to uppper CamelCase and under_scores
// commas separate variables, semi-colons statements or one line of code

// OPERATORS
// maths operators exceptions - x is not multiply it is the asterisk *
// equals = is an evaluator, equal to is == and strictly equal to is ===
// the plus sign is a maths operator as well as used to concat strings
// the percentage sign is modulus - or division remainder
//  ++ is increment -- is decrement
// += add to the previous number x +=y means x = x+y
// all maths operators -= *= /= and %= can be used in the same way
//  the bang is not equals to !=
// the question mark evaluates is this strictly true or false


function nameOfFunction(param1, param2) {
	// code block
	// must return something this is when the code block stops executing
}

// parameters act like local variables they make the function more flexible


function add2Numbers(a=0, b=0) {
	return a + b;
}
add2Numbers(5, 6);

// when we invoke this function the local variable is assigned - so now a=0 becomes a=5

// this function is staying let a = 'any number' let b = 'any number' in the params
// default is a=0 and b=0
// open the code block and excecute a + b and return me the value
// once we write this code we can re-use it again and again
// reusing the output of this code block is called invoking the function/ calling the function
// or simply reteriving the value returned from the block of code
// this can happen when a user clicks a button, you call the function in a console

 // NAMED FUNCTION 	OR FUNCTION DECLARATION
// params a, b, c are passed as arguements a* b * c in the code block
// the params make code DRY and extensible
// You can now multiply three numbers anywhere using this code

function multiply3(a, b, c) {
	return a * b * c;
}
multiply3();

// FUNCTION EXPRESSION
const multiply = function multiply3(a, b, c) {
  return a * b * c
}
multiply(4, 5, 6);

// ANONYMOUS FUNCTION  

const multiply = function(a, b, c) {
  return a * b * c
}

multiply(4, 5, 6);

// ECMA 6 - ALWAYS ANONYMOUS FUNCTIONS
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets
// The fat arrow replaces curly braces and const replaces the word function
// Return is implicit and does not need to be named
// They can NOT be hoisted
// For stack tracing and debugging name the const
// No need to bind this with an arrow function
// Especially useful for map, reduce filter in React


//If there are no params the syntax is very simple
// Define square function
const square = x => x * x;
// Invoke function to find product
square(10);


// If the function is one statement with params
// Define multiply function
const multiply = (x, y) => {
    return x * y;
}
// Invoke function to find product
multiply(30, 4);

//curly braces can only be removed if function is one statement 
// better to get into the habit of writing it like so

const multiply = multiply2(x, y) 
=> {return x*y }

multiply(3,2);

// See how this works - combine a function with HTML
document.getElementById('nameOfId').innerHTML = multiply2();

// here we are invoking the function in the inner HTML or the element that we have selected
// when the user therefore types in 2 numbers in the form the html element which we create
// for the answer is the inner html and will display the answer
//

// IN THIS EXAMPLE THE INDEX.HTML FILE WOULD LOOK LIKE SO

// <form>
// First number
//  <input type="number" name="quantity">
//   +
//    <input type="number" name="quantity">
//    Second number
//    =
//    <input type="number" name="quantity" Id="answer">
// </form>

//  THE SCRIPTS.JS FILE WOULD LOOK LIKE THIS
// function multiply2(a, b){
// 	return a*b
// }
// multiply2(5,6)

// THE ACTUAL COMBINATION IN THIS EXAMPLE WOULD BE

// document.getElementById("answer").innerHTML = multiply2();

//  take the example frequently used of a temperature convertor
//  if you write a function to calculate the temperature from celcius to farenheit like so

function celciusConvertor(farenheit) {
	return 5 / 9 * (farenheit - 32);
}
celciusConvertor(77);

// here you are saying let farenheit ='any number'
// then execute this mathematical calculation that converts celcius into farenheit
// call this function like so  celciusConvertor(77) where the number in parenthesis
// is any number in farenheit check if the code runs in the google console

// STORING FUNCTIONS AS VARIABLES 

// you can store a function as a variable - const

const calculateFarenheit = celsciusConvertor();

//use this with HTML

document.getElementById('nameOfId').innerHTML = celciusConvertor();

// Write a variable in one line - answer John Doe age 35

const firstName = 'John',
	secondName = 'Doe',
	age = 35;

var firstName = 'John',
	lastName = 'Doe',
	age = 35;

// Since the DOM is an internal API you have the traditional API calls
// get which is the getElement function, setAttribute = post, removeElement = delete
// functions then can be peformed on the data that is retrieved

-getElementsByTagName() - setAttribute() - removeElementById();

// The element data comes back as an object
// If the node element has more than one item, like a ul with li's
// The object will have an array within the object and array methods can be used
// A variety of simple functions and higher order functions can be performed on DOM elements
// Calculator excercise and other revision excercises will demonstrate this better

// STATEMENTS - SYNONYM FOR CODE
// Programs are a list of steps/ instructions/ protocols that the computer needs to follow to execute code
// These steps are called statements and with js-html-css the browser parses these statments to execute the code blocks
// Statements are executed one by one in order
// The semicolon in js tells the browser one statement is over and to execute the next

// READABILITY

// Statements can be broken with the semicolon or operators
// If a statement is more than 80 characters use breaks
// Curly braces show a list of code block to be executed together { }

// CRITICAL RENDER PATH AND SCOPE

// The browser complies code first by looking at the syntax (lexical compliation)
// Detects syntax errors and the code does not run
// Detects blocks of code in the function - conditionals, loops, variables etc.,
// Then it looks at the scope of the function and what is within and what is referenced
// Then the memory creates the new code (DOM?)

// by default you are in the window scope therefore window.alert()
// go to console type window to check root scope
