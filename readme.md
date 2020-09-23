## History of JavaScript

Created by Brenden Eich in 1996, JavaScript was written for Netscape under the name Mocha, then changed to  "LiveScript". Microsoft renamed LiveScript for Explorer calling it JScript, or JavaScript. Standardising JavaScript fell to the hands of ECMA and JavaScript is also known as ECMA Script or ES5, ES6, ES7, ES8 and ES9 which are are updated versions of JavaScript. 

History of JavaScript a long and detailed read[https://auth0.com/blog/a-brief-history-of-javascript/]

## What is JavaScript

"JavaScript" is a trademark of Oracle Corporation in the United States. It is used under licenseby Mozilla and in JS-engines in browsers - V8(Google), Chakra(Microsoft), SpiderMonkey(Firefox). JavaScript is officially managed by Mozilla Foundation, and new language features are added periodically. However, only some JavaScript engines support these new features.

As a programming language, JavaScript is a dynamic and loosely typed script. It is read (parsed) by JavaScript engines in browsers and node modules in the backend. It needs a hosting environment as it is DOM and Node dependent. JavaScript has no concept of input or output. To enforce structure on JavaScript, Typescript, a JavaScript superscript defines types as inputs or outputs.

JavaScript is considered a non-blocking, single-threaded language because of this lack of a sense of input-output. Instead events and call-back functions in the event loop handle changes to inputs and outputs. In the front-end where users interact with an application, inputs such as clicks, mouse movements, keypad movements are "listened" to and "handled" by callback functions. The asynchronous nature of these callback functions means that several inputs can be handled simultaneously, and therefore,a single thread can handle multiple requests in a task queue, making the language non-blocking.

Known as JS as well as Vanilla JavaScript - refering to JS without frameworks or libraries, JavaScript is now one of the most popular scripting languages.

JavaScript is almost entirely object-based. In JavaScript, an object is an associative array, augmented with a prototype using classes & constructors for inheritance of the values, properties and methods associated with the class.

JavaScript uses prototypes where other programming languages use classes. Classes were introduced in ES5. This allows libraries like React to use class-based components, based on the Model-View-Control process which is different from DOM-based manipulation of HTML files.

A model of the DOM, or the virtual-DOM is created. 

More on Wikipedia [https://en.wikipedia.org/wiki/JavaScript]

This repo explores different data-types and their use in JavaScript

- Variables
- Strings
- Numbers
- Booleans
- Arrays
- Objects
   - Functions
   - Classes & Constructors
- Concepts such as Functional Programming vs. Object Oriented Programming
- JavaScript Design Patterns
- DOM manipulation & API calls

## What is ECMA-6-10 or ES-6-10

The European Computer Manufacturers Association or ECMA update and standardize JavaScript introducing new features that are cross-browser friendly. ES-5 is the last version of JavaScript that is cross-browser friendly. The new features from ES-6 onwards need Babel and other libraries to transpile code into ES-5.

### What is the call stack and critical render path?

The critical render path is how browser engines read different languages - HTML, CSS and JavaScript and the order they are read in is the call stack. HTML is parsed first, then CSS and then JavaScript.

JavaScript being a loosely typed language - stores variables that can be changed - asynchronous and single-threaded means that browsers parse the language in the most convenient order in the call stack. 

The Document Object Model (DOM), which is a copy of the node-tree on a webpage,  queries HTML and CSS and returns an object which then can be mutated. JavaScript accesses the DOM and then is run on each node. When using vanilla JavaScript, it is required to put the scripts between body and html for set up so that the browser can parse the script. With JavaScript libraries, the MVC (model-view-control) method is used to access the DOM via a virtual DOM. The method of access to the DOM depends on the library - jQuery, React-js, Node-js are library dependencies that access the DOM in different ways.

The browser complies code first by looking at the syntax (lexical compliation)
- if it detects syntax errors and the code does not run
- if it detects blocks of code in the function - conditionals, loops, variables etc., then it looks at the scope of the function and what is within and what is referenced
- then in the browser memory, it runs the new code and stores it in the window object
- by default all code is in the window scope therefore window.alert() can be called anywhere. (go to console type window to check root scope)
- Since the DOM is an internal API you have the traditional API calls
```get``` which is the ```getElement``` function. Once the data has been fetched by the DOM API, you can perform other methods available from the DOM-API ```setAttribute = post``` or ```removeElement = delete``` For example, ```-getElementsByTagName() - setAttribute() - removeElementById();``` are all the DOM-API methods.

### Why is code readability important?
Making code readable improves efficiency. Statements can be broken with the semicolon or operators. If a statement is more than 80 characters it is recommended to use breaks. Curly braces show a list of code block to be executed together ```{ }```. For namespaces to start with a number, for example browsers will try to parse (read) it as a number rather than a naming convention. Browser engines are also case sensitive, therefore ```nameOfFunction``` and ```nameoffunction``` will be read as 2 different identifiers and code breaks/ has unintended side-effects. Similarly ```id``` , ```iD``` & ```ID``` are three different name spaces. Hypens will be read as subtraction signs. Each language has its own naming conventions, lower camelCase is preferred as the first alphabet in upper case, denotes the namespace belongs to the class keyword. Similarly commas separate variables, semi-colons statements or one line of code. Browsers stop running the code when they reaches the return statement. For all these reasons code readability and the right syntax are important.


#### Front-end libraries

- Jquery - was relevant up to 2018, but with ES-6 to ES-10 the changes in JavaScript have made the key things that Jquery was useful for - DOM manipulation, in particular - possible with vanilla JavaScript

Axios and the Fetch API have made data calls easier compared to Ajax calls. 

React has taken DOM manipulation further with jsx, while there are legacy systems that depend on Jquery, many are migrating to either Vue or React.

- React
- Vue
- CSS for JS - Emotion, Styled Components, Material UI, Bootstrap, ReactStrap, Tachyons

#### End-to-end JavaScript
- Node.js/ npm (node-package-manager) -y/ nvm (node-version-manager)
- Babel transpilers 
- Express.js
- Mongoose.js (ORM) for MongoDb


Useful Links:

JavaScript tutorial & Style Guide W3 Schools [https://www.w3schools.com/js/default.asp] [https://www.w3schools.com/js/js_conventions.asp]

Improve the readability of your code [https://dzone.com/articles/10-tips-how-to-improve-the-readability-of-your-sof]

MDN Tutorial [https://developer.mozilla.org/en-US/docs/Learn/JavaScript]

The modern JavaScript Tutorial [http://javascript.info]

Do Factory [https://www.dofactory.com/tutorial/what-is-javascript] 
