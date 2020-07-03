var setAges = [ 18, 19, 20, 21, 60, 61, 62 ];
var setCombinedAges = setAges
	.map((age) => age * 3)
	.sort((a, b) => b - a)
	.filter((seniors) => seniors >= 60)
	.reduce((cumulativeAges, elementValue) => cumulativeAges + elementValue);

// console.log(setCombinedAges);
// map output [54, 57, 60, 63, 180, 183, 186]
// filter output  [60, 63, 180, 183, 186]
// sort output [[186, 183, 180, 63, 60, 57, 54]]
// reduce output 672

// ascending
var sortAges = ages.sort((a, b) => {
	a - b;
});
// decending
var sortAges = ages.sort((a, b) => {
	b - a;
});
