let car = {
	make: 'BMW',
	model: 'Sports',
	series: 3
};

let suv = {
	make: 'Mazda',
	model: 'SUV',
	gears: 5
};

let updateSUV = {
	make: 'Honda',
	model: '4x4',
	gears: 7
};

let updatedSUV = {
	...suv,
	...updateSUV
};

let htv = {
	type: 'Lorry',
	manufacturer: 'Mercedes'
};
// does not support duplicates, will use first one called (last in series)

let carOrsuv = {
	...car,
	...suv
};

// even specifiying key-value pairs does not fix it
let carAndSUV = {
	make: car.make,
	model: car.model,
	...suv
};

let suvAndHTV = {
	...suv,
	...htv
};

let selectData = {
	make: car.make,
	type: htv.type,
	model: updatedSUV.model
};

// you can update the data

console.log('car', car);
console.log('suv', suv);
console.log('updated SUV', updatedSUV);
console.log('carOrSUV', carOrsuv);
console.log('carAndSUV', carAndSUV);
console.log('suvAndHTV', suvAndHTV);
console.log('selectData', selectData);
