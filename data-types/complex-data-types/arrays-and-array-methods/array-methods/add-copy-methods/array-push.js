var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];

//push adds all these items to the end of the array
shoppingList1.push('butter', 'jam', 'marmalade', 'sausages');

// push with a for loop adds all the numbers to the array
var scoreTenPoints = [];
for (var i = 0; i < 10; i += 2) {
	scoreTenPoints.push(i);
}
console.log(scoreTenPoints);
// output is array of 5 numbers - [0, 2, 4, 6, 8]