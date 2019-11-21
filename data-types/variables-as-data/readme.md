### Variables as a store of data

A variable is a temporary store of data, or a cache of information, in a JavaScript file that can be used later. As it is a temporary store, you can reassign the value. Once it is written however, a variable is immutable.

The equals sign in a variable is an assignment operator - it does not mean that it is mathematically equal or even that it is equal as a type of data.

Variables are stored in memory and have three key words to identify them ```var, let & const```

### The var key word

In modern JavaScript variables are written as lets and constants, not as variables. Variables tend to pollute the global scope and becomes hard to debug in an extensive code base. However they are useful initially to test code in the console.

A variable must be declared or intiantiated, with the var key word. 

``` var a = 5;``` 

If it is not intantiated, it will default to undefined.

For example, ```var a; ``` will return undefined


You can reassign the value of a variable

``` var b = a; ```

### ES-6 The let key word

Let allows block scoping where it was not possible with the var keyword in ECMA-5

If you want to reassign the value of a variable, let is the key word to use, it is particulary useful in iterative functions - like map, filter, reduce and loops.

```let a = 5;``` and reassign it ```let b =a; ```

### ES-6 The const key word

The store of value of this variable is constant and can not be reassigned. Methods and functions can be used to change this value.

```const a = 5;``` 

### Scope of var, const and let key words

The var key word does not adhere to block scope

```
var x = 10
if(x > 5) {
  var y = 20
  console.log(x) 
  var x = 20
}
console.log(x) 
console.log(y) 
```
The answer you will get is 10, 20, 20 as in the code block the variable x in global scope is overwritten or reassigned to 20 in local scope of the code block 

Both let and const adhere to block scope, which means that you have to initialise the variable in global and local scope.  If you use ```let x = 10``` or ```const x = 10``` with the code block above you will get an error "Cannot access 'x' before initialization" which means x has to be intiatiated in the scope of the code block as well to be recognised by JavaScript engines as cached information.

Once again if you have a larger block of code this becomes more obvious - if you use ```var``` instead of ```let``` you will not get the exact number of the box you clicked, you will always get box 45.

```
for (let i =0; i<=45; i++){
		let div = document.createElement("div");
		div.onclick = function () {
			<!-- console.log(`you clicked on box number ${i}`) -->
      		alert(`you clicked on box number ${i}`)
		};
		document.getElementsByTagName('section')[0].appendChild(div);
	}	
  ```

Read more on [https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75]