## What are functions?

Functions are objects with logic in the function body. In JavaScript everything is an object including functions and arrays.

The function body are a series of logical statements for the code block to perform. It is therefore a block of code designed to peform a particular task. It makes programming modular and scalable. Functions in other languages are called subroutines or procedures. Data types that a function can mutate are
 - Primitives - strings, numbers as well as complex-data-types
 - Arrays and Objects

Mutation happens with the use of conditionals and boolean evaluation. As a function is an object under the hood it is performing a call, apply and bind method written to the global function prototype.

Steps to create a function: - 

1. Function declaration 

There are 2 types of declaration - anonymous and named. The purpose of the declaration is to store the temporary value of the function logic. When you log such a function, you will get the function name and the function prototype declared.

2. Function call

For a function to be used, it needs to be called, under the hood in ES-5 calling is a method performed on the function object. The function calls the declared function with the arguements performed by the params of the function body. Functions need to be explicitly called or invoked to reterieve the value returned from the block of code. Functions can be called anytime in the code block - in the console by developers to check code or by the end-user when they clicks a button in a front-end application.

3. Function apply

The logic that has been called now has to be applied to the function declared and called, this is performed by the apply method on the function prototype.

4. Function bind

The logic is now bound to the function it is declared to and is run

These steps are now performed by transpilers in ES-6 under the hood. 

Syntax:
As seen below should name the function, have named or implicit parameters - parameter args act like local variables they make the function more flexible - the function body must explicitly or implicitly return something this is when the code block stops executing.

```
function nameOfFunction(param1, param2) {
 return functionBody
}
```

The fat arrow, implicitly calls and binds the function output to the function inputs and declaration. For example, a named function is used in ES6 with the fat-arrow syntax. ```variable functionName = (params) => {function body}``` parses the lamda function, calls it, applies it and binds it in a shorter, more efficient run time as the transpiling is happening pre-build. The code is transpiled to

#### What are pure functions
Pure functions are also called first class functions as they return the same output every single time. A more detailed walk through in the functional programming section. They are functions that are not  influenced by any internal or external state. Functions in object-oriented-programming in JavaScript are influenced by the data in the object's constructor state.

#### What is a function statement?
Function statements are the series of statements or logical blocks written into the function body for the code to be executed. Programs are a list of steps/ instructions/ protocols that the computer needs to follow to execute code. The function body provides them with these steps. These steps are called statements and with js-html-css the browser parses these statments to execute the code block. Statements are executed one by one in order of the way they are called in the call-stack. The semicolon in js tells the browser one statement is over and to execute the next, syntax also indicates to the browser's inbuilt JavaScript engines how to deal with the code written.

#### Why is code readability important?
Making code readable improves efficiency. Statements can be broken with the semicolon or operators. If a statement is more than 80 characters it is recommended to use breaks. Curly braces show a list of code block to be executed together ```{ }```. For namespaces to start with a number, for example browsers will try to parse (read) it as a number rather than a naming convention. Browser engines are also case sensitive, therefore ```nameOfFunction``` and ```nameoffunction``` will be read as 2 different identifiers and code breaks/ has unintended side-effects. Similarly ```id``` , ```iD``` & ```ID``` are three different name spaces. Hypens will be read as subtraction signs. Each language has its own naming conventions, lower camelCase is preferred as the first alphabet in upper case, denotes the namespace belongs to the class keyword. Similarly commas separate variables, semi-colons statements or one line of code. Browsers stop running the code when they reaches the return statement. For all these reasons code readability and the right syntax are important.

#### Why is the call stack and critical render path?

The critical render path is how browser engines read different languages - HTML, CSS and JavaScript and the order they are read in is the call stack. HTML is parsed first, then CSS and then JavaScript.

JavaScript being a loosely typed language - stores variables that can be changed - asynchronous and single-threaded means that browsers parse the language in the most convenient order in the call stack. 

The Document Object Model (DOM), which is a copy of the node-tree on a webpage,  queries HTML and CSS and returns an object which then can be mutated. JavaScript accesses the DOM and then is run on each node. When using vanilla JavaScript, it is required to put the scripts between body and html for set up so that the browser can parse the script. With JavaScript libraries, the MVC (model-view-control) method is used to access the DOM via a virtual DOM. The method of access to the DOM depends on the library - jQuery, React-js, Node-js are library dependencies that access the DOM in different ways.

The browser complies code first by looking at the syntax (lexical compliation)
- if it detects syntax errors and the code does not run
- if it detects blocks of code in the function - conditionals, loops, variables etc., then it looks at the scope of the function and what is within and what is referenced
- then in the browser memory, it runs the new code and stores it in the window object
- by default all code is in the window scope therefore window.alert() can be called anywhere. (go to console type window to check root scope)
- Since the DOM is an internal API you have the traditional API calls
```get``` which is the ```getElement``` function. Once the data has been fetched by the DOM API, you can perform other methods available from the DOM-API ```setAttribute = post``` or ```removeElement = delete``` For example, ```-getElementsByTagName() - setAttribute() - removeElementById();``` are all the DOM-API methods.

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

