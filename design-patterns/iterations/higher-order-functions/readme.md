### Higher Order Functions In JavaScript

### What does the filter method do?
```array.filter()``` or ```Array.prototype.filter()``` is a call back function that
iterates through original (parent) array. It runs a block of logic each element of the parent array and returns new array (child) with filtered items based on the logic. It performs boolean logic checking if the condition in the function body is true or false with each element and if no items match the test an empty array is returned.  It returns all elements into the new array that meet the strictly true logic performed on the element. It then compiles and coerces the true return of elements in the new array all array elements that do not pass the true test are skipped.

### DOCUMENTATION
W3 schools 
```array.filter(function(currentValue, index, arr), thisValue)```
MDN
```
var new_array = array.filter(function callback(currentValue[, index[, array]]) {
}[, thisArg])

```

In ES6 this would be written with the fat arrow that binds the ```this``` key word.
```
variable functionName = array.filter((elementValue) => {
	return elementValue <= 18;
});

```
The compiler is transpiling the ES6 code into a for-loop, with a condition block, an array.push() method to coerce all the true returns into a new array and the false into an empty array. The call back function returns the true block not the false block and the original array is not mutated. In this example, the call back function is  filter all the ages that end in an even number written in the traditional forLoop.

```
var arrayOfAges = [5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80]
let evenNumberAgesArray = [];

for(var i = 0; i < arrayOfAges.length; i++) {
  if (arrayOfAges[i] % 2 === 0) evenNumberAgesArray.push(arrayOfAges[i]);
}
// OUTPUT
evenNumberAgesArray
(7) [10, 18, 20, 30, 50, 60, 80]
```

Written with ES6, the call back function is - is age less than 18 (return true only)

```
var arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];
let checkAdult = arrayOfAges.filter((value) => {
	return value <= 18;
});
checkAdult(4)[(5, 10, 15, 18)];
```
In an array of nested objects the ES6 would read like so:- 
```
var filteredBands = musicCatalog.filter((language) => {
	return language.language === 'english';
});
console.log(filteredBands);
```
### ADDITIONAL READING
[http://matthewodette.com/map-filter-and-fold-in-javascript]
[https://scotch.io/tutorials/4-uses-of-javascripts-arraymap-you-should-know]

