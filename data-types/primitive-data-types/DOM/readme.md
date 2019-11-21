## What is event bubbling

When there are nested elements, the event flow is from parent to child. Therefore when a parent element has a handler all the children inherit the event and data flow is top downwards. The child elements have no influence on the parent element.


```document.getElementsByTagName('title');
document.getElementsByClassName('style');
document.getElementsById('style');

document.querySelector('p')[1].parentElement.parentElement.children;
document.querySelectorAll('li');

getAttribute;
setAttribute;

classList.add;
classList.remove;
classList.toggle;

document.querySelector('p').innerHTML;
```