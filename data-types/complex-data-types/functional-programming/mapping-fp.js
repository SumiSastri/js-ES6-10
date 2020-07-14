// Array
const priceOfFruit = [ 1.5, 2.5, 3, 5, 0.5, 6 ];
// function declaration
const calculateTaxOnFruit = (prices) => prices * 0.5;
// function called as param of map
const taxonFruit = priceOfFruit.map(calculateTaxOnFruit);

console.log(priceOfFruit, 'array');
console.log(calculateTaxOnFruit, 'function declaration');
console.log(taxonFruit, 'function call taxOnFruit in a map call back param');
