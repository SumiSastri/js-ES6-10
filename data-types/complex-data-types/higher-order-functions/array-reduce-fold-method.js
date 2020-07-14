var numbers = [ 1, 2, 3, 4 ];
var sum = 0;
for (var n of numbers) sum = sum + n;
sum += n;
console.log(sum);

var addAll = numbers.reduce((accumulator, currentValueOfElement) => {
	return accumulator + currentValueOfElement;
}, 10);

const prices = [ 18, 19, 20, 21, 60, 61, 62 ];
let pricesSum = 0;
for (let i = 0; i <= 60; i++) {
	pricesSum += prices[i];
}
console.log(pricesSum);
console.log(prices);

const prices = [ 18, 19, 20, 21, 60, 61, 62 ];
let pricesSum = 0;
for (let i = 0; i < prices.length; i++) {
	pricesSum += prices[i];
}
console.log(pricesSum);

const newPriceSum = prices.reduce((sum, elementValue) => (sum += elementValue), 10);
console.log(newPriceSum);

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
console.log(totalYears);
