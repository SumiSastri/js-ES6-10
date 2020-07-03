// Most find methods are looking for the array key, value or both
// and use the values, keys iterators as params
// array.indexOf()
// Array.prototype.indexOf()

// returns index of first instance of the value
// returns -1 if it is not present (not a call back)
var beasts = [ 'ant', 'bison', 'camel', 'duck', 'bison' ];
console.log(beasts.indexOf('bison'));
// Output - 1
console.log(beasts.indexOf('bison', 2));
// start from index 2
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1

// array.lastIndexOf()
// Array.prototype.lastIndexOf()

// ditto above in reverse
// returns index of last instance of the value
// returns -1 if it is not present (not a call back)

console.log(beasts.lastIndexOf('bison'));
// expected output: 4
console.log(beasts.lastIndexOf('giraffe'));
// expected output: -1
console.log(beasts.lastIndexOf('bison', 4));
// start from index 4
// output: 4
console.log(beasts.lastIndexOf('bison', 2));
// start from index 2
// output 2

// CALL BACKS

// array.find()
// Array.prototype.find()

// call back function return only strings with "blueberries"
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
var findBlueberries = fruitArray.find(function(fruit) {
	return fruit === 'Blueberries';
});
console.log(findBlueberries);
// Output "blueberries" the string

// array.findIndex()
// Array.prototype.findIndex()

// call back function return only the index of "blueberries"
// array.findIndex(function(currentValue, index, arr), thisValue)
// arr.findIndex(callback(element[, index[, array]])[, thisArg])

var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
const findBluberriesIndex = fruitArray.findIndex((fruit) => fruit === 'Blueberries');
console.log(findBlueberriesIndex);
// Output =[2] which is the index
