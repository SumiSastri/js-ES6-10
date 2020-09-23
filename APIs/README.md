## API's
Application Programming Interfaces allow a transfer of data (resources) from clients to servers. Data is transported in Java Script Object Notation(JSON) files or XML files. It is an architectural style used for client-server communications.

## SOAP vs. REST?
SOAP is an acryonym for Simple Object Access Protocol while REST is an acryonynm for Representational State Transfer (REST). Both are Application Protocol Interfaces that enter into the cycle of calling, posting, updating and deleting data during the client-server request-response cyle is also called the CRUD cycle - Create, Read, Update, Delete.

API's call the data from the database, posts this data on the web-page, updates the data that it receives from the front-end, sends it back to the backend and saves it or if it is not needed the data is deleted.

SOAP, initially created by Microsoft, is a more rigid way of accessing databases. SOAP relies on XML calls while REST on JSON. SOAP works better with legacy systems such as the Distributed Component Object Model (DCOM) and Common Object Request Broker Architecture (CORBA).

SOAP is a more rigid system that is intolerant of errors. However, SOAP processes can be automated and can be used with STMP (simple mail transfer protocol) as well as HTTP, which means data can be transfered not just to the web but via electronic mail systems.

REST is light-weight becuase of JSON and JavaScript developers prefer REST to SOAP as a significant amount of code needs ot be written to transform XML data.

In the CRUD cycle, REST has only four easy to memorise methods that describe everything that the API call does - get, post, put and delete.

The methods represent the current state of the object - that is where the name Representational State Transfer (REST) gets it's name and in what state (or payload/data) it is in during transit from client to server.

It is therefore an architectural style for communicating between client-server. It is a state-less model as the payloads are merely a representation of state at calltime.

There is no choice between using SOAP or REST as it is already pre-defined as an architectural service and you have to use the system that the API creator requires.

Some sites, like Amazon, support both.

A good blog to read [https://smartbear.com/blog/test-and-monitor/understanding-soap-and-rest-basics/] and a little more technical version [https://www.soapui.org/learn/api/soap-vs-rest-api.html]

Restful-React - As React defines itself as a front-end library, it allows users to figure out what works best for the app - this provides building blocks and flexiblity it also means that there are no protocols to follow, it does not prescribe how REST API's should be created.

Read More on API's and MVC [https://www.codecademy.com/articles/what-is-rest] [https://www.codecademy.com/articles/mvc]

## Why REST
A continuous, high volume flows of data from client to server, using  the REST API simplifies the process of requesting data and getting a response from the server. This is because only a representational state of the data is transfered via an object (JSON) from the client to the server in a request, and responses are returned in a representational state back from the server to the client. This reduces the bandwidth required for the transfer of data and is highly suitable for web/mobile applications. It also has better documentation and error logs and has replaced SOAP.

Set out by Dr. Fielding in the year 2000. REST is based on six principles that define the design principles of REST

### Stateless
 - the representational state contains all information required from the client in the request so that the server understands the request and responds with the right data. Requests from the client are
 - the URL (unique resource locator)
 - the query string parameters
 - the request header, the request body which holds the state or the information sent by the request from the resource
 - the server then returns all the information that the client requests in the response
 - via headers and the response body and a status log system 200 (OK)/ 300(redirects)/ 400(errors) helps in debugging

### Client-Server
The separation of concerns 
 -  the client sends the request
 -  the servers sends the response
 There is a uniform interface separating the client from the server which improves scalability and portability of the system over multiple platforms. 

###  Uniform Interface
There are four constraints to uniform interface that REST has identified and dealt with to ensure uniformity of the interface
- Resource identification
- Resource manipulation using representations
- Self descriptive messages 
- Hyper media as the engine of the application state - ie requests and responses sent through hyper-text-transfer-protocols

### Cacheable
Browsers must get the response so that they are cacheable and can be used again by the client. Server responses are labelled either implicitly or explicitly  as cacheable. This allows the client cacher in the browser to reuse the data in the cache at a later stage without depending on the reuse of state data.

### Layered System
Stability via limiting components behaviour. Benefits of the layered system are 
- Load balancing
- Shared caches for scalability
- Security - components can not interact with layers above it, only the immediate layer above it

### Code on Demand
Client code can be downloaded extended via the interface used by the application

### Step 1: Set up your local host server with Express

[npm install express]
Express is a node package that you can download and create a server for development purposes.

You can create routes from a unique resource locator (URL) that you set up with the Express router module.

To connect the route, you set up a local host post and create a route (localhost:3000/name-of-route) for the API calls. This allows you to
 - get data (a resource) from the local host URL
 - post data (the resource) from the local host URL (by sending a request) to a database
 - getting back the response from the database with the resource required
 - updating the data (resource) on the local host URL with the data (resource, payload) of the data from the database

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('home route working');
});

app.listen(port, () => console.log(`server connected on ${port}`));
```   

 - set up your server and your home route and make sure the route works by going to the local host you have set up and the home page

 ```localhost:3000/```


### Step 2: Connect your response and request routes with Middleware

To make sure the routes you need are connected you need to use the middleware method ```app.use()``` this connects the requests to the responses

First test this in the server app
```
app.use('/products', () => {
	console.log('Middleware set up');
});

```
- check this is working by going to the route - you should get the message in your terminal console that your middleware is set up

```localhost:3000/products```


Then you need to initialize 4 routes - GET, POST, PUT & DELETE. 

Create a new folder for your routes and set up your four routes with the Express Router. You are then exporting the router into your Express app.

```
const express = require('express');
const router = express.Router();


// get collection of products from products-db
router.get('/', (req, res) => {
	res.send({ type: 'GET FROM COLLECTION' });
});

// add new products to products collection
router.post('/', (req, res) => {
	res.send({ type: 'POST TO COLLECTION' });
});

// update products collection - need to find the exact document to update
router.put('/:id', (req, res) => {
	res.send({ type: 'UPDATE BY ID' });
});

// find the exact document to delete
router.delete('/:id', (req, res) => {
	res.send({ type: 'DELETE BY ID' });
});

module.exports = router;
```

Once you have set up these routes you import these routes into the express app by declaring a variable and assigning the file relative path to the routes. 

You then are ready to use the middleware ```app.use()```. Initially when you import the file you are just checking that you have the right file path. Once you have the right path, you can refactor the code to take out the variable and assign it as a parameter in the ```app.use()``` method.

```
<!-- const routes = require('./routes/products') can be refactored to --> 
app.use('/products', require('./routes/products'));
```

### Step3: Use Postman/ Insomnia/ Nodemon to test routes 

[npm install nodemon]
In your package JSOn file change the scripts so that you can run start with npm commands - use the relative path of your Express app to point nodemon to the file it needs to fire up on start. 

```
"scripts": {
		"start": "nodemon backend/app.js"
	},
```

 You are now ready to start your backend server [npm run start]
 Once your server is up and running and listening on your local host port, use either Postman or Insomnia to visualise browser data without having to create a frontend route.

  Make sure that the data flows from frontend to backend by running the four CRUD requests - get, post, put, delete. You will then see the messages that you have created as object literals. You can test these routes due to the cacheable nature of the REST API, the data in the cache can be used to test and set up backend routes and connect them to the frontend as you set up the UI-UX.

  To acctually send data you will need body-Parser to change the data shape to JSOn for both requests and responses. Parsing this data is important and can be done with HTML, XML or JSOn. 

### Step 4: Add Body Parser for a JSOn response

[npm install body-parser] 
import package into the Express app 
```const bodyParser = require('body-parser');```

Use the JSOn parser as midware in the server ```app.use(bodyParser.json());``` to connect the responses and requests which will be transfered in their representational state as a JSOn file.

Because the API is a layered system, the order of how the middleware is stacked is important. The request goes first through the parser, then to the routes and then parses the body of the text in the routes. 

```
app.use(bodyParser.json());
app.use('/products', require('./routes/products'));
```
While some tutorial recommend the way that you use the parser is with this param, ensuring that you specify that you want your response to be parsed with JSOn will ensure that you can check these routes in JSON with Postman and Insomnia - so use this replacement code bearing that in mind.

```app.use(bodyParser.urlencoded({ extended: true }));```


### Step 5: Connect to a DB 
- Structured Query Language - SQL, PostgreSQL
- Not Structured Query Language - NoSQL

MongoDb is a NoSQL Db
- Models - represents the collections in the db (user model, product model, etc.)
- Collection - a collection of data/ documents/ fields (represents a single model all the products in the product model)
- Schemas - define the structure of the objects in the collection (the structure of a single product object)


Install MongoDB in your terminal globally
Install it with Homebrew with a Mac
type mongo --version in terminal for version [MongoDB shell version v4.2.1]

[npm install mongoose] for a project

create a new folder for your models

```
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	supplier: {
		type: String,
		required: true
	},
	product: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Product', ProductSchema);
```

OR

```
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ProductSchema = new Schema({
	supplier: {
		type: String,
		required: true
	},
	product: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

module.exports = mongoose.model('Product', ProductSchema);
```
You can use the schema creation method and export this schema to the Express server, import the mongoose package into a new file. Assign your schema to a variable and use the ```mongoose.Schema({})``` method.

Export the schema using the common js method ```module.exports``` method and assign this method to the ```mongoose.model(nameOfModel, SchemaToUseName)``` method.

You import the model by its name, store it as a variable and assign the variable to the file path of the schema - ```const nameOfModel = require ('nameOfFilePath')``` into the express server so that you can connect the schema to the route.

MongoDB is running in the background, but we need to explicitly connect to the DB. There are 3 ways to do this. Manual one working


```const mongoose = require('mongoose');``` import the package into the Express server

Online in Mongo-Atlas -  create a database name, whitelist your IP address, create a cluster in the free sandbox option, create a db user name and autogenerate a random password - this is safer and save this connect method in the dotenv file (this is if you want to connect server base)


Mongoose is a midware that connects MongoDB to your server with the mongoose connect method in the Express app, the password and user name of your MongoDB collection are processed through the dotenv files. If you want to connect via the cloud server


```
mongoose.connect('process.env.DB_CONNECTION', { useNewUrlParser: true }, () =>
	console.log('testing mongo-db connection')
);
```

In the dotenv file add the connection
```DB_CONNECTION='mongodb+srv://username:<password>copied text from clipboard online’```

The manual method is easier - connect it to local host

```
const url = 'mongodb://localhost:27017/products-db';
mongoose.connect(url, { useNewUrlParser: true }, (error) => {
	if (!error) {
		console.log('mongo-db connection working');
	} else {
		console.log('check mongo-db connection');
	}
});
```	

### dotenv package

[npm install dotenv]
```require('dotenv/config');``` import the file configuration into the Express server.

Create a ```.env``` file create a db-connection variable that can be imported into the server and assign it with the connection's username and password ```DB_CONNECTION = storeForUserNamesPasswordsToProtect```

### Step 6: Connecting your server routes to MongoDB

Using Mongoose, now change the code in your post route to update the database with new data from the model & schema files. As the process takes some time for both the request and response, the post route needs to use the async-await and try-catch blocks.

```
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/productsData.js');

// get collection of products from products-db
router.get('/', (req, res) => {
	res.send({ type: 'GET FROM COLLECTION' });
});

// add new products to db
router.post('/', async (req, res) => {
	// console.log(req.body);
	const product = new Product({
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
	try {
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});
```

Now test the route again in Postman, you should see an id and a version which have been added to the product data object.

```
{
    "_id": "5df7d75010fcfd2748bd855f",
    "supplier": "Old",
    "product": "XL Wongle",
    "price": 25,
    "__v": 0
}
```

### RobotMongo

Go into RobotMongo - click new connection and you will see your db. Now you need to set up your routes differently with async await and try/ catch blocks
 

```
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/productsData.js');

// get collection of products from products-db
router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.json({ message: err });
	}
});

// add new products to db
router.post('/', async (req, res) => {
	// console.log(req.body);
	const product = new Product({
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
	try {
		const savedProduct = await product.save();
		res.status(200).json(savedProduct);
	} catch (err) {
		res.status(422).json({ message: err });
	}
});

// need to find the exact document to delete
router.delete('/:id', (req, res, next) => {
	Product.findByIdAndRemove({ _id: req.params.id }).then(function(product) {
		res.send(product);
	});
});
// identify resource by id, get the body of resource, find the corresponding resource in DB by id,
// send request body to server to update db collection by exact id

router.put('/:id', (req, res, next) => {
	Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true
	}).then(function(product) {
		res.send(product);
	});
});

module.exports = router;


```

You will need to test each of these routes work in Robot3T. At this stage the server keeps crashing with the slightest syntax error and can be hard to debug. So watch the syntax!


### Connecting to the front-end with the Fetch API, Path & CORs packages

[npm install cors]
Data may not flow from your back-end local server to the front-end. This is due to cross-origin-resource blocking. The cors package in node helps us to disable CORs blocking. We need to import the package into our server.

```const cors = require('cors');```

Now you can go into your front-end files and use the fetch API.

```
fetch('http://localhost:3000/products')
		.then((result) => {
			return result.json();
		})
		.then((result) => {
			console.log(result);
		});
```		
Once you see the API connection is working you can now access your data

```
fetch('http://localhost:3000/products')
		.then((result) => {
			return result.json();
		})
		.then((data) => {
			console.log(data);
		});
```
Check you have your data in the console and proceed to use a front-end frame work of your choice.		

### APPENDIX 1: Using CLI to populate MongoDB

show dbs [show databases]
db [check which db you are in]
db.drop nameOfDb [delete a db created]

use nameOfDb [switch to database created 
eg. ```use products-db```] 

db.CreateCollection('nameOfCollection') [create a collection of documents
eg. ```db.CreateCollection('products')```]

show collections [shows all collections of documents in db]
db.nameOfCollection.insert({}) [insert data/documents/rows]

```
db.products.insert({
service: "New Co Ltd",
products:"Small Wongle",
price: 5,
tags:["uk", "eu", "usa"],
user: {
	name:"Jack Ma",
	email:'jack@ma.com'
},
date:Date()
})
```

db.nameOfCollection.insertMany([{}]) [insert multiple documents as an array of objects]

```
db.products.insertMany([
{
service: "Old Co Ltd",
products:"Small Wongle",
price: 3,
tags:["uk", "eu", "usa"],
user: {
	name:"Jack Ma",
	email:'jack@ma.com'
},
date:Date()
},

{
service: "Old Co Ltd",
products:"Medium Wongle",
price: 10,
tags:["uk", "eu", "usa"],
user: {
	name:"Joe May",
	email:'joe@may.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Medium Wongle",
price: 12,
tags:["uk", "eu", "usa"],
user: {
	name:"Jamila Manzoor",
	email:'jamila@manzoor.com'
},
date:Date()
},

{
service: "New Co Ltd",
products:"Large Wongle",
price: 15,
tags:["uk", "eu", "usa"],
user: {
	name:"Jayanthi Maniranthnam",
	email:'jaya@manirathnam.com'
},
date:Date()
}

])
```

db.nameOfCollection.find().pretty() [see the whole collection in a readable format eg. ```db.products.find().pretty()```]

db.nameOfCollection.find({key: "value"}).pretty() [see a particular part of the data entry eg. ```db.products.find({products: "Small Wongle"}).pretty()``` ]

db.nameOfCollection.find().sort({key:-1}).pretty() [sort in descending order eg. ```db.products.find().sort({price: -1}).pretty()```]
db.nameOfCollection.find().sort({key:1}).pretty() [sort in ascending order]

Scaffolding
npm init -y (default values)
[node init] Node in project
Meta-data in package JSOn - (set entry point - scripts.js)
npm install -g  nodemon express cors dotenv path body-parser (server dependencies)
npm install -g  mongoose mongodb (database dependencies)