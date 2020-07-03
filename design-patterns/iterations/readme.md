Iterations or loops can be performed over iterable objects:-
- Strings
- Arrays
- Maps (maps are key-value pairs that look like an object but are ordered collections so you can iterate over them, they are a new type in ES-6). Map has its own methods. ```Map.set()``` it also has a size property
- Sets
### Iterations, Loops & functions with arrays

As Arrays are iterable, other than the built-in methods of the Array constructor, custom or factory functions can be written to loop through the array.

Intialise the array and give it some values - the keys are embedded in the id symbol or i, write your custom function, which can also use the inbuilt Array constructor methods.

```
var array =[1,2,3,4,5]

function nextInNumber (array, number) {
	return array.push(6)
}
```
