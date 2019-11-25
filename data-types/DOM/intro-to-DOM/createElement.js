window.addEventListener('DOMContentLoaded', () => {
	// caching the element in a variable and applying styling methods
	const box1 = document.querySelector('.box1');
	box1.innerHTML = `This div element is written in HTML and has a class name box1. It has been accessed 
	by the document.querySelector('.box1') method. This method selects an element by its CSS selector. 
	An id therefore will be document.querySelector('#box1'). The method has been assigned to a variable,
	(box1), and styled using the (box1).style method to apply any CSS style`;
	box1.style.border = '5px dotted red';
	box1.style.background = 'yellow';
	box1.style.height = '125px';
	box1.style.width = '500px';
	// creating an element that has not been written in HTML
	const body = document.querySelector('body');
	const p = document.createElement('p');
	p.innerHTML = `this box has been created by the document.createElement method, the .innerHTML method 
	allows access to the paragraph element to modify with JavaScript code. The parentElement.appendChild(childElement) method
	allows display of the element as a child element of a parent element`;
	p.style.color = 'grey';
	p.style.border = '5px solid black';
	p.style.padding = '20px';
	p.style.height = '100px';
	p.style.width = '750px';
	p.style.background = 'blue';
	p.style.color = 'white';
	body.appendChild(p);
	// adding CSS attributes to the meta data
	const box = document.createElement('div');
	body.appendChild(box);
	box.innerHTML = `the child element can also have CSS attributes added - name, className, id, value added 
	in the meta-data, to check how many children a parent element has you can use the parentElement.children method`;
	box.className = 'box0';
	box.id = 'box0';
	box.style.borderBottom = '2px dashed blue';
	box.style.borderTop = '2px dashed blue';
	box.style.padding = '10px';
	box.style.margin = '10px';
	box.style.color = 'red';
	// get element by Id - gets only the first element with that id
	const changeBox = document.getElementById('box0');
	changeBox.style.height = '100px';
	// accessing HTML Collections
	const fruits = document.getElementsByClassName('fruits');
	console.log(fruits);
	fruits[0].style.color = 'red';
	fruits[1].style.color = '#4088';
	fruits[2].style.color = 'green';
	// accessing all the elements with a for-loop
	const forex = document.getElementsByClassName('forex');
	console.log(forex);
	for (let i = 0; i < forex.length; i++) {
		forex[i].style.backgroundColor = '#f3f3f3';
	}
	const items = document.getElementsByTagName('li');
	console.log(items);
	for (let i = 0; i < items.length; i++) {
		items[i].style.fontSize = '20px';
		items[i].style.fontWeight = 'bold';
	}

	// Accessing a node list rather than a HTML collection - always returns an array
	const changeItems = document.querySelector('.fruits');
	console.log(changeItems);
	// pseudo selectors
	const apple = document.querySelector('li');
	apple.style.margin = '10px';
	const blueBerries = document.querySelector('li:nth-child(2)');
	blueBerries.style.margin = '25px';
	const pears = document.querySelector('li:nth-child(3)');
	pears.style.margin = '35px';
	const eur = document.querySelector('li:nth-child(4)');
	eur.style.margin = '10px';
	// const dollars = document.querySelector('li:nth-child(5)');
	// dollars.style.margin = '10px';
	const pounds = document.querySelector('li:nth-child(6)');
	pounds.style.margin = '10px';

	const odd = document.querySelectorAll('li:nth-child(odd)');
	const even = document.querySelectorAll('li:nth-child(even)');

	for (let i = 0; i < odd.length; i++) {
		odd[i].style.border = '2px solid black';
		even[i].style.border = '2px solid green';
	}

	// access with a log
	console.dir(document);
	// console.log(document.domain);
	console.log(`this is the url ${document.URL}`);
	console.log(document.doctype);
	console.log(document.all);
	console.log(document.all[3]);
	console.log(body.children);
	console.log(p.offsetHeight);
	console.log(box.offsetTop);
});
