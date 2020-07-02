// functions and strings 37:00

function wordGame (noun, adjective, verb, adverb){
	return result = ''
	result += "noun" + "" + "adjective" + "" + "verb" + "adverb"
	return result;
}

console.log(wordGame())

// functions, numbers local scope
function add (number1, number2) {
	var number1 = a;
	var number2 = b;
	return a+b
}
add(5, 6)

// global scope - the variable is available to the whole code block
// It is not exclusive to the function it is written in
// the scope of the  variables become global if you do not use a var, const or let

function add (number1, number2) {
	number1 = a;
	number2 = b;
	return a+b
}
add(5, 6)

// using the var
var number1 = a;
var number2= b;

function add (number1, number2) {
	return a+b
}
add(5, 6)

function subtract(number1, number2){
	return a-b
}
subtract(5, 6)

// using conditional logic in a function
function checkNumbers(number1, number2){
	// is a less than b true?
	if (a < b) {
		return a+b
	}
	// is a greater than b true?
	if (a > b){
		return a*b
	}
	// is a not equal to b true?
	if (a != b) {
		return a%b
		console.log("odd or even?")
	}
	// is a equal to b true?
	
	if (a=b){
		console.log("a is equal to b")
	}
}	

// if you have a global and local variable the local variable will take precendence

var number1 = a;
var number2= b;


function times5(number1, number2){
var	number1 = x;
var	number2= y;
	return (x+y)*5
	return (a+b)*5
}
times5 (5, 6)

// EVALUATOR, EQUAL, STRICTLY EQUAL 1:16

var a = b 
//an assignment of variable a to b

var a === b 
// is a strict equality 
// a has to be a number and b has to be a number

var a == b
// 2 and "two" can be converted into each other