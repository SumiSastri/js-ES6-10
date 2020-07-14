// Filter iterates over data, performs boolean logic ONLY returns true elements, skips over false and returns empty if none true
// filter also reduces the run time of code

const arrayOfAges = [ 5, 10, 15, 18, 20, 23, 25, 30, 45, 50, 55, 60, 65, 67, 80 ];

// EXAMPLE 1
let evenNumberAgesArray = [];
for (var i = 0; i < arrayOfAges.length; i++) {
	if (arrayOfAges[i] % 2 === 0) evenNumberAgesArray.push(arrayOfAges[i]);
}
// OUTPUT
console.log('evenNumberAges', evenNumberAgesArray);

// EXAMPLE 2
// is age below 18 (return true values only)
let checkIfAdult = [];
for (var i = 0; i < arrayOfAges.length; i++) {
	if (arrayOfAges[i] <= 18) checkIfAdult.push(arrayOfAges[i]);
}
console.log('checkIfAdult', checkIfAdult);

// ECMA 6 notation
// baked in are function.prototype.bind() & Array.prototype.push()
// the call back function is the value is being bound to arrayOfAges.filter(())
// is age less than 18 (return true only)
let checkAdult = arrayOfAges.filter((age) => age <= 18);
console.log('checkadult', checkAdult);

// EXAMPLE 3
// the call back function is
// is age more than 21 (return true only)

let votingAge = arrayOfAges.filter((moreThan21) => {
	return moreThan21 >= 21;
});
votingAge;

// EXAMPLE 4
// the call back function is
// is the word length more than 6 (return true only)

var words = [ 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ];
const result = words.filter((requiredWords) => requiredWords.length > 6);
console.log('requiredWords', result);

const wordLength = words.filter((shortWords) => shortWords.length < 6);
console.log('worldLength', wordLength);

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
