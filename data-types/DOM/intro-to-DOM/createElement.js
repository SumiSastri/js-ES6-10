window.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const h1 = document.createElement('h1');
	h1.innerHTML = 'this box has been created by the document.createElement method';
	h1.style.color = 'grey';
	h1.style.border = '2px solid green';
	h1.style.padding = '20px';
	body.appendChild(h1);
	console.log(h1.offsetHeight);
	const box = document.createElement('div');
	body.appendChild(box);
	box.innerHTML = `the appendChild method creates a child element, the
    setAttribute method allows you to set CSS attributes to HTML elements`;
	box.className = 'box';
	box.id = 'single';
	box.style.border = '2px dashed blue';
	box.style.padding = '10px';
	box.style.margin = '10px';
	box.style.color = 'red';
	console.log(body.children);
	box.setAttribute = 'data-id=1';
	console.log(box.offsetTop);
	const box1 = document.querySelector('.box1');
	box1.innerHTML = 'This is the box that is already in the HTML accessed by the document.querySelector method';
});
