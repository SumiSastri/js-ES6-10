const person1 = (createPerson = (firstName, lastName) => {
	return firstName + lastName;
});
console.log('person1 x1', person1('Jane', 'Doe'));

const updatePerson1FirstName = createPerson('Jenny', 'Peckham');
console.log('updatePerson1FirstName', updatePerson1FirstName);
console.log('person1 x2', person1);

const todoItem1 = {
	name: 'Learn JavaScript',
	deadline: Date.now()
};
const todoItem2 = {
	name: 'Learn React',
	deadline: Date.parse('01 Sep 2020 00:12:00 GMT')
};

const todoItems = [ todoItem1, todoItem2 ];
console.log(todoItems);

const filterItems = todoItems.find((item) => {
	return item.name === 'Learn React';
});
console.log(filterItems);
