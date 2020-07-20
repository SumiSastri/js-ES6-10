Find the words that are anagrams in the data array provided.

Step1: Find number of occurences of all words

```
const checkAlphabetsForAnagrams = (anagrams) =>
	anagrams.reduce(
		(accValue, elementValue) => ({
			...accValue,
			[elementValue]: accValue[elementValue] ? accValue[elementValue] + 1 : 1
		}),
		{}
	);
```
Step 2:

In each occurance of the word (defined in the ```checkAlphabetForAnagrams``` variable), split the words into a string of alphabets to check alphabets and number of times they recurr. The split returns an array of alphabet elements ```wordCount1``` and ```wordCount2```

```
const hasSameLetterCount = (word1, word2) => {
	const word1Count = checkAlphabetsForAnagrams(word1.split(''));
	const word2Count = checkAlphabetsForAnagrams(word2.split(''));
```

Check whether the new arrays - ```word1Count``` and ```word2Count``` have the same number of alphabets by iterating over the object key-value pair - as well as (both statements have to be true the && operator has to return true to both sides of the logic) every letter should match in the word count arrays 1 & 2.

```
 	return (
            Object.keys(word1.count).length === Object.keys(word2.count).length &&
 <!-- both these statements should return true -->		
            Object.keys(wordCount1).every((letter) => wordCount1[letter]) === wordCount2[letter]
	);

 };
```
As the string becomes an array of alphabets, it has reverted to the class of Array that is defined in JavaScript and is an object with keys and values. So now we are access the Array prototype classes alphabets with the ```Object.key``` method that iterates over every key in the array, chains the ```array.every()``` method and checks that every letter is an exact match - this is in our array methods sections where every has to return a boolean true value for every single instance of the occurance.

Now you filter for the answer to find the words that have both the same letter count and the same letters then they have to be anagrams!

```
const findAnagramsInData = (word, anagramsArray) => {
	return anagramsArray.filter((anagramsArrayElements) => hasSameLetterCount(word, anagramsArrayElements))
};
```

To make sure that it does not return the word that you pass as an argument, you double filter the code, this filter allows you to return a word that is not the word you have passed in to check if it is an anagram :-)!

```
.filter((anagram) => anagram !== word);
```
