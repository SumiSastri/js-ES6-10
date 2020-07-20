// encapsultation
const Dog = function() {
	let name, breed;
	return console.dir(this);
};

// instantiation - new copy of the function that creates the dog, therfore constructor invocation as the function is called in the constructor method
// the constructor method uses the new key word.
d1 = new Dog();
d1.name = 'Kaiser';
d1.breed = 'German Shepherd';

d2 = new Dog();
d2.name = 'Ginger';
d2.breed = 'German Shepherd';

console.dir(d1);
console.log(d2);
console.log(d1.name, d1.breed);
console.log(d2.name, d2.breed);
