const electionVotes = [
	'Harry',
	'Rick',
	'Ben',
	'Ben',
	'Harry',
	'Ashley',
	'Connor',
	'Rick',
	'Ashley',
	'Rick',
	'Albert',
	'Ben',
	'Michael',
	'Rick',
	'Albert',
	'Karen',
	'Harry',
	'Karen',
	'Donna',
	'Ashley',
	'Albert',
	'Harry',
	'Dane',
	'Dane',
	'Rick',
	'Donna',
	'Mortimer'
];

const tallyVotes = (votes) =>
	votes.reduce(
		(accValue, elementValue) =>
			// (console.log(`${accValue} accValue multiplier ${elementValue} elemValue `),
			({
				...accValue,
				[elementValue]: accValue[elementValue] ? accValue[elementValue] + 1 : 1
			}),
		{}
	);

console.log(tallyVotes(electionVotes));
