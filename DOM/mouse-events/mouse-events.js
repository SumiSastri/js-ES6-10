const output = document.getElementById('output');
// adds event listener

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
