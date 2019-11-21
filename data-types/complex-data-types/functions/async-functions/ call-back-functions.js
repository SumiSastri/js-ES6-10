functions.js

//  function with params (56:00)

function add1(a, b){
	return a + b
}
// calling the function
// add1 (5, 6) output 11
function add2 (a, b) {
	// argument for the function what you want the params and function to do
	return (a + 5)/ b
}
// calling the function
// add2  (5, 6) output 1.6666666666666667 (because js returns 16 dec places)


// declaring variables outside the function for global scope
const a = 5
const b = 3
function add(){
	return a + b
}
// calling the function
// add(5, 6)/ add() always 8 NOT 11 (because of the constants)

// behaviour does not change whether it is a let or const
let c = 10
let d = 3
function add(){
	return c + d
}
add(210, 4)
// output always 13
(1:0)
// converting kilos to stones with a function
function kilosToStones(x){
	const kilos = x
	const pounds = 2.2
	const stones = 14
	return x = (x * pounds / stones)
}
kilosToStones(75)

// 1:04-1:05 assign a value to a returned function

let  weightInKilos = 0;
function kilosToStones(x){
	const kilos = x
	const pounds = 2.2
	const stones = 14
	return x = (x * pounds / stones)
}
weightInKilos = kilosToStones()

// now if you pass weightInKilos = kilosToStones(65)
// output will be 10.21

// functions and arrays [1:06] do this again
// array.pop();
// array.shift();

let  arrayOfNumbers = [ -1, 0, 1, 2, 3, 4, 5, 6 ]

function useArrayMethods (array, arrayPlusNewNumber) {
array.push(arrayPlusNewNumber)
	return array.shift()
}
console.log (useArrayMethods(arrayOfNumbers, 7))
// console log a function by passing the function 
// as a call back to the function console.log

// conditions exist within functions

// [56.11] scope in functions - not working

let kilos = 0;
let height = 0;
function bodyMassIndex(kilos, height){
	var kilos = x
	var height = y
const bodyMassIndexCalc = x/y
return bodyMassIndexCalc
}
bodyMassIndex(75/169)


var addTwo = function add1(a, b){
	return a + b
}
// ECMA 6?
// var addTwo = () => a+b
