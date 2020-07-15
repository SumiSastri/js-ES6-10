// ES 5

// NAMED FUNCTION OR FUNCTION DECLARATION

function multiply3(a, b, c) {
	return a * b * c;
}
console.log(multiply3, 'logs function declaration multiply3');
console.log('calls function', multiply3(1, 2, 3));

function add2Numbers(a = 0, b = 0) {
	return a + b;
}
console.log(add2Numbers, 'logs function declaration add2Numbers');
console.log('calls function', add2Numbers(1, 2));

// FUNCTION EXPRESSION
const multiply = function multiply(a, b, c) {
	return a * b * c;
};
console.log(multiply, 'logs function declaration multiply');
console.log('calls function', multiply(4, 5, 6));

// ANONYMOUS FUNCTION

const add = function(a, b, c) {
	return a + b + c;
};
console.log(multiply, 'logs function declaration add');
console.log('calls function', add(1, 2, 3));

// ES 6
// syntax assign variable, name function assign params fat arrow for return statement (function body)

const square = (x) => x * x;
// one param of function is an implicit return
console.log(square, 'logs declaration');
console.log('function call', square(100));

// two param of function explicit return
const multiply2nums = (x, y) => {
	return x * y;
};
console.log(multiply2nums, 'logs declaration');
console.log('function call', multiply2nums(18, 24));

// two param of function implicit return also works
const calcProduct = (x, y) => x * y;

console.log(calcProduct, 'logs declaration');
console.log('function call', calcProduct(100, 2));
