//ES-6 template literals - string interpolation examples

let nameBuilder = function(firstName = 'jane', lastName = 'doe') {
	console.log(`${firstName} ${lastName}`);
};
nameBuilder();

function createEmail(firstName = 'jane', lastName = 'doe', purchasePrice = 0) {
	let shipping = 5.95;
	console.log(
		`Hi ${firstName} ${lastName}, thanks for buying our gift box!
		   Total: GBP ${purchasePrice}
		   Shipping: GBP ${shipping}
		   Grand Total: GBP ${purchasePrice + shipping}
   Don't forget to print this receipt!		
   `
	);
}
createEmail('Ram', 'Narayan', 100);
