// SEARCHING THROUGH ITEMS IN AN ARRAY

findIndexOf(array, value);
// returns the index of a named item/element in an array
// returns -1 if no match is found
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
const findBluberriesIndex = fruitArray.findIndex((fruit) => fruit === 'Blueberries');
console.log(findBlueberriesIndex);
// Output =[2] which is the index

var beasts = [ 'ant', 'bison', 'camel', 'duck', 'bison' ];
indexOf();
// returns the first match after an iteration
// returns index of first instance of the value
// returns -1 if it is not present (not a call back)

console.log(beasts.indexOf('bison'));
// Output - 1
console.log(beasts.indexOf('bison', 2));
// start from index 2
// expected output: 4
console.log(beasts.indexOf('giraffe'));
// expected output: -1

lastIndexOf();
// returns the last match after an iteration
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
