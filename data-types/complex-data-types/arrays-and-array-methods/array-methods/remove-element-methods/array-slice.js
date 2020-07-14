// SLICE removes one item from the array, returns a new array with one item
// NOT to be confused with splice which removes the item from the array

var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
// slice does not add or subtract items from the original array
// this will return an array of 1 item which is Apples

fruitArray.slice(1, 2);
// this returns oranges (if you use splice it removes oranges)
fruitArray.slice(2, 3);
// this returns kiwi (splice removes permanantly kiwi)

fruitArray.slice(2, 6);
// the args of an array are start index and end index
// the start is index 2 and you will get Blueberries
// the end is index 6 which is excluded it means upto but not including 6
// So you will get pineapples as the last item in the array returned
