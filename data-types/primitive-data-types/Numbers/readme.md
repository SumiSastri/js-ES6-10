## Numbers in JavaScript

Documentation[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number]

### What are numbers?
Numbers are a primitive data type in JavaScript. They are usually held in variables. Simple arithmetic operators like ```+ - * /``` refer to plus, minus, multiply and divide. Modulus or remainder ```%``` is represented by the percentage symbol.

### Not a Number or NaN

Not a number is a property of the window object. In modern browsers it is non-configurable and not used as a property that you can write into code. It is usually an error message when a math operation fails.

Documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN]

### ES-6 and default values 

Without a default parameter this function will return undefined and NaN

```
function createReceipt (price, tax, shipping) {
		console.log(
			`Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP ${price}
                Tax: GBP ${tax}
                Shipping: GBP ${shipping} 
				Grand Total: GBP ${price + (price * tax) + shipping}		
		`
		);
	};
createReceipt();
```

```
Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP undefined
                Tax: GBP undefined
                Shipping: GBP undefined 
				Grand Total: GBP NaN	
```

Adding a default value of zero 
```
	 function createReceipt (price=0, tax=0, shipping=0) {
		console.log(
			`Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP ${price}
                Tax: GBP ${tax}
                Shipping: GBP ${shipping} 
				Grand Total: GBP ${price + (price * tax) + shipping}		
		`
		);
	};
createReceipt();
```

changes the output

```
Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP 0
                Tax: GBP 0
                Shipping: GBP 0 
				Grand Total: GBP 0		
```
And if you pass a number the function is executed accordingly

```
	 function createReceipt (price=0, tax=0, shipping=0) {
		console.log(
			`Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP ${price}
                Tax: GBP ${tax}
                Shipping: GBP ${shipping} 
				Grand Total: GBP ${price + (price * tax) + shipping}		
		`
		);
	};
createReceipt(10, 0.15, 4.5);
```
```
Thank you for shopping with us - here is the receipt for your purchase
				Price: GBP 10
                Tax: GBP 0.15
                Shipping: GBP 4.5 
				Grand Total: GBP 16
```                	
### Null vs. NaN

Null, NaN and Infinity are separate data-types from numbers. Null does not represent 0 in JavaScript but the absence of an object. As all JavaScript data types are objects, to represent the deliberate absence of an object null is used to prevent an error message of undefined.

Documentation[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null]

### The concept of Infinity

Infinity is also a property of the window object and is also non-configurable and non-writable more documenation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity]

### The concept of undefined

Undefined is a default error message in JavaScript, when the parser does not know how to read the script, it throws an error message of undefined. It is also a property of the window object therefore non-configurable, non-enumberable and non-writable.

Documentation [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined]

### Some quirks with numbers that are not strictly mathematics

As JavaScript is loosely typed ```"1" + 1``` which is a string plus a number can return 2. 
```true + 1``` which is a boolean and a number will return 2.
```false + false``` will return 0.
```5 + "string" ``` will return 5string.
```"string" + false``` will return stringfalse as it concats both
```"string" + "string"``` for the same reason will return stringstring

This is not true with subtraction
```"string" - 5``` will return NaN or not a number.

Division exceptions
```2/0``` returns infinity
```2/-0``` returns minus infinity

Mutliplication exceptions

```infinity * 0``` returns NaN
```"string" * 0``` returns NaN

Modulus can be used to find odd and even numbers (18:13) on the FreeCodeCamp video
However the operator also throws exceptions

```-4 % 2 // -0``` returns minus zero which means nothing in pure maths
```-1 % 2``` returns minus 1
```1 % -2 ``` returns plus 1
```2 % 3 ``` returns plus 2

### Increments and decrements

```++``` show an increment of one ```+=``` means add this to the previous number
``--``` the same is true of decrements

More on FreeCodeCamp Video (18:13-19:04)

```
let a = a + 10;
let a += 10;

let b = b-10
let b -= 10;

let c = c * 5;
let c *= 5;
```