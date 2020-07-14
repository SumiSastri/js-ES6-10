var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];

// Copy, push and unshift all add or copy items to of an array

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
