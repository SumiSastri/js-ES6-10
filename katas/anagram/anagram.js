const anagramsArray = [ 'cat', 'bat', 'baton', 'tac', 'cinema', 'anemic', 'iceman' ];

const checkAlphabetsForAnagrams = (anagrams) =>
	anagrams.reduce(
		(accValue, elementValue) => ({
			...accValue,
			[elementValue]: accValue[elementValue] ? accValue[elementValue] + 1 : 1
		}),
		{}
	);

const hasSameLetterCount = (word1, word2) => {
	const word1Count = checkAlphabetsForAnagrams(word1.split(''));
	const word2Count = checkAlphabetsForAnagrams(word2.split(''));

	return (
		Object.keys(word1Count).length === Object.keys(word2Count).length &&
		Object.keys(word1Count).every((letter) => word1Count[letter] === word2Count[letter])
	);
};

const findAnagramsInData = (word, anagramsArray) => {
	return anagramsArray
		.filter((anagramsArrayElements) => hasSameLetterCount(word, anagramsArrayElements))
		.filter((anagram) => anagram !== word);
};

console.log(findAnagramsInData('tac', anagramsArray));
