// DISPLAYING JS FUNCTIONS

// document.getElementById('nameOfId').innerHTML = function();
// you can target the attributes - name, value, class of the element
// console.log()
// window.alert()
// document.() - deletes all html so only used for testing

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

// ECMA 6 - ALWAYS ANONYMOUS FUNCTIONS
// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets
// The fat arrow replaces curly braces and const replaces the word function
// Return is implicit and does not need to be named
// They can NOT be hoisted
// For stack tracing and debugging name the const
// No need to bind this with an arrow function
// Especially useful for map, reduce filter in React

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
