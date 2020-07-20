let shoppingList = [ 'bread', 'milk', 'eggs' ];
let numbers = [ 1, 2, 3 ];

let numsAndList = [ ...numbers, ...shoppingList ];

let selectData = [ 'bacon', ...shoppingList, 'butter', 0, ...numbers, 4, 5 ];

console.log('list', shoppingList);
console.log('nums', numbers);
console.log('nums&list', numsAndList);
console.log('selectdata', selectData);
