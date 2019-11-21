
Generators are a new type of function that allow us to pause function in the middle of function to be resumed later. The key word ```yield``` can be used several times to pause the function.
To use it in ES6 we need another babel compiler - polyfill

```
function* aFunction(){
yield;
yield;
}
```