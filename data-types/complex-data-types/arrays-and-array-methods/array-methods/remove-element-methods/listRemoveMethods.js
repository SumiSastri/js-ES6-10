// POP, SHIFT, SLICE & SPLICE - removing items
var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];

//pop removes sausages from the array at the end
shoppingList1.pop('sausages');

//shift removes bread from the array in the beginning
shoppingList1.shift('bread');

// SLICE AND SPLICE
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
// slice does not add or subtract items from the original array
// this will return an array of 1 item which is Apples
// NOT to be confused with splice which removes the item from the array
fruitArray.slice(1, 2);
// this returns oranges (if you use splice it removes oranges)
fruitArray.slice(2, 3);
// this returns kiwi (splice removes permanantly kiwi)
fruitArray.slice(4, 5);
// this returns apples to kiwi
fruitArray.slice(0, 4);
//  the args of an array are start index and end index
// the start is index 2 and you will get Blueberries
// the end is index 6 which is excluded it means upto but not including 6
// So you will get pineapples as the last item in the array returned
fruitArray.slice(2, 6);
