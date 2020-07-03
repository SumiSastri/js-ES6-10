// EXAMPLES
// call back function return only strings with "blueberries"
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
var findBlueberries = fruitArray.find(function(fruit) {
	return fruit === 'Blueberries';
});
console.log(findBlueberries);
// Output "blueberries" the string

// NESTED OBJECTS IN ARRAYS
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
var findk_pop = musicCatalog.find((genre) => {
	return genre.genre === 'k-pop';
});
console.log(findk_pop);

// number value
var findLowDownloadPrices = musicCatalog.find((price) => {
	return price.priceOfDownload <= 80;
});
console.log(findLowDownloadPrices);

// boolean value - finds only the first not all
var findBySpotify = musicCatalog.find((onSpotify) => {
	return onSpotify.onSpotify === false;
});
console.log(findBySpotify);
