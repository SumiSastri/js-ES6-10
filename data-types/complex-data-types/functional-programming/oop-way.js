class Person {
	constructor(firstName, lastName, age) {
		(this.firstName = firstName), (this.lastName = lastName), (this.age = age);
	}

	increaseAge = () => {
		return (this.age += 1);
	};

	changefirstName = (newfirstName) => {
		return (this.firstName = newfirstName);
	};
}

let p1 = new Person('Jane', 'Doe', 18);
console.log('logs p1 x1', p1);
console.log('logs p1.increaseAge', p1.increaseAge());
console.log('logs p1.changefirstName', p1.changefirstName('John'));
console.log('logs p1 x2', p1);

class Student {
	constructor(firstName, lastName) {
		(this._firstName = firstName),
			(this._lastName = lastName),
			(this._initials = `${firstName.charAt(0)} ${lastName.charAt(0)}`);
	}

	setFirstName = (newName) => {
		this._firstName = newName;
		this._initials = `${this._firstName.charAt(0)} ${this._lastName.charAt(0)}`;
	};
}

let s1 = new Student('Jane', 'Doe', 18);
console.log('logs s1 x1', s1);
console.log('logs s1.setFirstName', s1.setFirstName('Freddy'));
console.log('logs s1 x2', s1);

// spread operator

const combinedP1S1 = {
	...p1,
	...s1
};

console.log(combinedP1S1);
