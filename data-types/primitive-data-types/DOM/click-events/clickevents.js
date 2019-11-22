const clickBtn = document.getElementById('click');
clickBtn.addEventListener('click', (e) => {
	console.log("I've been clicked!");
	console.log(e.target);
});
function changeColor() {
	clickBtn.style.color = 'red';
}
const changeImage = document.getElementById('image1');
const dblClickBtn = document.getElementById('dblclick');
dblClickBtn.addEventListener('click', (e) => {
	console.log("I've been double-clicked !");
	console.log(e.target);
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
mouseDownBtn.addEventListener('mousedown', (e) => {
	console.log('mousedown button clicked');
	console.log(e.target);
});

const mouseUpBtn = document.getElementById('mouseup');
mouseUpBtn.addEventListener('mouseup', (e) => {
	console.log('mouseup button clicked');
	console.log(e.target);
});
