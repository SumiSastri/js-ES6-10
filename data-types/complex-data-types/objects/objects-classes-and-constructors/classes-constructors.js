// objects create one object
// constructors create mutliple objects

// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e

// DEFINITION
// classes are functions with custom constructors
// the constructor is a blue print for new objects

// EXAMPLE
class Vehicle9 {
	constructor(make, model, color, numberOfDoors, fullTank, distanceOnFullTank){ 
		this.make = make;
		this.model = model;
		this.color = color;
		this.numberOfDoors = numberOfDoors;
		this.fullTank = fullTank;
		this.distanceOnFullTank = distanceOnFullTank;
	    }

			fuelConsumption() {
			  return this.fullTank / this.distanceOnFullTank 
		  	}
}
// HOW to use the constructor
// new object must be assigned to a new variable
// or instantiated

var fastCar = new Vehicle9 ("Maserati", "GranCabrio A6 1500", "red", 2, 20 , 125)

// you can modify values of the properites the new object fastCar
// it will only change fastCar


// you can create another prototype
//  familyCar which will not be impacted by the changes made to fastCar
var familyCar = newVehicle9 ("Audi", "5 series", " blue", 5, 50, 150 )


// you CAN NOT new property to an existing object constructor like so
    fastCar.bootSize = bootSize;
    familyCar.electricOrFuel = electricOrFuel;
// you have to add it to the class Vehicle9



// SCOPE SAFETY UNINTENDED ERRORS

// Used because objects will be created with the same basic structure
// New objects that do not have the inherited properties will throw errors with invalid inputs

// class variables are accessible by all functions and can be updated by all functions
// functions know nothing about each other and their variables are not accessible to each other

// WHAT IS THIS?

// this refers to the object that owns the code
// a constructor owns the code and the code points to this (the constructor function)
// a function in general points to the parent - Window - the owner of the code
// 

// SYNTAX

// word class used and upper case for the name to distinguish it from other functions
class Player {
	//  constructor function the properties are the params of the function
	constructor (property1, property2, property3)
	// they are accessed by this.property and assigned temporarily to a value that is overwritten
	   this.property1 = property1;
	 }
	
	 function get(){

	 }
	 function set(){

	 }  
}
// then temporarily stored in a variable with the new name the name of the class as a property
// upper case maintained to show it is a class function
var player = new Player()
// if you do not use the new word, you are calling a function without it's return statement
// without the new word the error you will get is the object is the Window
// this function is called an instance of the constructor
// the process of assigning a class to variable is called instantiation








// ADDTIONAL READING
// https://css-tricks.com/understanding-javascript-constructors/


fastCar.fuelConsumption()

