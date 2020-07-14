// Map iterates over a data set, adds logic and provides a new data set with the logic and EVERY element
// map reduces the run time of code

// Before ES6 map under the hood is a for-loop that pushes the value into a new empty array
var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
var taxOnFruit = [];
for (var i = 0; i < priceOfFruit.length; i++) {
	taxOnFruit[i] = priceOfFruit[i] * 0.5;
}
// This iterates over each element of the array based on its length, multiplies the tax and this is the output for EVERY element
taxonFruit = [ 0.75, 1.25, 1.5, 2.5, 0.25, 3 ];

// Map is syntatic sugar that does the same thing with a call-back function
var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
var taxOnFruit = priceOfFruit.map((prices) => {
	return prices * 0.5;
});
// It goes to each of the prices (element value) of the the fruit (index of the array) and returns a new (array)
taxonFruit = [ 0.75, 1.25, 1.5, 2.5, 0.25, 3 ];

// Shortened in ECMA-6 even further as a function with only one param
// function calculateTaxOnFruit(number){return value * number}
var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
var calculateTaxOnFruit = (prices) => prices * 0.5;
var taxonFruit = priceOfFruit.map(calculateTaxOnFruit);
// you get the same result if you log this to the console
taxonFruit = [ 0.75, 1.25, 1.5, 2.5, 0.25, 3 ];

console.log('tax', taxonFruit);
// SYNTAX // iterate over array - (element value) (index of the array)(returns new array) with updated index/ value
var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
var taxOnFruit = priceOfFruit.map((value, index, arr) => {
	return {
		value: value,
		index: index
	};
});
console.log(taxOnFruit);
// OUTPUT in google console you will see __proto__: Array(0)

// param names can be changed but convention is to make the element singular
// var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
// var taxOnFruit = priceOfFruit.map((prices, value, arr) => {
// 	return {
// 		prices: value,
// 		arrayIndex: index
// 	};
// });

// YOU CAN WRITE CONDITIONAL STATEMENTS IN THE FUNCTION BODY OF THE CALLBACK
//  Double the even numbers
//  Leave the odd numbers unchanged
//  modulus will find the odd numbers
//  you are writing a condition on the value - any condition can be written

var arrayOfNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var doubleNumbers = arrayOfNumbers.map((value, index, array) => {
	if (value % 2 === 0) {
		return value * 2;
	} else {
		return value;
	}
});

// or as a ternery same output
var doubleNums = arrayOfNumbers.map((value, index, array) => {
	return value % 2 === 0 ? value * 2 : value;
});
console.log('doubleNumbers', doubleNumbers);
console.log('doubleNums', doubleNumbers);

// OUTPUT
// doubleNumbers
// (10) [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]
// 0: 1
// 1: 4
// 2: 3
// 3: 8
// 4: 5
// 5: 12
// 6: 7
// 7: 16
// 8: 9
// 9: 20
// length: 10
// __proto__: Array(0)

// more complex conditions for the array-map method
let transformedColors = [];
let transformColors = [];
let colors = [ { r: 255, g: 255, b: 255 }, { r: 128, g: 128, b: 128 }, { r: 0, g: 0, b: 0 } ];

for (let i = 0; i < colors.length; i++) {
	transformColors = {
		r: Math.round(colors[i].r / 2),
		g: Math.round(colors[i].g / 2),
		b: Math.round(colors[i].b / 2)
	};
	transformedColors.push(transformColors);
}
console.log(transformedColors);

// with map function - reduces run time

// let colors = [ { r: 255, g: 255, b: 255 }, { r: 128, g: 128, b: 128 }, { r: 0, g: 0, b: 0 } ];
const transformedColors2 = colors.map(function(transformColor2) {
	return {
		r: Math.round(transformColor2.r / 2),
		g: Math.round(transformColor2.g / 2),
		b: Math.round(transformColor2.b / 2)
	};
});

console.log(transformedColors2);

// with arrow functions reduces run time even further, binding the action to the objectit is pointing to

const transformedColors3 = colors.map((transformColor3) => {
	return {
		r: Math.round(transformColor3.r / 2),
		g: Math.round(transformColor3.g / 2),
		b: Math.round(transformColor3.b / 2)
	};
});

console.log(transformedColors3);

// EASY EXAMPLE
let numberArray = [ 1, 2, 3, 4, 5 ];

let trebleNumbers = numberArray.map((num) => num * 3);
console.log('treble', trebleNumbers);

// chaining

let oddsArray = [ 1, 2, 3, 4, 5 ];

let odds = oddsArray.map((value) => value * 3).reverse();
console.log('chaining', odds);
