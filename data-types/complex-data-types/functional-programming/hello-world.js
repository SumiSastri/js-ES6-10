// Void-empty function with a string
const greeting = () => console.log('Satsarikalji');
console.log('logs greeting', greeting());

// Void-empty function with an object
const getShoppingList = () => ({
	listName: 'FoodShopping',
	regItems: [ 'bread', 'eggs', 'milk', 'sugar', 'tea', 'coffee' ],
	numberOfTripsPerMonth: 3,
	adHocItems: {
		treats: [ 'jam', 'butter', 'bacon' ]
	},
	needCar: false
});
console.log('logs shopping list obj', getShoppingList());

// single param
const sayHello = (name) => {
	return console.log(`Hello ${name}`);
};
sayHello('SriSriRaviShankar');
console.log('sayHello x1', sayHello);

sayHello(greeting());
console.log('sayHello x2', sayHello);

const squareNumber = (number) => number * number;
console.log('sqNumber Output =', squareNumber(100));

// 2 params simple return of args
const add2 = (x, y) => x + y;
console.log('add2 Output =', add2(1, 2));

//  return a conditional

const needsCar = false ? () => console.log('Not required') : () => console.log('This shopping trip needs a car');
needsCar(false);
