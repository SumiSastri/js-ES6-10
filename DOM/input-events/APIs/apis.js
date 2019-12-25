// / FREE CODE CAMP WORKIING
$(() => {
	console.log('jquery working');
	const h1 = $('h1');
	h1.css('color', 'blue');
	const h3 = $('h3');
	h3.css('color', 'green');
	const form = $('#form-create-records');
	const display = $('#display');
	const supplierInput = $('#supplier-input');
	const productInput = $('#product-input');
	const priceInput = $('#price-input');
	let supplierUpdate = supplierInput.val();
	let productUpdate = productInput.val();
	let priceUpdate = priceInput.val();

	const getProductData = () => {
		fetch('http://localhost:3000/products', {
			method: 'GET'
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				displayProductList(data);
			});
	};
	getProductData();

	// from product collection-document-resource in db
	const buildIds = (product) => {
		return {
			editId: 'edit_' + product._id,
			deleteId: 'delete_' + product._id,
			tdId: 'tdItem_' + product._id,
			supplierId: 'supplier' + product._id,
			productId: 'product' + product._id,
			priceId: 'price' + product._id
		};
	};

	// from db product collection returned as array and ids set up in function
	const buildTableLayout = (product, ids) => {
		return `
				<div class="table-responsive">
					<table class="table">
					<th>
					<td scope="row" class="text-left">Supplier</td>
					<td scope="row" class="text-left">Product</td>
					<td scope="row" class="text-left">Price</td>
					</th>	
					<tbody class="table text-justify">
		<td scope="row id"${ids.tdId}"></td>
		<td scope="row" id ="${ids.supplierId}">${product.supplier}</td>
		<td scope="row " id ="${ids.productId}">${product.product}</td>
		<td scope="row" id ="${ids.priceId}">${product.price}</td>
		<td class="text-justify">
		<button type="button" name="edit" id="${ids.editId}" class ="btn btn-primary">Edit Record</button>
		<button type="button" name="delete" id="${ids.deleteId}" class ="btn btn-danger">Delete Record</button>
		</td>
				
		</tr>
		</tbody>
		</table>
		</div>	                          
		`;
	};

	const displayProductList = (data) => {
		data.forEach((product) => {
			let ids = buildIds(product);
			console.log(ids);
			display.append(buildTableLayout(product, ids));
		});
	};

	$('#search').keyup(function() {
		search_table($(this).val());
	});
	function search_table(value) {
		$('#display tr').each(function() {
			let found = 'false';
			$(this).each(function() {
				if ($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0) {
					found = 'true';
				}
			});
			if (found == 'true') {
				$(this).show();
			} else {
				$(this).hide();
			}
		});
	}

	// FRONT END POST, submit button working data sent to server body not saved - returning empty body
	// working on postman - check

	form.submit((e) => {
		e.preventDefault();
		fetch(`http://localhost:3000/products`, {
			method: 'post',
			body: JSON.stringify({
				supplier: supplierUpdate,
				product: productUpdate,
				price: priceUpdate
			}),
			headers: {
				'Content-type': 'application/json; charset-utf-8'
			}
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.res.ok) {
					let ids = buildIds(data.savedProduct);
					display.append(buildTableLayout(data.savedProduct, ids));
				} else {
					console.log('something went wrong');
				}
			});
	});
});


// editRecord(data.document, supplierId, productId, priceId, editId);
// deleteRecord(data.document, supplierId, productId, priceId, deleteId);

// CREATE SECTION HTML
     // <!-- <h3>Add suppliers & products</h3>
     //    <form id="form-create-records">
     //        <label for="supplier">Supplier</label>
     //        <input type="text" id="supplier-input" class="form-control"
     //            placeholder="Insert supplier name - required field*" value="">
     //        <label for="product">Product</label>
     //        <input type="text" id="product-input" class="form-control"
     //            placeholder="Insert product name - required field*" value="">
     //        <label for="price">Price</label>
     //        <input type="text" id="price-input" value=""
     //        class="form-control" placeholder="Insert price (£) - required field*">
     //        <br>
     //        <button type="submit" value="Add Record" name="submit" id="add" class="btn btn-success">Create
     //            Record</button>
     //    </form> -->

	// CREATE RECORD NOT WORKING, BUTTON WORKING
	// FRONT END POST
	form.submit((e) => {
		e.preventDefault();
		fetch(`http://localhost:3000/products`, {
			method: 'post',
			body: JSON.stringify({
				supplier: supplierUpdate,
				product: productUpdate,
				price: priceUpdate
			}),
			headers: {
				'Content-type': 'application/json; charset-utf-8'
			}
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.res.ok) {
					let ids = buildIds(data.savedProduct);
					display.append(buildTableLayout(data.savedProduct, ids));
				} else {
					console.log('something went wrong');
				}
			});
	});

	// editRecord(data.savedProduct, ids.tdId, ids.editId);
	// deleteRecord(data.savedProduct, ids.tdId, ids.deleteId);
	// 	const resetInputs = () => {
	// 		supplierInput.val('');
	// 		productInput.val('');

	// }

// OTHER ATTEMPTS NOT WORKING

1. 
const createRecord = () => {
form.submit((e) => {
		e.preventDefault();
		fetch(`http://localhost:3000/products`, {
			method: 'post',
			body: JSON.stringify({
				supplier: supplierUpdate,
				product: productUpdate,
				price: priceUpdate
			}),
			headers: {
				'Content-type': 'application/json; charset-utf-8'
			}
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				console.log(data);
				if (data.res.ok) {
					let ids = buildIds(data.savedProduct);
					display.append(buildTableLayout(data.savedProduct, ids));
				} else {
					console.log('something went wrong');
				}
			});
	});
}
createRecord();	
	
	// 			if (data.result.ok == 1 && data.result.n == 1) {
	// 				let ids = buildIds(data.savedProduct);
	// 				display.append(buildTableLayout(data.savedProduct, ids));				
	// 			} else {
	// 				console.log('something went wrong');
	// 			}


		// 	success: function(data) {
		// 		window.location.href = 'index.html';
		// 	},
		// 	error: function(status, err) {
		// 		console.log(status,err);
		// 	}

			// console.log(data);	
				// if (data.res.ok) {
				// 	console.log('success');
				// } else {
				// 	console.log('something went wrong');
				// }

// EDIT RECORD & BUTTON NOT WORKING

let editButton = $(`#${editId}`);
	editButton.click(function(e) {
		console.log('edit button working');
	});;

	const editRecord = (product, tdId, editId) => {
		let editButton = $(`/#${_id}`);
		editButton.click((e) => {
			fetch(`http://localhost:3000/products/${_id}`, {
				method: 'PUT'
			})
			body: JSON.stringify({
				supplier: supplierInput.val(),
				product: productInput.val(),
				price: priceInput.val()
			}),
			headers: {
				'Content-type': 'application/json; charset-utf-8'
			}
		})

// DELETE RECORD & BUTTON NOT WORKING

let deleteButton = $(`#${deleteId}`);
	deleteButton.click(function(e) {
		console.log('delete button working');
	});;

const deleteRecord = (product, tdId, deleteId) => {
			let deleteButton = $(`#${deleteId}`);
			deleteButton.click(function (e)  {
				console.log('delete button working');

             })
				fetch(`http://localhost:3000/products/${_id}`, {
					method: 'DELETE'
				})
					.then((res) => {
						return res.json();
					})
					.then((data) => {
						if (data.ok == 1) {
							$(`#${tdId}`).remove();
						}
					});
			});
		};
	});








// BRAD ABORTED DUE TO AJAX VS FETCH

// $.ajax( { url: "https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey",
// 		  data: JSON.stringify( { "x" : 1 } ),
// 		  type: "POST",
// 		  contentType: "application/json" } );

	// let $td = $('td');

		// $('#add').on('click', function(e) {
	// 	e.preventDefault();
	// 	console.log('addrecord - button - working');
	// });
	// $('#edit').on('click', function(e) {
	// 	e.preventDefault();
	// 	console.log('editrecord - button - working');
	// });
	// $('#delete').on('click', function(e) {
	// 	e.preventDefault();
	// 	console.log('deleterecord - button - working');
	// });

	// function getData(){
	// 	$.ajax({
	// 		url: 'http://localhost:3000/products'}.done(function(data){
	// 			console.log(data)
	// 		let output = '<td>';
	// 		$.each(data, function(key,data){
	// 			output += '<td>';
	// 		})
	// 		})
	// }

// $.ajax({
		// 	url: 'http://localhost:3000/products',
		// 	data: JSON.stringify({
		// 		supplier: supplier,
		// 		product: product,
		// 		price: price
		// 	}),
		// 	type: 'POST',
		// 	contentType: 'application/json',
		// 	success: function(data) {
		// 		window.location.href = 'index.html';
		// 	},
		// 	error: function(xhr, status, err) {
		// 		console.log(err);
		// 	}
		// });

// BACKEND TRIALS

// dev-ed with error status codes working
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
		res.status(400).json({ message: err });
	}
});

	// DEV-ED LAST REFACTOR ASYNC/AWAIT WORKING
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

  // NET NINJAS REFACTOR WORKING
  router.post('/', (req, res) => {
	Product.create(req.body);
	res.send({
		type: 'POST',
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
});


  // NET NINJAS WORKING
  router.post('/', (req, res) => {
	// console.log(req.body);
	const product = new Product(req.body);
	product.save();
	res.send({
		type: 'POST',
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
});

// NET NINJA LAST REFACTOR NOT WORKING
router.post('/', (req, res) => {
	Product.create(req.body).then(function(product) {
		res.send(product);
	});
});



  // DEV-ED WORKING - ORIGINAL
router.post('/', (req, res) => {
	console.log(req.body);
	const product = new Product({
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
	//save to database
	product
		.save()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

// DEV-ED NOT WORKING
router.post('/', async (req, res) => {
	console.log(req.body);
	const product = new Product({
		supplier: req.body.supplier,
		product: req.body.product,
		price: req.body.price
	});
	//save to database
	product
		.save()
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});

		try {
			const products = await Product.find();
			res.json(products);
		} catch (err) {
			res.json({ message: err });
		}
	});

// update products collection - need to find the exact document to update
router.put('/:id', (req, res) => {
	res.send({ type: 'UPDATE BY ID' });
});

// need to find the exact document to delete  working
router.delete('/:id', (req, res, next) => {
	Product
	.findByIdAndRemove({ _id: req.params.id })
	.then(function(product) {
	res.send(product);
	});
});

// need to find the exact document to delete
router.delete('/:id', (req, res) => {
	res.send({ type: 'DELETE BY ID' });
});
 


// identify resource by id, get the body of resource, find the corresponding resource in DB by id,
// send request body to server to update db collection by exact id

router.put('/:id', (req, res, next) => {
	Product.findByIdAndUpdate({ _id: req.params.id }, req.body,{
		new:true})
		.then(function() {
				.then(function(product){
					res.send(product)
			});	
});



