### What are arrays

Arrays in JS are also known as indexed collections. The index is the key starting from zero and the value is the item in the array that corresponds to the key. The key and value are tightly coupled.

Arrays, unlike objects, are ordered set of values, acessed with the array keys. Each item  in the array is called an element and can be accessed with an index. As it is zero index based the array is one number more than counting from 1. You can not pass Array(3.1), it has to be a whole item/ number - the error message it will throw is range error.

Elements in an array can be different types - strings, numbers, booleans, objects & another array. They are held together by ```[]``` square brackets. Arrays are object constructor prototypes Array()with built in methods. 

Arrays are readable, writable and enumerable (iterable) 

Under the hood, and Array is a constructor with all the constructor methods. If you type ```Array.isArray(Array.prototype);``` the return is true in the console.

To find a method like key or value
```Array.prototype.keys()```
```Array.prototype.values()```

You will get the prototype form and all its methods

```
Array Iterator {}
__proto__: Array Iterator
```

### Looping through key-value pairs in the indexed collection

As the key and value are tightly coupled, arrays literals are iterable and offer a true-false answer when you loop through them. The Array constructor under the hood is invoking the ```.next``` method to find whether the key and value strictly match.

When you use the ```array.values()``` method you are actually invoking the prototype method of the Array constructor ```Array.prototype.values()```

```
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.values())
```
The array iterator constructor is using the ```.next``` method in the prototype to loop through all the values in the array and find if the value exists(is true) or does not exist and therefore (is false)

```(iterator.next().value)```
```(iterator.next().key)```

### Array as a constructor vs. array literal

```
var arrayData = Array(30);
var arrayData = new Array(30);
```
This  will initialise an array with 30 empty elements

Creating a custom constructor for an array - this will create a new object
```var myArray = newArray('Joe', 0, true, 'Blog');```

If you assign the array to a variable with bracket notation as above this makes the array prototype object into an array literal.

When you assign an array to a variable, you are initialising the array this array literal has been initialised to a shopping list.

```
var shoppingList1 = [ 'bread', 'milk', 'bacon', 'eggs', 'coffee' ];
```
Change the items of the array by access the key and change the value
shoppingList1[0] = 'onions';
shoppingList1[3] = 'garlic';

You can reassign the value of the data in an array as follows - the array in the variable arrayData now has a value of 30.

```
let myArray = [ 6, 15, 30, 40 ];
let arrayData = myArray[(0, 2)];
console.log(arrayData);
```
MDN quick reference [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype]
w3 quick reference [https://www.w3schools.com/jsref/jsref_obj_array.asp]
Another useful reference [https://www.dyn-web.com/javascript/arrays/]