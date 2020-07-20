//  the get and set methods help you change values in an object

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

// javascript getters and setters return better data quality
// because of simpler syntax and an equal syntax for methods and props
// setters can have only one value, so the return statement if it is a function statement must be assigned to the param
var dog = {
	name: 'Banjo',
	species: 'phyllum cordata',
	weight: 25,
	size: 12,
	eats: [ 'chicken', 'meat', 'bones' ],
	owner: {
		firstName: 'Jack',
		lastName: 'Jones',
		phoneNumber: 12345,
		get fullName() {
			return this.firstName + this.lastName;
		}
	},
	set dogBmi(bmi) {
		return (bmi = this.weight / this.size);
	},
	set species(uppercase) {
		return (uppercase = this.species.toUpperCase());
	}
};
