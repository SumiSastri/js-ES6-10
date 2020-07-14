// array - as data
const words = [ 'spray', 'limit', 'elite', 'exuberantly', 'destructively', 'canton', 'paints', 'stains' ];
// function as data - function declaration
const wordLength6 = (words) => words.length < 6;

// using the array as data
const wordLengthFilter6 = words.filter((shortWords) => shortWords.length < 6);
// using the function declaration as data
const wordLengthFilterFP = words.filter(wordLength6);

console.log('words array', words);
console.log('FUNCTION DECLARATION', wordLength6);
console.log('worldLengthFilter6 - function call', wordLengthFilter6);
console.log('wordLengthFilterFP - function call', wordLengthFilterFP);

// if you want to do this with different lengths then you may want to use fp filtering in stead
// factory call-back function - testlength first param of first function, word second param of second function
// the return statement is the code block which looks at both params and provides the function body logic
const createLengthTest = (testLength) => (word) => word.length > testLength;

// function call - passed by value into the filter method as a param
const testLength6 = words.filter(createLengthTest(6));
const testLength5 = words.filter(createLengthTest(5));
const testLength4 = words.filter(createLengthTest(4));

console.log('FUNCTION DECLARATION', createLengthTest);
console.log('testLength6 - function call', testLength6);
console.log('testLength5 - function call', testLength5);
console.log('testLength4 - function call', testLength4);
