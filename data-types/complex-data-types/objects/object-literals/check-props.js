// TESTING FOR PROPERTIES 1:57:47 to 1:59:20
// hasOwnProperty method with the checkProp variable

var dog = {
	name: 'Banjo',
	species: 'phyllum cordata',
	weight: 25,
	size: 12,
	eats: [ 'chicken', 'meat', 'bones' ],
	owner: {
		firstName: 'Jack',
		lastName: 'Jones',
		phoneNumber: 12345
	},
	dogBmi: function() {
		return this.weight / this.size;
	}
};

function checkDog(checkProp) {
	if (dog.hasOwnProperty(checkProp)) {
		// returns checkProp as a strictly true or false
		return dog[checkProp];
	} else {
		return 'Not a valid property for your dog object';
	}
}

// TESTING FOR PROPERTIES
// hasOwnProperty method with the checkProp variable

function checkPrimate(checkProp) {
	if (primate.hasOwnProperty(checkProp)) {
	}
}

// note the property must be declared in the param as a string
console.log('boolean check checkDog(checkProp) LOGGED TRUE', checkDog('species'));
console.log('boolean check checkDog(checkProp) LOGGED FALSE', checkDog('clown'));

// Examples
var primate = {
	name: 'Gorilla',
	species: 'simian',
	owner: {
		firstName: 'Bob',
		lastName: 'Smith'
	},
	age: 5,
	eats: [ 'fish', 'bananas', 'meat' ],
	alive: 'false',
	weight: 150,
	unit: 'kilos',
	height: 40,
	bmi: function() {
		return this.weight * this.height;
	}
};

console.log(primate.name);
console.log(primate.eats[1]);
console.log(primate.bmi());
console.log(primate.owner.firstName);

var primateName = primate['name'];
var primateOwnerName = primate.owner.firstName;
