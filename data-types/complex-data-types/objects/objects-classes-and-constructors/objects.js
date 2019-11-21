// OBJECTS REV starts 1:49

// In js everything is an object - dates, Math methods, functions, reg-ex's, arrays
// Definition: Collection of data - strings, booleans, numbers (properties) and functions (methods)

// Different data type from arrays
// unlike arrays they are UNORDERED collections therefore need the this key word to access them

// primitives can become objects if defined with the new key word
var number = new Number()

// variables as objects

var dogName = "Scooby"
// this.dogName will return "Scooby"

// properties, values and inheritance
var dogName ={
   name: "Susanna",
   breed: "Boxer"
} 
// properties - name & breed
// property value - boxer
// property names - name & breed
// other properties of objects are they are readable, writable and configurable
// they can be changed with the get and set methods
// they also pass on all properties to clones
// so inheritance of the prototype properties is a key feature of properties
// they are name-value pairs, the name is the property and after the colon is the value
// Each property:value is comma separated and notated as an empty object {}
// properties can be strings, numbers, functions, arrays, or objects

// methods versus properties
var ownerName = {
      firstName: "Jack",
      lastName: "Jones",
      phoneNumber: 12345
      fullName: function(){
         return this.firstName + this.lastName;
      }

// methods are the functions within an object, they are not properties
// fullName() is a method
// If you access the fullName property, without (), it will return the function definition like so
// function() { return this.firstName + " " + this.lastName; }


// Creating objects
// Create an object literal by defining and initializing a variable 1:51
var dog = {
   name: "Banjo",
   species: "phyllum cordata",
   weight: 25,
   size: 12,
   eats: ["chicken", "meat", "bones"],
   owner: {
      firstName: "Jack",
      lastName: "Jones",
      phoneNumber: 12345
      fullName: function(){
         return this.firstName + this.lastName;
      }
   },
   dogBmi: function() {
      return this.weight / this.size
   },
}

// An object can also be created with the new key word 
// (but are different from constructors which have classes?)
var dog = new Object();
dog.name = "Kaiser";
dog.species = "canine";
dog.age = 5;
dog.owner = "blue";

// ACCESS - dot notation
// you access the object, the property and its value
dog.name
consolelog(dog.name)
// returns "Kaiser"

//ACCESS WITH BRACKET NOTATION and assign to variable
// note the square brackets must notate the property with quotes
var speciesValue = dog["species"]

// ACCESS METHODS OF AN OBJECT

var dogBmiValue = dog.dogBmi()
console.log (dogBmi())
// accessing methods in an object 

//  ADD VALUES (mutablity)
dog.favouriteToy = "rag doll"

// CHANGE VALUES (mutability)
dog.name = "Toulouse"
dog[name] = "Kaiser"

// DELETE VALUES
// delete is a key word  
// used to delete properties and values of a property

delete dog.favouriteToy

// ONCE DELETED property and value can not be retrieved
// it is good for PERMANENT deletes on objects, not functions or variables

// The delete operator should not be used on predefined JavaScript object properties. 
// It can crash your application. WHAT DOES THIS MEAN?


// THIS, the this key word in properties

var dog = {
   name: "Banjo",
   species: "phyllum cordata",
   weight: 25,
   size: 12,
   eats: ["chicken", "meat", "bones"],
   owner: {
      firstName: "Jack",
      lastName: "Jones",
      phoneNumber: 12345
      fullName: function(){
         return this.firstName + this.lastName;
      }
   },
   dogBmi: function() {
      return this.weight / this.size
   },
}

//  this.firstName points to the owner
//  this.weight points to the dog





