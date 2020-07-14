// Array
const priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
// function declaration
const calculateTaxOnFruit = (prices) => prices * 0.5;
// function called as param of map
const taxonFruit = priceOfFruit.map(calculateTaxOnFruit);

console.log(priceOfFruit, 'array');
console.log(calculateTaxOnFruit, 'function declaration');
console.log(taxonFruit, 'function call taxOnFruit in a map call back param');

//  recreate map function - takes 2 args, an array and callback function - array.reduce
//  you are spreading the new array with all the values of the old array

const map = (array, callBackFunction) =>
	array.reduce((accValue, elemValue) => [ ...accValue, callBackFunction(elemValue) ], []);

console.log('map test multiply by 10', map([ 1, 2, 3 ], (elemValue) => elemValue * 10));
console.log('map test change to upper case', map([ 'a', 'b', 'c' ], (elemValue) => elemValue.toUpperCase()));
