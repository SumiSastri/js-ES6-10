
THE PROTOTYPE CHAIN

// object.prototype is at the head of the prototype chain
// array.prototype is the constructor function in javascript for arrays
// the  9 built-in constructors in the prototype chain are
// the js prototypes are immutable

// Object(), Array(), String(), Number(), 
// Boolean(), Date(), Function(), Error(), RegExp()

// the primitive / literals are 
"" (empty strings)
9  (a number as a number)
true || false  (as booleans)
{} (empty objects)
[] (empty arrays)
() => or function (){} (as empty functions)
/()/ (empty regEx)


// Math() is not on the list, it is a global object
// you can assign new Object to a variable var car = new Object()
// you can not assign Math with the new key word to a variable

// they inherit all the properties and methods in the constructor
// to access these properties - this refers to the constructor state
