// REPLACE switch with an object:1:56:05

function phoneticLookup(value) {
	var result = '';
	switch (value) {
		case 'alpha':
			result = 'A';
			break;
		case 'bravo':
			result = 'B';
			break;
		case 'charlie':
			result = 'C';
			break;
		case 'delta':
			result = 'D';
			break;
		case 'echo':
			result = 'E';
			break;
		case 'fox-trot':
			result = 'F';
	}
	return result;
}
console.log(phoneticLookup('alpha'), 'logs alpha from switch statement');
// Replace with an object

function phoneticLookup(values) {
	var result = '';
	var lookUpValues = {
		alpha: 'A',
		bravo: 'B',
		charlie: 'C',
		delta: 'D',
		echo: 'E',
		foxtrot: 'F'
	};
	result = lookUpValues[values];
	return result;
}
console.log(phoneticLookup('alpha'), ' logs alpha from an object');
// NOTE: If you want to write fox-trot
// the properties in the object must be strings
