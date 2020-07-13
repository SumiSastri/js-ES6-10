const createPrinter = () => {
	const myFavouriteNumber = 42;
	return () => console.log(`My fave number is ${myFavouriteNumber}`);
};

const printer = createPrinter();
printer();

// closures and functional-way vs. OOP-way - access to information from the function in the function call
const Teacher = ({ name, age, level }) => {
	let _name = name;
	let _age = age;
	let _level = level;

	return {
		getName: () => _name,
		getAge: () => _age,
		getLevel: () => _level,

		setName: (newName) => (_name = newName),
		setAge: (newAge) => (_age = newAge),
		setLevel: (newLevel) => (_level = newLevel)
	};
};

const t1 = Teacher({ name: 'Brandy', age: 25, level: 'Primary school' });
console.log(t1.getName());
console.log(t1.setLevel('SecondarySchool'));
