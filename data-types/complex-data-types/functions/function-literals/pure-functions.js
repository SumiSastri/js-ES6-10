// pure functions - produce same result with no side effects or dependencies

//convert celcius to farenheit

function toCentigrade(fromFarenheit) {
	return 5 / 9 * (fromFarenheit - 32);
}
convertCentigrade();

//  to use in HTML element

document.getElementById('temperature-in-centigrate').innerHTML = toCelsius;

// convert stones and pounds to Kilos

function stonesAndPoundsToKilograms(stones, pounds) {
	const totalStones = stones * 14 + pounds;
	const totalKilograms = totalStones * 0.453592;
	return totalKilograms;
}
stonesAndPoundsToKilograms();

// product price once tax has been added
function priceAfterTax(productPrice, tax) {
	return productPrice * tax + productPrice;
}

priceAfterTax(15, 0.2);

// IMPURE function adds work to the browser and slows efficiency

const tax = 20;
function calculateTax(productPrice) {
	return productPrice * (tax / 100) + productPrice;
}
calculateTax();

// check age

const checkAge = function(age) {
	const minimum = 21;
	return age >= minimum;
};

checkAge(18);

// KODIRI 1:08

{
	// function that is written is stored in memory does nothing
	function functionName(numbers) {
		return numbers.map((number) => number * 2);
	}
	// invoke the function - call it back from memory and pass the arguments
	// then the function is executed - or the code block runs on the invocation
	functionName([ 0, 1, 2, 3, 4 ]);
}
