const ownerName = {
	firstName: 'Jack',
	lastName: 'Jones',
	phoneNumber: 12345,
	fullName: function() {
		return this.firstName + this.lastName;
	}
};

// Object assiged to a variable, encapsulated & instantiated
const dog = {
	name: 'Banjo',
	species: 'phyllum cordata',
	weight: 25,
	size: 12,
	eats: [ 'chicken', 'meat', 'bones' ],
	owner: {
		firstName: 'Jack',
		lastName: 'Jones',
		phoneNumber: 12345,
		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		}
	},
	dogBmI: function() {
		return this.weight / this.size;
	}
};

const musician = {
	firstName: 'Harry',
	lastName: 'Styles',
	singles: [ 'Meet me in the Hallway', 'Sign of the Times', 'Carolina', 'Two Ghosts' ],
	genres: {
		softRock: true,
		britPop: true,
		hardRock: false
	},
	fullName: function() {
		return this.firstName + ' ' + this.lastName;
	},
	firstHit: 2001
};

// ACCESS METHODS OF AN OBJECT
console.log(dog, 'logs dog obj');
console.log(dog.name, 'logs dog encapsulated name');
console.log(dog.owner, 'logs prop - obj - owner');

//  ADD VALUES (mutablity - writable)
dog.favouriteToy = 'rag doll';
console.log(dog.favouriteToy, 'logs updated value, key favouriteToy');

// CHANGE/UPDATE VALUES (mutability - writable)
dog.name = 'Toulouse';
console.log(dog.name, 'updated name');

// THIS, the this key word in properties
console.log(dog.owner.firstName, 'logs dog-owner first name - implicit binding of THIS DOG.OWNER');
console.log(musician.firstName, 'logs musician first name - implicit binding of THIS.MUSICIAN');
console.log('logs fullName - this - MUSICIAN', musician.fullName());
console.log('logs fullName - this -  DOG.OWNER', dog.owner.fullName());
