const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');

circle1.addEventListener('click', () => {
	console.log('#box1 click');
	circle1.innerHTML = `YOU CLICKED CIRCLE 1`;
});
circle2.addEventListener('click', () => {
	console.log('#box2 click');
	circle2.innerHTML = 'This is child 1 of box 1, box 2';
});
circle3.addEventListener('click', () => {
	console.log('#box3 click');
	circle3.innerHTML = 'This is the child of box2 and grandchild of box1, box 3';
});
