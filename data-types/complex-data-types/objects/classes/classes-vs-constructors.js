// EXAMPLE
class Vehicle {
	constructor(make, model, color, numberOfDoors, fullTank, distanceOnFullTank) {
		this.make = make;
		this.model = model;
		this.color = color;
		this.numberOfDoors = numberOfDoors;
		this.fullTank = fullTank;
		this.distanceOnFullTank = distanceOnFullTank;
	}

	fuelConsumption() {
		return this.fullTank / this.distanceOnFullTank;
	}
}

const fastCar1 = new Vehicle('Maserati', 'GranCabrio A6 1500', 'red', 2, 20, 125);
const familyCar1 = new Vehicle('Audi', '5 series', ' blue', 5, 50, 150);

console.log('logs constructor (Vehicle) for instance of FAST CAR', fastCar1);
console.log('logs constructor (Vehicle) for instance of FAMILY CAR', familyCar1);

console.log(
	'logs fuel consumption method of constructor(Vehicle) for instance of FAST CAR',
	fastCar1.fuelConsumption()
);
console.log(
	'logs fuel consumption method of constructor(Vehicle) for instance of FAMILY CAR',
	familyCar1.fuelConsumption()
);

// you CAN NOT new property to an existing object constructor like so
// fastCar1.bootSize = bootSize;
// familyCar1.electricOrFuel = electricOrFuel;
// you have to add it to the class Vehicle

// SCOPE SAFETY UNINTENDED ERRORS

// Used because objects will be created with the same basic structure
// New objects that do not have the inherited properties will throw errors with invalid inputs

// class variables are accessible by all functions and can be updated by all functions
// functions know nothing about each other and their variables are not accessible to each other

// SYNTAX

// word class used and upper case for the name to distinguish it from other functions
class Player {
	//  constructor function the properties are the params of the function
	constructor(property1, property2, property3) {
		// they are accessed by this.property and assigned temporarily to a value that is overwritten
		(this.property1 = property1), (this.property2 = property2), (this.property3 = property3);
	}
	get() {}
	set() {}
}
// then temporarily stored in a variable with the new name the name of the class as a property
// upper case maintained to show it is a class function
var player = new Player();
// if you do not use the new word, you are calling a function without it's return statement
// without the new word the error you will get is the object is the Window
// this function is called an instance of the constructor
// the process of assigning a class to variable is called instantiation

// ADDTIONAL READING
// https://css-tricks.com/understanding-javascript-constructors/
