// SPLICE - this is a permanent delete method

// NOT to be confused with slice which returns an array with 1 item
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];

fruitArray.splice(1, 2);
// (removes oranges)
fruitArray.splice(2, 3);
// (removes permanantly kiwi)
