// array.filter()
// array.filter()
// Array.prototype.filter()

//  WHAT IT DOES
// iterates through original (parent) array
// performs a specific function on each item of parent 
// returns new array (child) with filtered items 
// retains the items the parent array
// if no items match the test an empty array is returned

// DOCUMENTATION
// W3 schools 
array.filter(function(currentValue, index, arr), thisValue)
// MDN
var new_array = array.filter(function callback(currentValue[, index[, array]]) {
    // Return element for new_array that is true
    // coerces the true return of elements in the new array
    // all array items that do not pass the true test are skipped
}[, thisArg])


// new_array — the new array that is returned
// array — the array (parent) to run the filter function on
// callback — the function used to test parent values
// return true keeps the element, return false filters it out
// the call back new_array — the new array that is returned
// callback function can take three arguments:
// element — the current value of parent
// index — the current index parent
// array — the original array (parent) 

// EXAMPLES

// with a for-loop and an if true statement
// it needs an array.push to filter results of the true statement
// if false returns an empty array
// the call back function is  
// filter all the ages that end in an even number

var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let evenNumberAgesArray = [];
// the call back function is  
// filter all the ages that end in an even number
for(var i = 0; i < arrayOfAges.length; i++) {
  if (arrayOfAges[i] % 2 === 0) evenNumberAgesArray.push(arrayOfAges[i]);
}
// OUTPUT
evenNumberAgesArray
(7) [10, 18, 20, 30, 50, 60, 80]

// ECMA 6 notation
// baked in are function.prototype.bind() & Array.prototype.push()

var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let evenNumberAgesArray = arrayOfAges.filter(value[filteredvalue] => {
return value[parent] % 2 === 0;
})
// OUTPUT
evenNumberAgesArray
(7) [10, 18, 20, 30, 50, 60, 80]


// EXAMPLE 2
evenNumberAgesArray
// the call back function is  
// is age below 18 (return true values only)
var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let checkAdult = []
for(var i = 0; i < arrayOfAges.length; i++) {
  if (arrayOfAges[i] <= 18) checkAdult.push(arrayOfAges[i]);
}
checkAdult
(4) [5, 10, 15, 18]


var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let checkAdult = arrayOfAges.filter(value => {
	return value <= 18;
})
checkAdult
(4) [5, 10, 15, 18]


// EXAMPLE 3

// the call back function is  
// is age more than 21 (return true only)

var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let votingAge = arrayOfAges.filter(moreThan21 => {
	return moreThan21 >= 21;
})
votingAge

// EXAMPLE 4
// the call back function is  
// is the word length more than 6 (return true only)

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(oldwords => oldwords.length > 6);
console.log(result);

// ADDITIONAL READING
// http://matthewodette.com/map-filter-and-fold-in-javascript
// https://scotch.io/tutorials/4-uses-of-javascripts-arraymap-you-should-know)