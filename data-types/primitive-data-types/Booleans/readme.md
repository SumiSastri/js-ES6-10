### Booleans

In programming languages you need a data type that will take only one of 2 answers - yes or no/ true or false / on or off. A great video on booleans [https://scrimba.com/p/pPPeCy/caJVKfv]
These help execute functions in programming. Everything with a value returns true.
There are certain default boolean values - anything without a value returns false. 

Booleans are especially useful in iterables - a loop will continue to match true and stop executing if false, so a control can be written based on these boolean values expected.

```
NaN
undefined
null
 -0
 " "
 {}
 []
false
 ```

Documentation [https://www.w3schools.com/jsref/jsref_obj_boolean.asp]

Booleans are essential for conditional statements in functions to work.

### Evaluating conditions as true or false - comparison operators

To find out if a programming statement is true or false there are certain operators that can be used

- Geater than ```<``` or less than ```>``` in JavaScript this will evaluate whether the second number is greater than or less than the first ```1>2``` or ```2<1``` will both return true, while  ```1<2``` or ```2>1``` will return false

But JavaScript being loosely typed returns interesting results when the two types being evaluated are not numbers. For example, ```"2" < "12"``` will return false because two because alphabetically 12 comes before 2.

- The equals operator ```=```  assigns a value to a variable and is not a comparison operator

- The double equals  ```==``` evaluates two statements once again when the two statements are of mixed types it returns unexpected results ```"12" == "twelve"```  will return false

- The triple equals evaluates if two statements are strictly equals in type as well as value ```===```

- Greater or equal to ```<=``` less than or equal to ```>=```

### Evaluation with the and, not and or logical operators

```10 < 5 && 11 > 12``` evaluates both sides of the operator and returns true or false - in this case true
```||``` or  evaluates both side of the operator and returns true or false
```!``` not ```!=``` not equal in value ```!==``` not equal in value and type

### Truthy and Falsey

The video by Dylan Israel has a good excercise to explore variables that can't strictly be defined as true or false but they are somewhat true and somewhat false [https://scrimba.com/p/pPPeCy/caJVKfv]
```''``` an empty string is false but an empty string with a ```' '```space is falsey.

### ES-6 and how booleans work under the hood with iterables

ES-6 has 2 new protocols - the Iterable and the Iterator protocols.

Iterable allows JavaScript Objects to define and customise their own behavior
Iterator is a standard way to produce a sequence of values in a collection.

Look at how this function gets executed in the console

```
	 let title = "Java"
	 console.log(typeof title)
	 console.log(typeof title[Symbol.iterator])

	 let stringIteration = title[Symbol.iterator]();
	 console.log(stringIteration.next())
	 console.log(stringIteration.next())
	 console.log(stringIteration.next())
	 console.log(stringIteration.next())
	 console.log(stringIteration.next())
```
The function runs each element of the string until there are no string elements left and the value is then undefined and done becomes true at the end.

```
[Log] {value: "J", done: false}
[Log] {value: "a", done: false}
[Log] {value: "v", done: false}
[Log] {value: "a", done: false}
[Log] {value: undefined, done: true}
```