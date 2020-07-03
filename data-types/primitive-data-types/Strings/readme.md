### Strings in JavaScript
Documentation W3 schools [https://www.w3schools.com/jsref/jsref_obj_string.asp]
WDN [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]

### What are strings?
A string is a primitive data-type in JavaScript. They are held in single or double quotes.  Strings values can hold text, letters, numbers, symbols, punctuation,emojis - so long as they are in quotes JavaScript will recognise the value in quotes as a string type.

String literals are immutable or can't be altered once created. 

A string is also JavaScript constructor method. Under-the-hood, it is an object with its own inbuilt methods or functions. 

This can create confusion as the type of a string literal ```"Hello world"``` is not identical to the type of the String object ```new String('Hello world')```. This sometimes enforces unnecessary and confusing typechecks. Typescript was created as a JavaScript superscript to enforce these type checks.

String literals behave like an array held within quotes and thefore are iterable and several array methods can be used.

#### The type of & symbol.iterator methods with strings

If you want to check what is going on under the hood, use the ```typeof``` and the ```Symbol.iterator``` methods

```
 let title = "Java"
	 console.log(typeof title)
	 console.log(typeof title[Symbol.iterator])
```	 
The first will return string 
The second will return a (constructor) function 

As a string is a constructor function, it has its own methods that can be called on all instances of a string constructor(function).

#### String methods

```
.length()
.slice()
.splice()
.substring()
.replace()
.charAt()
.localCompare()
```

Some specific string methods
- Remove white space between characters ```.trim()```
- Change to upper case ```.toUpperCase()``
- Change to lower case ```.toLowerCase()```
- Can be split ```.split()```
- Can be joined ```.join()```
- Order can be reversed ```.reverse()```
- Two strings can be concatanated or joined ```.concat()```
- Can escape out of strings (FreeCodeCamp 25:30) 

```
let myStringEscaped ='a string in \'quotes\'';
let myStringWithBackTicks = `'a string'`
let myStringNewLine = 'my string \n\t\\ on a new line\n new line'
console.log (myStringNewLine)
// \n new line
// \r carriage return
// \t tab
// \b backspace
// \f form feed
// \\ backslash
```

####  ES-6 String Interpolation - template literals
Template literals allow you to use backticks to print strings. The dollar and curly braces help you turn a javascript argument into a string.

```
let nameBuilder = function(firstName = 'jane', lastName = 'doe') {
	console.log(`${firstName} ${lastName}`);
};
nameBuilder();
```
With a more complex interpolation you can see how a function is converted into a string whilst retaining the spacing, indents without the need to escape

####  Tutorials
Java Script dotcom[https://www.javascript.com/learn/strings]
Template Literals [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals]