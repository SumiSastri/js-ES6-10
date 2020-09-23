
## What is prototypal inheritance and the prototype chain?
 
Prototypal inheritance means you can base the functionality of an object based on another object. At the top of the prototype-chain is the object prototype. From this object prototype, everything can be converted into an object. To test this out with the variable, ```const dogName = "Scooby"``` if you log ```this.dogName``` you will get "Scooby" - this is returned from the global object, which is the object prototype.

Documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain]

```object.prototype``` is at the head of the prototype chain. The other 8 prototypes are:-

```array.prototype```/```string.prototype```/```number.prototype```/```boolean.prototype```/```date.prototype```/```function.prototype```/```error.prototype```/```regEx.prototype```

 Prototypes are not to be confused with the primitive / literals:-
"" (empty strings, or strings with values)
9  (a number as a number)
true || false  (as booleans)
{} (empty objects)
[] (empty arrays)
() => or function (){} (as empty functions)
/()/ (empty regEx)

```Math()``` is not on the list, it is a global object and is formed by a global Math constructor. You can assign new Object to a variable ```var car = new Object()``` You can not assign ```Math()``` with the new key word to a variable. They inherit all the properties and methods in the ```Math()``` constructor. To access these properties ```Math.round()``` this refers to the constructor state.

## So what are objects created by the object.prototype?

Documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object]

Objects are a collection of data - strings, booleans, numbers (properties) and functions (methods) that are created by the object prototype. Everything in JavaScript is an object as we have seen above. Each object prototype is a function that creates the other complex data-types - Arrays, Functions, Dates, Errors.

Fundamentally, objects literals, that are created from the object.prototype, are an unordered list of key-value pairs or properties or name-value pairs. Keys/Names of the property they  describe the values they hold. Values can be any data type - strings, numbers, booleans, arrays, objects and functions. Keys and values are separated by colons.  This is the difference between props, prop names and prop values.

```
var dogName ={
   name: "Susanna",
   breed: "Boxer"
} 
<!-- properties - name & breed
property value - boxer
property names - name & breed -->
```

The variety of data types that the object can hold makes them the most versatile of data-types in JavaScript. When a function is called from an object, it is called a method. 

- Props of objects are readable, writable and configurable. 
- They can be changed with the get and set methods
- They also pass on all properties to clones
- Inheritance of the prototype properties is a key feature of properties

Object Syntax:
 Notated as an empty object ```{}``` with curly braces, objects hold props as key-value paris. Each name-value pair ```property:value```  is comma separated. Keys separate the value with a full colon. What identifies the position in the list is the key of the key-value pairs and the ```this``` keyword. The global object prototype therefore has the method ```Object.keys()```

```
{firstName: "Harry" lastName "Styles", singles: ["Meet me in the Hallway","Sign of the Times", "Carolina", "Two Ghosts"], genres: {
    softRock: true, britPop: true, hardRock: false
},  fullName: this.firstName + this.lastName,
firstHit: 2001  }
```
This is the object declaration. It can not be used unless it is assigned to a variable to hold the value. 

Dot notation is used to identify the values of the list items using the variable name and the key of the object.

```
const dog = {
	name: 'Banjo',
	species: 'phyllum cordata',
	weight: 25,
	size: 12,
	eats: [ 'chicken', 'meat', 'bones' ],
	owner: {
		firstName: 'Jack',
		lastName: 'Jones',
		phoneNumber: 12345,
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		}
	},
	dogBmI: function() {
		return this.weight / this.size;
	}
};

```
### Using objects
You can add, update and delete props in an object. 

- Adding props
Using dot notation, a new prop can be added ```dog.favouriteToy = 'rag doll';``` If you log the object again, the new prop will be added. 

- Updating existing props
By using dot notation you can access the the prop and update the value by reassigning the value as you would with a variable ```dog.name = 'Toulouse';```

- Permanantly delete existing props - delete is a key word and should be used sparingly. Once deleted a prop can not be retrieved. It is best practice to reserve this method only for static props not methods in a prop. If used on a predefined JavaScript object that has been encapsulated & instantiated, the application can crash. Like all other methods, it simply requires you to use the delete key word and dot notation, the prop - key and value will be deleted permanently ```delete dog.favouriteToy;```

### CHECKING PROPS
The ```hasOwnProperty``` method checks the props of the object in a strict boolean check returning the value only if one exists. The param checkProp must be passed a string.
```
function checkDog(checkProp) {
	if (dog.hasOwnProperty(checkProp)) {
		return dog[checkProp];
	} else {
		return 'Not a valid property for your dog object';
	}
}

function checkPrimate(checkProp) {
	if (primate.hasOwnProperty(checkProp)) {
	}
}

<!-- note the property must be declared in the param as a string -->
console.log('boolean check checkDog(checkProp) LOGGED TRUE', checkDog('species'));
console.log('boolean check checkDog(checkProp) LOGGED FALSE', checkDog('clown'));

<!-- OUTPUT -->
boolean check checkDog(checkProp) LOGGED TRUE phyllum cordata
boolean check checkDog(checkProp) LOGGED FALSE Not a valid property for your dog object
```

### GETTERS AND SETTERS

## WHAT DOES THE this KEYWORD MEAN?

The ```this``` key word is important in an object because it is an unordered list, with an array the element index provides specific reference.

 The ```this``` key word binds the function and all the props to the object it is pointing to. 

 If you access the fullName property, without (), it will return the function declaration ```function() { return this.firstName + " " + this.lastName; }``` as a literal, proving how the key word ```this``` binds the function declaration to the object in which it is declared in.
 
 The binding of the function happens only at invocation time. So only when we call the function, the ```this``` key word is bound the to object it is assigned to. This makes the function reusable and more flexible. It is also specific and relevant to the object it is being called from.  
 
 Take the objects musician and dog. We have the same props written in both objects. The static props - firstName & lastName, as well as the same function full Name.
 
 They return different values because the ```this``` key word binds them to the objects they are encapsulated in.

 ```
console.log('logs method for full name MUSICIAN', musician.fullName());
console.log('logs method for full name DOG OWNER', dog.owner.fullName());

<!-- OUTPUT -->
logs method for full name MUSICIAN Harry Styles
logs method for full name DOG OWNER Jack Jones
```

Static props binding example:-

```
console.log(dog.owner.firstName, 'logs dog-owner first name - implicit binding of THIS DOG.OWNER');
console.log(musician.firstName, 'logs musician first name - implicit binding of THIS.MUSICIAN');

<!-- OUTPUT -->
Jack logs dog-owner first name - implicit binding of THIS DOG.OWNER
Harry logs musician first name - implicit binding of THIS.MUSICIAN
```

## Objects within objects - the constructor as a blueprint?

You can create duplicates of an object with the constructor method. The constructor method is a blueprint that allows you to creates a duplicate of the object with the ```new``` key word.

The new object has different values for the same keys in the prop.

The first step is to encapsulate all the information in the constructor. The naming convention of a constructor, is with Upppercase.

```
const Dog = function() {
	let name, breed;
};
```
Once the constructor function has been declared - the function returns the variables that are going to be used in the duplicate object, you need to create a new instance of the object with the function params.

```
d1 = new Dog();
d1.name = 'Kaiser';
d1.breed = 'German Shepherd';

d2 = new Dog();
d2.name = 'Ginger';
d2.breed = 'German Shepherd';

console.log(d1);
console.log(d2);
console.log(d1.name, d1.breed);
console.log(d2.name, d2.breed);

<!-- OUTPUT -->
Dog { name: 'Kaiser', breed: 'German Shepherd' }
Dog { name: 'Ginger', breed: 'German Shepherd' }
Kaiser German Shepherd
Ginger German Shepherd
```

The implicit binding of ```this``` to the 2 instances of the dog provides you the 2 different instances of the object with different information. Each instance has its own props with different values but the same keys.

If we log the ```this``` key word in the constructor, we see 2 instances of empty objects and the prototypal inheritance.

```
const Dog = function() {
	let name, breed;
	return console.dir(this);
};
<!-- OUTPUT -->
Dog {}
Dog {}
```
 ## What's the difference between a constructor and a class?

- Objects encapsulate and intantiate one object
- Constructors encapsulate one object with the power to intantiate many objects
- Classes are functions with custom constructors 
Additional Reading:
[https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e]

```
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
```
