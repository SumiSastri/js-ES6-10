### Searching and finding data in Arrays In JavaScript

Iterating over arrays to find data is one of the most common tasks that you will perform as a developer. While filter helps you find several items matching search criteria, the ```array.find()``` method allows you to find a single item based on a callback code block.Most find methods are looking for the array key, value or both and use the values, keys iterators as params.

```
array.find()
Array.prototype.find()

```
Syntax
```
array.findIndex(function(currentValue, index, arr), thisValue)
arr.findIndex(callback(element[, index[, array]])[, thisArg])
```

In the same example as filter, the syntax does not change but the boolean search is conducted to find only the FIRST instance of the the search criteria. If you want more than just that first instance, the ```array.filter()``` method is far more suitable. There is only one k-pop band so this works.

```
var findk_pop = musicCatalog.find((genre) => {
	return genre.genre === "k-pop"
});
console.log(findk_pop);
```
But if you want to find all the prices under 80 in this method called, you will  only get the first although there are 2 sets of data with download prices under 80.

```
var findLowDownloadPrices = musicCatalog.find((price) => {
	return price.priceOfDownload <= 80;
});
console.log(findLowDownloadPrices);
```
Similarly with all the find methods, only the first item that matches the criteria is returned. The other find methods, finds the array element by its position in the index of the data set.

```
array.indexOf();
Array.prototype.indexOf();
array.findIndex()
Array.prototype.findIndex()
array.lastIndexOf();
Array.prototype.lastIndexOf()
```
All of these expect an exact position in the index.
