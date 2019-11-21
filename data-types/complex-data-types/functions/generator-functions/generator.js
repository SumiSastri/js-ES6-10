function* countDown() {
	yield '10';
	yield '9';
	yield '8';
	yield '7';
}
let action = countDown();
// console.log(action.next());
// console.log(action.next());
// console.log(action.next());
// console.log(action.next());
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
