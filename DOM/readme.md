## What is the Document Object Model (DOM)?

The DOM is a structured representation of the HTML document as a tree of elements and nodes created by the browser in an object-oriented representation. The document is the HTML document, the model is the node model of all the elements in the HTML document, and the object is the conversion of each of these elements into JavaScript objects.

JavaScript engines in browsers parse (or reads) the DOM-tree starting with the HTML root, traversing the body and all the child elements in order. Each node of the DOM tree is accessed by the JavaScript engine. As each element and node is in the form of a JavaScript object, there are certain defined methods that can be used to access and transform each element.

The modern DOM is built on mutiple API's, but the DOM itself is not a programming language. It is a programming interface for other programs to access HTML and XML documents.

Object oriented programming methods of abstraction, encapsulation & polymorphism are used by several languages, not just JavaScript. DOM API's allow Python, for example, also to access the DOM.

Reading List:
[https://www.w3.org/TR/DOM-Level-2-Core/introduction.html]
[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction]
[https://en.wikipedia.org/wiki/Document_Object_Model]
[https://www.digitalocean.com/community/tutorials/introduction-to-the-dom]

## How does JavaScript interact with the DOM?

The parent object of the DOM is the window object, followed by the document object, with is an object oriented representation of the HTML elements. 

1. Access of the element & node: To access HTML elements, the DOM document has certain key methods.

```
document.getElementByTagName("nameOfTag")
document.getElementByClassName('nameOfClass')
document.getElementById('nameOfId')
document.querySelector('#nameOfId')
document.querySelector('.nameOfClass')

```

2. Access of the multiple elements & the node-list: Using the above methods returns ONLY a single element or single node. When there are nested elements the methods used to access these elements ALWAYS return an array of objects and array methods can be used to access the individual items in the element or node list. 

```
document.getElementsByTagName('nameOfTag')[0] 
document.getElementsByClassName('nameOfClass')[0]
document.querySelectorAll('.nameOfClass')[0]
document.querySelectorAll('#nameOfId')[0]
```

3. Storing or caching the DOM

Once the element has been accessed to mutate or morph it into different forms, the DOM element is stored in a variable. As we have seen a variable is a temporary store of data. All variables if they are stored with the ```const``` key word can not be reassigned a value whilst ```let``` as a key word can be reassigned a value.

As these are not hoisted, caching the DOM and declaring them as variables is the first step.

```
	const body = document.querySelector('body');
	const h1 = document.createElement('h1');
```
 
4. Once you have cached the DOM, the variables can be used to modify them and add event listeners

```
    h1.innerHTML = 'this box has been created by the document.createElement method';
	h1.style.color = 'grey';
	h1.style.border = '2px solid green';
	h1.style.padding = '20px';
	body.appendChild(h1);
	console.log(h1.offsetHeight);
```
## What are JavaScript Events and how do they interact with the DOM?

Events are notifications to the code base to do something based on user interaction. They are call back-functions and are called only once all the other functions in the execution stack have been called.
Multiple events can be fired at the same time due to the asynchronous, single-threaded nature of JavaScript.

The call stack or message queue, is where the event listeners are queued, waiting for an event to occur. An event occurs when the user interacts with the UI and then the event listener methods are called.

Event methods take 2 arguments - the event type (click, mouseover, scroll down, type key etc.,) - the call back function which executes actions based on the event type.

```
const clickBtn = document.getElementById('click');
clickBtn.addEventListener('click', (e) => {
	console.log("I've been clicked!");
	console.log(e.target);
});
function changeColor() {
	clickBtn.style.color = 'red';
}
```
## What event bubbling?

The event flow in the DOM is from parent to child. Therefore when a parent element has a handler all the children inherit the event and data flow is top downwards. The child elements have no influence on the parent element.

This leads to event bubbling when an event is fired in the DOM.  If you click event listener on an element this event will be fired all the way up the tree to the parent and grandparent element.  

In order to prevent this we can use e.stopPropagation() at any point in the DOM tree. Event bubbling is also halted when you specify the event's target and value by using the document object methods that call the API keys of the DOM. 

## Types of events?
- Click Events: one of the most common type of events where functions are written to change the behaviour of an element, or elements, when the user clicks a button, link, area of the screen.
- Mouse Events: where mouse movements are tracked
- Key Events: key-pad events like keypressed up or down
- Change-events: In forms where inputs are added by user and the data is controlled by the inputs they type in - text, filters, radio buttons/checkbox/ toggle selections

