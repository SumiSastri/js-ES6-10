## What are functions?

Functions are objects with logic in the function body. In JavaScript everything is an object including functions and arrays.

Functions are anonymous or named. A named function is used in ES6 with the fat-arrow syntax.
```variable functionName = (params) => {function body}```

Callbacks are functions that return functions.
```variable functionName = (callbackFunction(params) => {function body})```

Promises execute functions in specific steps

``` 
variable functionName =(() => {
    function body
    .then(do something)
    .throw (throw and error)
    .catch((catch an error))
})
```

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