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
