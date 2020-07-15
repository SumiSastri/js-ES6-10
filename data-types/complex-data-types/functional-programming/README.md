## Scaffolding

- ```npm init -y```
- install babel ```npm install @babel/core @babel/node @babel/preset-env```
- Create presets JSON
``` 
{
    "presets":"[@babel/preset-env]"
}
```

## What is Functional Programming & why use it?

- OOP languages (Java, Python, C++) & Procedural programming languages (C) have bugs that are difficult to find and fix
- Functional programming breaks down code into small easily maintainable parts
- Large number of complex ideas are broken down into simple functions to make the code easy to test and modify
- The differences between OOP and Functional Programming is in the choices they make organising code. 
- OOP is based on the concept that human beings think in terms of objects and the relationship between these objects. However, as logic becomes more complex, code in OOP relies not just on the original class but subclasses, interfaces, constructors, static-public-protected data, getter and setter accessors, mutators and method overiding.
- Functional programming is based on the input - function - output logical structure to keep the code simple

## What is a Declarative Style of programming?
- Functional programming focuses on what things are rather than how to achieve the end result
- This declarative style of programming allows the programmer to think of the what the the result should be not how to achieve the result.
- Imperative Style of programming focuses on how to achieve the result
- Core concepts of functional programming are 

* IMMUTABILITY (not changing the value of variables or data in state makes the data, state  immutable or unchanging). 

Values are defined NOT assigned. This is why, in ES6, we use the ```const``` key word. A variable should hold the same constant value througout the code base, the ```let`` key word should ideally only be used in block scope where it is clear where the code is being updated. 

- The advantage of immutablity is that we do not have to deal with state change as it is very difficult to keep up with where, how and how many times state is being updated in the code base. It leads to a fragile, buggy code base. 

* SEPARATING DATA AND FUNCTIONS - (functions are operations written on data, the data are arguments of the function and decoupled from the data)

If data is constant, the flexibility of programming comes from writing functions that provide functionality. This means you can look at each of the functions in isolation and identify bugs earlier and better. You only have to think of how the input impacts the output and the logic needed for the resulting output. 

The data can be stored in a database and accessed by an API, this makes the data more secure. The functions that are written, should not have objects wrapped into the logic, they ideally should be separate entities from the data. The return statement should return a modified copy of the data. The data should be passed as arguments of the function, rather than using the this key word, to point to the object they are defining as in OOP.

In the file ```oop-way.js``` the direct access to the object with the publically accessible variables of the firstName, lastName, then programmers can access this object and the original object is changed, and this is not what we want. The data is altered perhaps in unwanted ways and is not a constant source of truth. 

The functions and the data in classes are tightly coupled in OOP. The data (state) is wrapped up in the constructor method as member variables. They are then accessed by functions pointing to the data in the object with the ```this``` key word. The data and functions are called and bound to each other. The only way to access the data in objects is to use the methods provided by the class.

In functional programming they are decoupled. Data is grouped together and accessed. They can be stored in hashes or arrays (in other programing languages) or objects as in JavaScript. Functions are operations that are written using the data as arguements of the function. They original data is left untouched and immutable. Functions therefore are complete separate entities from the data that they operate on. The functions return a modified copy of the original data.

The way around this challenge in OOP is to use the underscore or private key-word to keep the data in state immutable.

* PURE-FUNCTIONS/ FIRST-CLASS FUNCTIONS (ideally a function should have no side effects - i.e. the same output should be returned every single time - random number returns for example are impure functions)

In the file ```functional-way.js``` we see how each set of data is identified, put into a collection (the array), the data, the collection remain immutable. Functions are written outside the data-definition using the data and array methods to define what data is required as the output.

Functions are not influenced by any internal or external state. Wheras a function does not work if removed from its class in OOP. The only thing that changes the output of a function are the arguments of the function. The functional approach therefore, although it looks more structured superficially, it actually provides more flexibility and extensibility.

* WHAT IS CURRYING/ PARTIAL APPLICATION?

Partial application is the partial application of a function argument to the function body. If one param is likely to have a fixed output and the others variable outputs, currying or partial application can be used.

The param is isolated and then passed on to a call back function by reference.
Step 1 isolate the fixed arg - ```console.log(xPartial, 'function declaration');```
```const xPartial = (x) => (y, z) => add(x, y, z);```

Step 2 create a default value for this arg and assign it to a new variable ```console.log(add5, 'function reassignment');``` The log records this reassignment
```const add5 = xPartial(5);```

Step 3 create a new variable and run the function call of the first code block passing variables from second code block
```const add5AndxPartial = add5(16, 77);```
The final log is the call and reassignment ```console.log(add5AndxPartial, 'function call from add5AndxPartial');```

The final output is the same as declaring this all at the same time. Currying/ partial application means we simply break up the variables and pass them through the code at different times.

This can be done with one or more args being passed at different times.For example, all three args can be passed separatly and partially.

```const xyzPartials = (x) => (y) => (z) => add(x, y, z);``` To call the function, now each arg is reassigned in separate parenthesis ```const addXYZpartials = xyzPartials(29)(16)(18);``` the function is instantly callable.

```
console.log(xyzPartials, 'function declaration');
console.log(addXYZpartials, 'function call from addXYZpartials');
```

## ES-Lint and Functional Programming
npm install --save-dev es-lint
npm uninstall --save-dev es-lint


## ES-Lint and Functional Programming
- Set up hello-world file
- node hello-world to ensure project set up correctly