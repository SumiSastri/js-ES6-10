//  all instances of map inherit from map.prototype
//  all instances of array inherit from array.prototype


// WHAT IT DOES
// iterates through original (parent) array in its insertion order of keys and values
// performs a specific function on each value of the array iterating through the keys in order
// returns new array (child) with function performed on each key-value pair
// retains the items of the parent array
// If you obtain the keys of an object, map function can be performed iterating through the keys in order

// DOCUMENTATION
// W3 schools [https://www.w3schools.com/jsref/jsref_map.asp]
array.map(function(currentValue, index, arr), thisValue)
// MDN [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 }[, thisArg])
// Return element for new_array


// new_array — the new array that is returned
// arr — the array to run the map function on
// val — the current value being processed returned when function called
// index — the current index of the value being processed when function called
// array — the original array returned unchanged when function called

// EXAMPLES

// WRITTEN WITH A FOR LOOP
var priceOfFruit = [1.5, 2.5, 3,5, 0.5,6] 
var taxOnFruit = [];
for (var i=0; i <priceOfFruit.length; i ++) {
    taxOnFruit[i]= priceOfFruit[i] * 0.5;
}
// OUTPUT
taxonFruit = [0.75, 1.25, 1.5, 2.5, 0.25, 3]

var priceOfFruit = [1.5, 2.5, 3,5, 0.5,6] 
// Written out this is what the params are
// let priceOfFruit = priceOfFruit.map((val, i, arr) => {
// return val * 0. 5;
// });
// Shortened in ECMA-6 to where prices is the name assigned to val
// and price is the name assigned to index
// map iterates through all the values(prices) and each index (price)
// to return a new_array (called taxOnFruit) with tax as a function
// the call back function written is return all values multiplied by 0.5

var taxOnFruit = priceOfFruit.map(prices =>{return prices * 0.5})
taxonFruit= [0.75, 1.25, 1.5, 2.5, 0.25, 3]

// assign the call back function to a const (taxOnFruit)
// assign all the items of the array to a variable (priceOfFruit)
// write the function to calculate tax (value/ prices multiplied by 0.5)
// call the function in the const taxOnFruit


// Shortened in ECMA-6 even further as a function with only one param
// function calculateTaxOnFruit(number){return value * number}
var priceOfFruit = [1.5, 2.5, 3,5, 0.5,6] 
var calculateTaxOnFruit = prices => prices * 0.5
var taxonFruit = priceOfFruit.map(calculateTaxOnFruit)
// you get the same result if you log this to the console
taxonFruit = [0.75, 1.25, 1.5, 2.5, 0.25, 3]


// MAP CAN RETURN AN ARRAY OF OBJECTS

var priceOfFruit = [1.5, 2.5, 3,5, 0.5,6] 
var taxOnFruit = priceOfFruit.map((value, index, arr) => {
  return {
    value: value,
    index: index
  };
});

// OUTPUT

taxOnFruit
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {value: 1.5, index: 0}
1: {value: 2.5, index: 1}
2: {value: 3, index: 2}
3: {value: 5, index: 3}
4: {value: 0.5, index: 4}
5: {value: 6, index: 5}
length: 6
__proto__: Array(0)

// CHANGING THE NAMES OF THE VALUE AND INDEX DOES NOT CHANGE OUTPUT
var priceOfFruit = [1.5, 2.5, 3,5, 0.5,6] 
var taxOnFruit = priceOfFruit.map((prices, value, arr) => {
  return {
    prices: value,
    arrayIndex: index
  };
});

// OUTPUT
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {value: 1.5, index: 0}
1: {value: 2.5, index: 1}
2: {value: 3, index: 2}
3: {value: 5, index: 3}
4: {value: 0.5, index: 4}
5: {value: 6, index: 5}
length: 6
__proto__: Array(0)

// YOU CAN WRITE A FUNCTION WITH LOGIC IN THE CALL BACK
//  Double the even numbers
//  Leave the odd numbers unchanged
//  modulus will find the odd numbers 

var arrayOfNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
var doubleNumbers = arrayOfNumbers.map((value, index, array) =>{
	if (value % 2 === 0){
    return value * 2;
  } else {
    return value;
  }
});

// or as a ternery
var doubleNumbers = arrayOfNumbers.map((value, index, array) => {
  return value % 2 === 0 ? value * 2 : value ;
});

// OUTPUT
doubleNumbers
(10) [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]
0: 1
1: 4
2: 3
3: 8
4: 5
5: 12
6: 7
7: 16
8: 9
9: 20
length: 10
__proto__: Array(0)


// KODIRI 1:08

{
  // function that is written is stored in memory does nothing
  function functionName(numbers){
    return numbers.map((number) => *2)
  }
  // invoke the function - call it back from memory and pass the arguments
  // then the function is executed - or the code block runs on the invocation
  functionName([0,1,2,3,4]);
}


// MAP IN REACT - renders as a list
// the call back function here is render() 
// therefore each item will be printed out in the li jsx
// the values are numbers and the index of each number
// is printed as {number} from the array

// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>

// ADDITIONAL READING
// http://matthewodette.com/map-filter-and-fold-in-javascript
// https://scotch.io/tutorials/4-uses-of-javascripts-arraymap-you-should-know)


// declare all variables in the beginning
// white, grey, black
// iterate over collection, change colors and push into new array

let transformedColors =[];
let transformColors = []
let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]

for (let i =0; i <colors.length; i++){
	transformColors ={
		r: Math.round(colors[i].r/2),
		g: Math.round(colors[i].g/2),
		b: Math.round(colors[i].b/2)
	}
	transformedColors.push(transformColors);
}
console.log(transformedColors)

// with map function - reduces run time

let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]
const transformedColors = colors.map(function(transformColor){
	return {
		r: Math.round(transformColor.r/2),
		g: Math.round(transformColor.g/2),
		b: Math.round(transformColor.b/2)
	};
});

console.log(transformedColors)

// with arrow functions
let colors = [
{r: 255, g: 255, b:255},
{r: 128, g:128, b: 128},
{r: 0, g:0, b:0},
]
const transformedColors = colors.map(transformColor => {
	return {
	r: Math.round(transformColor.r/2),
	g: Math.round(transformColor.g/2),
	b: Math.round(transformColor.b/2)
	};
});

console.log(transformedColors)