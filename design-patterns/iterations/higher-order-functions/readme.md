### Higher Order Functions In JavaScript

The four methods chained and compared

```
const setAges = [ 18, 19, 20, 21, 60, 61, 62 ];
const setCombinedAges = setAges
	.map((elementValue) => elementValue * 3)
	<!-- acts on every element map output [54, 57, 60, 63, 180, 183, 186] -->
	.sort((a, b) => b - a)
	<!-- looks at first and last element and sorts in ascending or descending order the log is in descending order sort output [[186, 183, 180, 63, 60, 57, 54]] -->
	.filter((elementValue) => elementValue >= 60)
	<!-- performs a boolean evaluation filter output  [60, 63, 180, 183, 186]-->
	.reduce((cumulativeAges, elementValue) => cumulativeAges + elementValue);
	<!-- produces a single cumulative value reduce output 672 -->
```
### What does the map method do?
```array.map()``` or ```Array.prototype.map()``` is a callback function thatiterates through original (parent) array in its insertion order of keys and values. The call back function logic is performed on each value of the array iterating through the keys in order. The method
returns new array (child) with the function body performed on each key-value pair. It
retains the items of the parent array. If you obtain the keys of an object, map function can be performed iterating through the keys in order of the object as well.

### SYNTAX
W3 ```array.map(function(currentValue, index, arr), thisValue)```

MDN
```
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 }[, thisArg])
```
It runs a block of logic each element of the parent array and returns new array (child) with EACH item based on the logic of the function body.

Written as a traditional forLoop, the ALL the new values are pushed into the empty array

```
var priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
var taxOnFruit = [];
for (var i = 0; i < priceOfFruit.length; i++) {
	taxOnFruit[i] = priceOfFruit[i] * 0.5;
}
// OUTPUT
taxonFruit = [ 0.75, 1.25, 1.5, 2.5, 0.25, 3 ];
```
In ES6 this is shortened to read, where the compiler does the heavy-lifting converting each element to the new updated element and pushing it into a new array. The old array is also returned without mutuation. It is a versatile method that replaces the ```forEach``` method which results in some side-effects.

```
var taxOnFruit = priceOfFruit.map((prices) => {
	return prices * 0.5;
});
// OUTPUT
taxonFruit = [ 0.75, 1.25, 1.5, 2.5, 0.25, 3 ];
```

This translates the syntax, like so where several of the params are implicit and taken care of by the compiler, the key value that is passed as a param is the parentElementValue and in the function-body what logic needs to be performed on every element of the parentElementValue:-

```
variable newArrayName = array.map(callbackFunction(parentElementvalue, index, childElementValue) => {
	<!-- call back function body logic -->
return parentElementValue * 0. 5;
 });
```
Steps to create the map method:-
- assign all the items of the parent array to variable
- assign the child array to variable 
- assign a call back function to the child array
- write the function  logic in the function body of the call back
- call the function by the variable of the child array

### What does the filter method do?
```array.filter()``` or ```Array.prototype.filter()``` is a call back function that
iterates through original (parent) array. It runs a block of logic each element of the parent array and returns new array (child) with filtered items based on the logic. It performs boolean logic checking if the condition in the function body is true or false with each element and if no items match the test an empty array is returned.  It returns all elements into the new array that meet the strictly true logic performed on the element. It then compiles and coerces the true return of elements in the new array all array elements that do not pass the true test are skipped.

### SYNTAX
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

Steps to create the filter method is exactly the same but the output is different because of the boolean logic check on each element:-
- assign all the items of the parent array to variable
- assign the child array to variable 
- assign a call back function to the child array
- write the function  logic in the function body of the call back
- call the function by the variable of the child array

### What does the reduce method do?
The sort method takes 2 arguments, the start and end index usually described as a & b. The array then is organised in ascending or descending order.

```
const setAges = [ 18, 19, 20, 21, 60, 61, 62 ];
<!-- acending-->
const sortAges = ages.sort((a, b) => {
	a - b;
});
<!-- decending -->
const sortAges = ages.sort((a, b) => {
	b - a;
});
```
This is a little more complex with an object. Written as a forLoop the method that organises a company by its start date in ascending order looks like so:-

```
const sortCompanies = companies.sort(function(company1, company2) {
	if (company1.start > company2.start) {
		return 1;
	} else {
		return -1;
	}
});
```
With ES6 this is foreshortened with an arrow function and a ternery operator

```
const sortCompanies = companies.sort((a, b) => {
	a.start > b.start ? 1 : -1;
});
console.log(sortCompanies);

```

### What does the reduce method do?
The reducer method takes 2 arguments, an accumulator and the current value of the element it is looping over. The accumulator adds the last element looped over to the value of the next element - this could be a number, string - the type does not matter.

For each value in the array for the purpose of reducing the list of items down to a single value.  The reduce function returns the final value returned by the callback function.  If an initialValue is specified the callback is called with the initial value as the first parameter value and the value of the first item in the array as the second parameter value.  On the initial call if no initialValue is specified then the first two parameter values will be the first and second elements of the array.  On every subsequent call the first parameter's value will be whatever the callback returned on the previous call and the second parameter's value will be the next value in the array.

If the callback function needs access to the index of the item being operated on or the entire array they are available as optional parameters.
### SYNTAX
```reduce(callback[, initialValue]) applies callback(accumulator, currentValue[, currentIndex, array])```
 

```
var sum = 0;
for (var n of numbers) sum = sum + n;
sum += n;
console.log(sum);
```
ES6 way to write the same code
```
var addAll = numbers.reduce((accumulator, currentValueOfElement) => {
	return accumulator + currentValueOfElement;
}, 10);
```

You can also write a forLoop and change it
```
const prices = [ 18, 19, 20, 21, 60, 61, 62 ];
let pricesSum = 0;
for (let i = 0; i < prices.length; i++) {
	pricesSum += prices[i];
}
console.log(pricesSum);

const newPriceSum = prices.reduce((newCumulativeValue, elementValue) => (newCumulativeValue += elementValue), 10);
console.log(newPriceSum);
```


### ADDITIONAL READING
[http://matthewodette.com/map-filter-and-fold-in-javascript]
[https://scotch.io/tutorials/4-uses-of-javascripts-arraymap-you-should-know]
[https://medium.com/@zaid.naom/exploring-folds-a-powerful-pattern-of-functional-programming-3036974205c8]

Tutorials
Webdev Simplified:
[https://www.youtube.com/watch?v=R8rmfD9Y5-c]
Traversy Media: 
[https://www.youtube.com/watch?v=rRgD1yVwIvE]
Mosh
[https://www.youtube.com/watch?v=g1C40tDP0Bk]

### DOCUMENTATION

W3 schools [https://www.w3schools.com/jsref/jsref_map.asp]
MDN [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map]