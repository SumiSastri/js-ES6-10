## What are objects?

Definition: Collection of data - strings, booleans, numbers (properties) and functions (methods)

Objects are an unordered list of key-value pairs or properties or name-value pairs. Keys/Names of the property they  describe the values they hold. Values can be any data type - strings, numbers, booleans, arrays, objects and functions. Keys and values are separated by colons.  This is the difference between props, prop names and prop values.

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

In JavaScript all complex data-types are considered to be objects - dates, Math methods, functions, reg-ex's, arrays. Therefore all functions are methods and that is why we see the terms used interchangeably. Arrays and functions in JavaScript are created by prototypes from the global object. This is why arrays have array methods and in functions, the return statement is a method.

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

Everything can be converted into an object with prototypal inheritance including primitive data types.
```var number = new Number()```, variables are also objects ```var dogName = "Scooby"``` if you log ```this.dogName``` you will get "Scooby" - this is returned from the global object.

 