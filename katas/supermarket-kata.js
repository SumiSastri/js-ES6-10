// Supermarket pricing

// price to supermarket in kilos
// tax on unit price 
// total price to supermarket with tax in kilos
// price to customer in kilos
// profit percent to be achieved - 50%
// offers and profitability
// how will 2 for 3 work
// how will buy 1 get one free work


var fruits = ["Apples", "Oranges", "Blueberries", "Kiwi", "Mangoes", "Pineapples", "Grapes"];
var pricePerKilo = [10, 15, 20, 30, 40, 50, 60,]
var taxPerKilo = [0.10, 0.2, 0.3]
var costToSuperMarket = function()
var profitPerKilo = 0.5
var customerPrice = function()
var twoForThree = function()
var bogof = function()
var bestProfit = function()

	

    for (let i =0; i<=6; i++){
		let div = document.createElement("div");
		div.onclick = function createProductList(id = 0, supplier = 'New Co Ltd', product = 'Wongle1', price = 0) {
            return `id: ${id}
                    supplier: ${supplier}
                    product:  ${product} 
                    price: ${price}		
            `;
        }
        createProductList(0, 'New Co Ltd', 'Small wongle', 5);
		};
		document.getElementsByTagName('section')[0].appendChild(div);
	}	
	// let productList =[
	//     {id=1, supplier: "New Co Ltd",  product: "Small wongle", price: 5},
	//     {id=2, supplier: "New Co Ltd",  product: "Super wongle", price: 12},
	//     {id=3, supplier: "New Co Ltd",  product: "Mini wongle", price: 4},
	//     {id=4, supplier: "Old Co Ltd",  product: "Small wongle", price: 6},
	//     {id=5, supplier: "Old Co Ltd",  product: "Large wongle", price: 9},
	//     {id=6, supplier: "ol Co Ltd",  product: "Super wongle", price: 13}
	// ]

	// })