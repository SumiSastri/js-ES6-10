// SLICE removes one item from the array, returns a new array with one item
// NOT to be confused with splice which removes the item from the array

var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
// slice does not add or subtract items from the original array

fruitArray.slice();
console.log(fruitArray, 'no index');
// returns the whole array as the inbuilt args are start index and end index

fruitArray.slice(1, 2);
console.log(fruitArray, 'sliced 1,2');
// this will return an array of 1 item as it slices start index1 and ends index2

fruitArray.slice(2, 5);
console.log(fruitArray, 'sliced 2,5');
// this will return an array of the section requested start index2 end index5

console.log(fruitArray, ' check if mutated');
