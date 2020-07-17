In the array of names

1) Find the number of occurances of each name - the function has to be independent of the names
2) Names can not be hardcoded into the function
3) No mutation of the original array possible.


Solution:

Using reduce the first step is to return an empty object, the empty object at the end is the starting point of the accumulator (so not zero or an empty array but an empty object). Now when it gets to the first key-value pair, it will return the element value - which is the name. 

```
const tallyVotes = (votes) => {
    return votes.reduce((accValue, elemValue) => ({}),{})
}

Log the result of this to see that the element value is being displayed and ensure that you are getting the name recurring with each call. 

```
const tallyVotes = (votes) =>
	votes.reduce(
		(accValue, elementValue) =>
			console.log(`${accValue} accValue multiplier ${elementValue} elemValue `),
		{}
	);

console.log(tallyVotes(electionVotes));
```

Now we need to write the logic to count the votes without mutuating the array. For this we can use the spread operator.

Since we now have a new array, we are adding props to the object we want output ```{Harry:1}``` and we have to do this in a new array the syntax is now ```[name]:accValue[name] +1```

```
const tallyVotes = (votes) =>
	votes.reduce(
		(accValue, elementValue) => ({
			...accValue,
			[elementValue]: accValue[elementValue] + 1
		}),
		{}
	);

console.log(tallyVotes(electionVotes));
```

However, this throws an error that the count we have is not a number. This is because we need to refer to the previous instance of the name, check if it is the same name  ```[elementValue]: accValue[elementValue] ``` and then add the value of the second count of the name to the first count of the name. For this we need to use the ternery operator. Which is if there is an initial name and the accumulated vlaue of the name is the same then add one, if not, do nothing. But we can't use zero to indicate nothing, because the initial value of the first count of the name is one. The logic therefore looks like this. Now the accumulator has seen the name at least 1 time or 1 +1 time where the addition continues.

```[elementValue]: accValue[elementValue] ? accValue[elementValue] + 1 : 1```

