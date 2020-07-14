var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
fruitArray.sort();
// sorted in ascending alphabetical order
// sort is an iterative method as it loops through each item
// the call back then is to sort each item alphabetically
// the syntax is fruitArray.sort(thisObject)
// caps will be sorted first
// sort mutates the original array better to map then sort to get a new array without mutuating old array
console.log(fruitArray);
