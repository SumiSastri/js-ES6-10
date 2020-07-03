// EXAMPLE 1

var arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];
let evenNumberAgesArray = [];
for (var i = 0; i < arrayOfAges.length; i++) {
	if (arrayOfAges[i] % 2 === 0) evenNumberAgesArray.push(arrayOfAges[i]);
}
// OUTPUT
evenNumberAgesArray(7)[(10, 18, 20, 30, 50, 60, 80)];

// EXAMPLE 2
evenNumberAgesArray;
// the call back function is
// is age below 18 (return true values only)
var arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];
let checkAdult = [];
for (var i = 0; i < arrayOfAges.length; i++) {
	if (arrayOfAges[i] <= 18) checkAdult.push(arrayOfAges[i]);
}
checkAdult(4)[(5, 10, 15, 18)];

// ECMA 6 notation
// baked in are function.prototype.bind() & Array.prototype.push()
// the call back function is
// is age less than 18 (return true only)
var arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];
let checkAdult = arrayOfAges.filter((value) => {
	return value <= 18;
});
checkAdult(4)[(5, 10, 15, 18)];

// EXAMPLE 3

// the call back function is
// is age more than 21 (return true only)

var arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];
let votingAge = arrayOfAges.filter((moreThan21) => {
	return moreThan21 >= 21;
});
votingAge;

// EXAMPLE 4
// the call back function is
// is the word length more than 6 (return true only)

var words = [ 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ];
const result = words.filter((oldwords) => oldwords.length > 6);
console.log(result);

var musicCatalog = [
	{
		genre: 'hip-hop',
		language: 'french',
		artists: [ 'maitre-gims', "sexion-d'assaut", 'tsr-crew', 'flavien-berger' ],
		onSpotify: false,
		priceOfDownload: 50
	},

	{
		genre: 'rap',
		language: 'english',
		artists: [ 'woo-tang-warriors', 'puff-daddy', 'beastie-boys' ],
		onSpotify: false,
		priceOfDownload: 80
	},
	{
		genre: 'k-pop',
		language: 'korean',
		artists: [ 'black-pink', 'psy', 'bgt' ],
		onSpotify: true,
		priceOfDownload: 95
	},
	{
		genre: 'solo-pop',
		language: 'english',
		artists: [ 'pink', 'cindy-lauper', 'madonna' ],
		onSpotify: false,
		priceOfDownload: 100
	}
];
// string value
var filteredBands = musicCatalog.filter((language) => {
	return language.language === 'english';
});
console.log(filteredBands);
// number value
var filterDownloadPrice = musicCatalog.filter((price) => {
	return price.priceOfDownload <= 100;
});
console.log(filterDownloadPrice);

// boolean value - double negative
var filterBySpotify = musicCatalog.filter((onSpotify) => {
	return onSpotify.onSpotify !== false;
});
console.log(filterBySpotify);
// boolean value
var filterBySpotify = musicCatalog.filter((onSpotify) => {
	return onSpotify.onSpotify === true;
});
console.log(filterBySpotify);

//  what conditions can you put on a nested array to filter? Research a bit more
