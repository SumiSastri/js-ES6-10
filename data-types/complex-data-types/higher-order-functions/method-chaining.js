var setAges = [ 18, 19, 20, 21, 60, 61, 62 ];
var setCombinedAges = setAges
	.map((age) => age * 3)
	.sort((a, b) => b - a)
	.filter((seniors) => seniors >= 60)
	.reduce((cumulativeAges, elementValue) => cumulativeAges + elementValue);

// console.log(setCombinedAges);
// COMMENT OUT EACH METHOD AND ADD THE LOG AFTER EACH METHOD - OUTPUTS BELOW
// map output [54, 57, 60, 63, 180, 183, 186]
// filter output  [60, 63, 180, 183, 186]
// sort output [[186, 183, 180, 63, 60, 57, 54]]
// reduce output 672

// ascending
var sortAgesAscending = setAges.sort((a, b) => {
	a - b;
});

// decending
var sortAgesDescending = setAges.sort((a, b) => {
	b - a;
});

console.log(setAges, 'ages array');
console.log(sortAgesAscending, 'ages ascending');
console.log(sortAgesDescending, 'ages descending');
