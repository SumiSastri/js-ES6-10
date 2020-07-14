const repairs = [
	{
		postCode: 'W13',
		repairType: 'general-maintenance',
		repairCost: 250
	},
	{
		postCode: 'W6',
		repairType: 'general-maintenance',
		repairCost: 1500
	},
	{
		postCode: 'UB3',
		repairType: 'general-maintenance',
		repairCost: 100
	},
	{
		postCode: 'W13',
		repairType: 'boiler',
		repairCost: 5000
	},
	{
		postCode: 'W6',
		repairType: 'boiler',
		repairCost: 0
	},
	{
		postCode: 'UB3',
		repairType: 'boiler',
		repairCost: 0
	},
	{
		postCode: 'W13',
		repairType: 'electric',
		repairCost: 200
	},
	{
		postCode: 'W6',
		repairType: 'electric',
		repairCost: 800
	},
	{
		postCode: 'UB3',
		repairType: 'electric',
		repairCost: 100
	},
	{
		postCode: 'W13',
		repairType: 'plumbing',
		repairCost: 300
	},
	{
		postCode: 'W6',
		repairType: 'plumbing',
		repairCost: 2500
	},
	{
		postCode: 'UB3',
		repairType: 'plumbing',
		repairCost: 1000
	}
];

const plumbingRepairs = repairs.filter((repair) => repair.repairType === 'plumbing');
console.log(plumbingRepairs, 'plumbing repairs filtered');
const plumbingCosts = plumbingRepairs.map((repair) => repair.repairCost);
console.log(plumbingCosts, 'plumbing repairs mapped for costs');
const totalPlumbingCosts = plumbingCosts.reduce((accValue, elemValue) => {
	console.log(`${accValue} accValue adder ${elemValue} elemValue`);
	return accValue + elemValue;
}, 0);
console.log(totalPlumbingCosts, 'cummulative costs starting from 0');

const avPlumbingCosts = totalPlumbingCosts / plumbingCosts.length;
console.log(avPlumbingCosts, 'average plumbing costs');

const electricRepairCosts = repairs
	.filter((repair) => repair.repairType === 'electric')
	.sort((a, b) => b - a)
	.map((repair) => repair.repairCost)
	.reduce((accValue, elemValue) => {
		return accValue + elemValue;
	}, 0);
console.log(electricRepairCosts, 'chained final costs of electric repairs, starting from 0');

//NOTE CHAINING THIS WAY MISSES OUT ON ASSIGNING EACH FUNCTION TO A VARIABLE AND THE BENEFITS OF FUNCTIONAL PROGRAMMING

// const avElectricCosts = electricRepairCosts / repairs.repairCost.length;
