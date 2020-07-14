var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];
// change the items of the array like so
shoppingList1[0] = 'onions';
shoppingList1[3] = 'garlic';
shoppingList1.length();
//length tells you there are 6 items in the array

shoppingList1.length = 5;
// this will reduce the items to 5 and remove coffee
shoppingList1.length = 0;
//  this will empty the array and you will have no items in the array
shoppingList1.length = 7;
// this will log one additional empty item to the array

shoppingList1.toString();
// returns every item as a string

// COPY, PUSH AND UNSHIFT COPY AND ADD ITEMS I
shoppingList1.copyWithin();
// duplicates the array

//push adds all these items to the end of the array
shoppingList1.push('butter', 'jam', 'marmalade', 'sausages');

// push with a for loop adds all the numbers to the array
var scoreTenPoints = [];
for (var i = 0; i < 10; i += 2) {
	scoreTenPoints.push(i);
}
console.log(scoreTenPoints);
// output is array of 5 numbers - [0, 2, 4, 6, 8]

//adds hashbrowns to the array in the beginning
shoppingList1.unshift('hashbrowns');

// POP, SHIFT, SLICE & SPLICE - removing items

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

// SORT & REVERSE ARRANGE ITEMS
var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
fruitArray.sort();
// sorted in ascending alphabetical order
// sort is an iterative method as it loops through each item
// the call back then is to sort each item alphabetically
// the syntax is fruitArray.sort(thisObject)
// caps will be sorted first
// it is not a perfect method and may need a custom function

fruitArray.reverse();
// sorted in descending alphabetical order

// CONCAT & JOIN BEHAVE VERY DIFFERENTLY

array.concat();
// array.concat(param1, param2, param3) returns new array
// the new array has both lists
// the original array is not mofied
var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];
var shoppingList2 = [ 'porridge', 'beans', 'croissants', 'orange-juice' ];
var shoppingList3 = [ 'iddli', 'vada', 'sambar', 'bisibelebath' ];
var concatShoppingLists = shoppingList1.concat(shoppingList2, shoppingList3);
console.log(concatShoppingLists);
// Output ["bread", "milk", "bacon", "eggs", "coffee", "porridge", "beans",
//"croissants", "orange-juice", "iddli", "vada", "sambar", "bisibelebath"]

array.join();
// joins all elements of an array as a string
var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];
var shoppingList2 = [ 'porridge', 'beans', 'croissants', 'orange-juice' ];
var shoppingList3 = [ 'iddli', 'vada', 'sambar', 'bisibelebath' ];
var joinShoppingLists = shoppingList1.join(shoppingList2, shoppingList3);
console.log(joinShoppingLists);
// Output
// breadporridge,beans,croissants,orange-juicemilkporridge,
// beans,croissants,orange-juicebaconporridge,beans,croissants,orange-juiceeggsporridge,
// beans,croissants,orange-juicecoffee

// UDEMY PRACTICE EXCERCISE
var array = [ 'Banana', 'Apples', 'Oranges', 'Blueberries' ];

var array = [ 'Banana', 'Apples', 'Oranges', 'Blueberries' ];
// 1. Remove the Banana from the array.
array.shift('Banana');

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push('Kiwi');

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order.
array.reverse();

var fruitArray = [ 'Apples', 'Oranges', 'Blueberries', 'Kiwi', 'Mangoes', 'Pineapples', 'Grapes' ];
fruitArray.push('Apples', 'Oranges', 'Blueberries', 'Kiwi');
fuitArray.pop('kiwi');
