// REVISE THIS
// Nested arrays 42:00 & 45:19 for index of nested array

// MDN Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections

// Useful read
// https://www.codecademy.com/forum_questions/54a31674d3292ff5640169ca

var nestedArray = [ [ 1, 2, 3, 4 ], [ 'joe', 'jack', 'james', 'john' ], [ 'tennis,', 'bowling' ] ];
console.log(nestedArray);
var getJack = nestedArray[2][2];
// OUTPUT
// (3) [Array(4), Array(4), Array(2)]
// 0: (4) [1, 2, 3, 4]
// 1: (4) ["joe", "jack", "james", "john"]
// 2: (2) ["tennis,", "bowling"]

// Access a nested array w
var fruits = [
	[ 'Bananas', 'Mangoes', 'Guavas' ],
	[ 'Apples', 'Pears' ],
	[ 'Oranges', 'Lemons', 'GrapeFruit' ],
	[ 'Cranberries', 'Cherries', 'Tomatoes', 'Blueberries', 'Blackberries' ]
];
// output is all the fruit in 4 arrays
console.log(fruits);

// access an array with the key
var citrusFruits = fruits[2];
console.log(citrusFruits);

// to access the individual item with the array key an the item key(s)
var pears = fruits[1][1];
console.log(pears);
var blackberries = fruits[3][2];
console.log(blackberries);

// output is tomatoes WHY?
var berriesThatAreRed = fruits[3][(0, 1, 2)];
console.log(berriesThatAreRed);

// Methods to nested arrays
var fruits = [
	[ 'Bananas', 'Mangoes', 'Guavas' ],
	[ 'Apples', 'Pears' ],
	[ 'Oranges', 'Lemons', 'GrapeFruit' ],
	[ 'Cranberries', 'Cherries', 'Tomatoes', 'Blueberries', 'Blackberries' ]
];
fruits[1].push('Melons', 'Grapes');
console.log(fruits);

// looping through nested arrays you need to use a nested loop - 2:16(loops and nested loops)
// var fruits = [
//               ["Bananas", "Mangoes", "Guavas"],
//               ["Apples", "Pears"],
// 			  ["Oranges", "Lemons", "GrapeFruit"],
//               ["Cranberries", "Cherries", "Tomatoes", "Blueberries","Blackberries"]

// for ( i=0; i<fruits.length; i++ )
// {
//   for ( j=0; j<fruits[i].length; j++ )
//   {
//     console.log(fruits[i][j])
// }
