// assign the element to a variable
const clickBtn = document.getElementById('click');
// ES5 WAY TO WRITE CALL BACK FUNCTION

// declares global scope variables as const does not hoist
const output = document.getElementById('output');
// adds event listener
clickBtn.addEventListener('click', (e) => {
	console.log("I've been clicked!");
	// DOM TOKEN LIST
	// console.log(e);
	// console.log(e.type);
	// console.log(e.target);
	// console.log(e.target.id);
	// console.log(e.target.className);
	// console.log(e.target.classList);

	// MOUSE POSITIONS
	// console.log(e.clientX);
	// console.log(e.clientY);
	// console.log(e.offsetX);
	// console.log(e.offsetY);

	// KEY POSITIONS AS BOOLEAN VALUES
	// console.log('Alt' + ' ' + e.altKey);
	// console.log('Control' + ' ' + e.ctrlKey);
	// console.log('Shift' + ' ' + e.shiftKey);
	// output.innerHTML = '<h3>' + e.target.id + '</h3>';
	// output.style.color = 'red';
});
// writes call back function
function changeColor() {
	clickBtn.style.color = 'red';
}

// ES6 adds the listener and passes call back as a param
// clickBtn.addEventListener('click', (changeColor) => {
// 	clickBtn.style.color = 'red';
// });

const changeImage = document.getElementById('image1');
const dblClickBtn = document.getElementById('dblclick');
dblClickBtn.addEventListener('dblclick', (e) => {
	console.log("I've been double-clicked !");
	console.log(e.target);
	console.log(e);
});
function handleDoubleClick() {
	changeImage.src = 'https://www.listchallenges.com/f/items/aee35b18-b52b-41d6-89bc-39660ce47534.jpg';
}

const fieldValue1 = document.getElementById('field1');
const fieldValue2 = document.getElementById('field2');
function copyValues() {
	fieldValue2.value = fieldValue1.value;
	console.log(fieldValue1.value);
	console.log(fieldValue2.value);
}
const mouseDownBtn = document.getElementById('mousedown');
mouseDownBtn.addEventListener('mousedown', runEvent);
function runEvent(e) {
	console.log('EVENT TYPE: ' + e.type);
}

const mouseUpBtn = document.getElementById('mouseup');
mouseUpBtn.addEventListener('mouseup', runEvent);
function runEvent(e) {
	console.log('EVENT TYPE: ' + e.type);
}

const mouseEnter = document.getElementById('mouse-enter');
mouseEnter.addEventListener('mouseenter', runEvent);
mouseEnter.addEventListener('mouseover', runEvent);
mouseEnter.addEventListener('mousemove', runEvent);
function runEvent(e) {
	console.log('EVENT TYPE: ' + e.type);
}
const mouseLeave = document.getElementById('mouse-leave');
mouseLeave.addEventListener('mouseleave', runEvent);
mouseLeave.addEventListener('mouseout', runEvent);
mouseLeave.addEventListener('mousmove', runEvent);
function runEvent(e) {
	console.log('EVENT TYPE: ' + e.type);
	// output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
	// r-g-b set to mouse movements - red is set to offsetX, green is set to offsetY, blue set to a number
	// mouseLeave.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 80 )';
	document.body.style.backgroundColor = 'rgb(' + e.offsetX + ',' + e.offsetY + ', 20 )';
}
