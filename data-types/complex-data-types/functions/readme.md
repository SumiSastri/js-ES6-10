## What are functions?

Functions are objects with logic in the function body. Functions are created by the ```function.prototype``` - which is a function with methods. Documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function]

Therefore all functions, as instances of the ```function.prototype()``` are methods and that is why we see the terms used interchangeably.  The return statement is a method of the ```function.protoype```

The function body are a series of logical statements for the code block to perform. It is therefore a block of code designed to peform a particular task. It makes programming modular and scalable. Functions in other languages are called subroutines or procedures. Data types that a function can mutate are
 - Primitives - strings, numbers as well as complex-data-types
 - Arrays and Objects

Mutation happens with the use of conditionals and boolean evaluation. As a function is an object under the hood it is performing a call, apply and bind method written to the global function prototype.

## What is a function statement?

Function statements are the series of statements or logical blocks written into the function body for the code to be executed. Programs are a list of steps/ instructions/ protocols that the computer needs to follow to execute code. The function body provides them with these steps. These steps are called statements and with js-html-css the browser parses these statments to execute the code block. Statements are executed one by one in order of the way they are called in the call-stack. The semicolon in js tells the browser one statement is over and to execute the next, syntax also indicates to the browser's inbuilt JavaScript engines how to deal with the code written.

## Steps to create and use a function

1. Function declaration 

There are 2 types of declaration - anonymous and named. The purpose of the declaration is to store the temporary value of the function logic. When you log such a function, you will get the function name and the function prototype declared. Function declaration makes the function available to your programme. When the function name is optional it is called an anyonmous function.

Syntax:
As seen below should name the function, have named or implicit parameters - parameter args act like local variables. They are only available to the function that they are defined in. This known as function scope. Params give the function the ingredients that make them more flexible.Params are comma separated and enclosed in parenthesis. If they hold an array or object, the square brackets and curly braces are used inside the parenthesis. Params are not essential, empty-void functions that do not return anything are also possible. 

The function body, is the series of statements, instructions or subprocedures that you want the code-block to follow.

The function body must explicitly or implicitly return something. The return statement is read by browsers and indicate to browsers that this is when the code block stops executing. 

```
function nameOfFunction(param1, param2) {
 return functionBody
}
```
The ```return()``` method in a function is a method, as a function is an object. The return method in turn is a function, therefore return statements can return functions.

Therefore it can return a series of comma-separated params
```
function celciusConvertor(farenheit) {
	return console.log(farenheit), console.log(this), 5 / 9 * (farenheit - 32), console.log(arguments);
}

console.log('traditional invocation', celciusConvertor(100));
```
You will get the global object when you log ```this``` and 2 arguments in an array-like object ```[Arguments] {'0': 100}``` - where 0 is the object key and 100 is its value. This is why you can use the ```Object.keys()``` method, as the object that is being referred to is the global object and all its methods.

2. Function call or invocation.

For a function to be used, it needs to be called, under the hood in ES-5 calling is a method performed on the function object. The function calls the declared function with the arguements performed by the params of the function body. Functions need to be explicitly called or invoked to reterieve the value returned from the block of code. Functions can be called anytime in the code block - in the console by developers to check code or by the end-user when they clicks a button in a front-end application.

The difference between the use of the word call and invoke is calling is only for named functions, invocation is for anonymous functions. Calling a function in the call-stack involves calling the args/ params and the ```this``` key word.

Calling a function stops the execution of the function.

**Four ways to call/ invoke functions**

i) Traditional call/ invocation

```
function celciusConvertor(farenheit) {
	return 5 / 9 * (farenheit - 32);
}
console.log(celciusConvertor, 'function declaration');
console.log('traditional invocation', celciusConvertor(77));
```

Here we see the function invoked in the traditional method. The ```this``` key word is bound to the global window object.

ii)  As a method - method invocation

As a function within an object, the functions written within the objects are called methods. They are always anonymous functions because the key-value pair notation of object means that the key is the identifier and the value is the method declared. This is more flexible and the outcome of the binding of the this key word to the object it is pointing to makes the functions more reusable.

```
const ownerName = {
	firstName: 'Jack',
	lastName: 'Jones',
	phoneNumber: 12345,
	fullName: function(firstName, lastName) {
		return (
			console.log(this, 'logs this - which is the object not the global object'),
			console.log(arguments, 'logs args'),
			console.log(this.firstName + this.lastName, 'logs names as set by the object literal'),
			console.log(this.phoneNumber, 'identifies this as the object key-value pair'),
			this.firstName + this.lastName
		);
	}
};

console.log(ownerName, 'object definition returned not the global object');
console.log(ownerName.fullName('Albert', 'Pinto'));
```
Function is invoked or called using the object dot-notation and the binding of the ```this``` key-word happens at invocation time. This is a flexible and extensible programming technique. It makes the ```this``` arguement more relevant and reusable.

iii) In a constructor - constructor invocation

Constructing an object in an object is construction, the constructor that creates the new object does so by the use of the ```new``` key word. All the methods defined in  the constructor can be called in each instance of the new objects created.

Constructors are anonymous functions that return new objects.  The function creates a new instance of the object that has been encapsulated and assigned to a variable. 

```
<!-- function declaration in the encapsulation -->
const Dog = function() {
	let name, breed;
	return console.dir(this);
};

<!-- Invocation of the function as a constructor with the new key word  -->
d1 = new Dog();
d1.name = 'Kaiser';
d1.breed = 'German Shepherd';

d2 = new Dog();
d2.name = 'Ginger';
d2.breed = 'German Shepherd';

console.dir(d1);
console.log(d2);
console.log(d1.name, d1.breed);
console.log(d2.name, d2.breed);
```
The ```this``` key word binds the function to the object and therefore on calling the function the output is different for both intances of the object created by the constructor. A more detailed description is in the objects section.

```
Dog { name: 'Kaiser', breed: 'German Shepherd' }
Dog { name: 'Ginger', breed: 'German Shepherd' }
Kaiser German Shepherd
Ginger German Shepherd
```

iv) With the call, apply and bind methods in classes 

**INDIRECT INVOCATION**

3. Function apply 

The logic that has been called, a value is provide. Now has to be applied to the function declared and called, this is performed by the apply method on the function prototype. Apply returns an array.

4. Function bind 

The logic is now bound to the function it is declared to and is run.

These steps are now performed by transpilers in ES-6 under the hood. 

The fat arrow, implicitly calls and binds the function output to the function inputs and declaration. For example, a named function is used in ES6 with the fat-arrow syntax. ```variable functionName = (params) => {function body}``` parses the lamda function, calls it, applies it and binds it in a shorter, more efficient run time as the transpiling is happening pre-build. The code is transpiled to

**FUNCTION DEFINITION, FUNCTION EXPRESSION, FUNCTION DEFINITION EXPRESSION, FUNCTION LITERALS, ANONYMOUS FUNCTIONS, LAMDA FUNCTIONS**

Confusingly an anonymous function means a function that simply does not use the keyword ```function``` in the naming convention. The function still has a name, so in reality, calling it an anonymous function is a bit of a misnomer.

It is also referred to as function definition, function expression, function definition-expression, funtion literal. When using the fat-arrow function, it is called a lambda function.

Function literals are more useful and flexible compared with function declaration. While names can be useful, especially dealing with recursion. 
```
const calculateFarenheit = celsciusConvertor(params) =>{ function body};
```
Assigning a function to a variable means you can use it anywhere that a variable will go. Then call it or use it like a variable passing it by value.

You can also immediately invoke the function by adding parenthesis to the end of the function body, with immediately called params. This is referred to immediate intialisation of the function, or immediate intantiation.

```
const calculateFarenheit = celsciusConvertor(params) =>{ function body}(30)
```
## ES6 Functions - or arrow functions
Arrow functions allows a short syntax for writing function expressions. They provide efficiency in run time. You don't need the function keyword, the return keyword, and the curly brackets. Functions are always anonymous functions or assigned to a variable. The return method is implict and in short functions, parenthesis for the params, curly braces for the return statement and the return key word can all be omitted.

The ```let``` and ```const``` are transpiled back into ```var```. As arrow functions are assigned to ```let``` or ```const``` key words, by definition, they too can not be hoisted. For stack tracing and debugging ```const``` is always the better option. There is no need to call and bind the this key word with an arrow function as the fat arrow calls and binds the function to the object it is pointing to.

#### What are pure functions
Pure functions are also called first class functions as they return the same output every single time. A more detailed walk through in the functional programming section. They are functions that are not  influenced by any internal or external state. Functions in object-oriented-programming in JavaScript are influenced by the data in the object's constructor state.

## ES-6 call-backs vs. Promises
A call back is executed when one function calls another function. Map,filter and reduce are call-back functions. There is a synchronous nested functionality where one code block has to run before the other can be executed and can lead to what was known as "call-back-hell" or "the pyramid-of-doom". It was also dependent on several conditional statements

Promises serve the same purpose as call-backs were created in ES-6 to solve the call-back-hell problem with using the constructor method that takes two params - resolve and reject - the promise gets executed with a series of .then blocks that results in the promise ending with three states:-

Fulfilled
Rejected
Pending
Promises take 2 arguments return new Promise (resolve, reject) followed by.then() blocks

## ES-8 Async Await
Async await is built on top of promises - it makes promises look like synchronous code. As JavaScript is now used both in the back-end and front-end, it helps server-side and client-side developers understand the code base. There are two key words async and await it is syntactic sugar over promises.Generators are a new type of function that allow us to pause function in the middle of function to be resumed later. The key word ```yield``` can be used several times to pause the function.

To use it in ES6 we need another babel compiler - polyfill

```
function* aFunction(){
yield;
yield;
}
```
**EXAMPLES**

- Call-back functions
Callbacks are functions that return functions.
```variable functionName = (callbackFunction(params) => {function body})```

- Promises
Promises execute functions in specific steps

``` 
variable functionName =(() => {
    function body
    .then(do something)
    .throw (throw and error)
    .catch((catch an error))
})

```
- Async functions


## What is currying?
- Curried functions - function returns more than 1 call back function


