// Reduce iterates every element, cumulatively performs the logic to each element & returns ONE CUMULATIVE VALUE
var numbers = [ 1, 5, 7, 12, 10, 2, 6 ];
// original value - initial value modifies initial value cumulatively
var sum = 0;
for (var n of numbers) sum = sum + n;
sum += n;
console.log(numbers, 'numbers array');
console.log(sum, 'cummulative sum ');

var addAll = numbers.reduce((accumulator, currentValueOfElement) => {
	console.log(`${accumulator} accValue adder ${currentValueOfElement} elemValue`);
	return accumulator + currentValueOfElement;
}, 3);
console.log(addAll, 'addAll cumulative, starting from initial value of 3');
// this is the initial value as the second arg - used in React Hooks, useEffect Hook

const multiplyAll = numbers.reduce((accValue, elemValue) => {
	console.log(`${accValue} accValue multiplier ${elemValue} elemValue `);
	return accValue * elemValue;
}, 5);
console.log(multiplyAll, 'multiply cumulative, starting from initial value of 5');

const divideAll = numbers.reduce((accValue, elemValue) => {
	console.log(`${accValue} accValue divider ${elemValue} elemValue `);
	return accValue / elemValue;
}, 50);
console.log(divideAll, 'divide cumulative, starting from initial value of 50');

const prices = [ 62, 0, 18, 19, 50, 20, 21, 60, 61, 8 ];
const priceSum = prices.reduce((sum, elementValue) => (sum += elementValue), 20);
const updatedPriceSum = prices.reduce((sum, elementValue) => (sum += elementValue), 10);

console.log(prices, 'pricesArray');
console.log(priceSum, 'priceSum initial value 20');
console.log(updatedPriceSum, 'upatedPriceSum initial value 10');

const companies = [
	{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
	{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

const totalYears = companies.reduce(
	(cumulativeValue, elementValue) => cumulativeValue + (elementValue.end - elementValue.start),
	10
);
console.log(totalYears, 'Logs cumulative total years of all employees');
