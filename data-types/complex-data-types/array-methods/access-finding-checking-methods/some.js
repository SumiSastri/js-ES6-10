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
// function declaration
const repairs1KPlus = (repairs) => repairs.repairCost > 1000;

//function call with array method and function declaration used as data passed as param
const highRepairCosts = repairs.some(repairs1KPlus);
// Some returns true as yes some costs are high - but not every

console.log(repairs, 'repairs array');
console.log(repairs1KPlus, 'function declaration');
console.log(highRepairCosts, 'function call with some method');
