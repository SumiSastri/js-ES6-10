// classes are prototypes - this is how a class is transpiled under the hood

const animalSound = function(sound) {
	console.log(sound);
};

const Parrot = function() {
	let name, breed;
};
Parrot.prototype.animalSound = animalSound;
p1 = new Parrot();
p1.name = 'Long Jon Silver';
p1.breed = 'MacCaw';
p1.animalSound = 'Squaak';

const Dog = function() {
	let name, breed;
};
Dog.prototype.animalSound = animalSound;
d1 = new Dog();
d1.name = 'Razor';
d1.breed = 'Poodle';
d1.animalSound = 'Woof';

const Cat = function() {
	let name, breed;
};
Cat.prototype.animalSound = animalSound;
c1 = new Cat();
c1.name = 'Ciara';
c1.breed = 'Tabby';
c1.animalSound = 'Meow';

console.log(p1.animalSound);
console.log(d1.animalSound);
console.log(c1.animalSound);
