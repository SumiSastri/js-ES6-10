const number = 30;

const double = (x) => x * 2;
const treble = (x) => x * 3;
const quadruple = (x) => x * 4;

const minusOne = (x) => x - 1;
const addOne = (x) => x + 1;

const doubled = double(number);
const trebled = treble(number);
const quadrupled = quadruple(number);

const SixTimesOrQuits = double(trebled);

const functionsArray = [ doubled, trebled, quadrupled, SixTimesOrQuits ];
console.log(functionsArray);

functionsArray.forEach(() => {
	return number;
});
console.log(number);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const combine2Nums = () => (2, 5);

combine2Nums(add);
combine2Nums(subtract);
combine2Nums(Math.max);
combine2Nums(Math.min);

const createPrinter = () => () => console.log('hellow');

const createHellowWorld = function() {
	return function() {
		console.log('hellow world');
	};
};

const createMultiplier = (y) => (x) => {
	x * y;
};
const doubler = createMultiplier(2);
const tripler = createMultiplier(3);
const quadrupler = createMultiplier(4);

doubler(5);
