const names = [ 'Kelly', 'Jonny', 'Barry', '' ];

const noneEmpty = (string) => !!string;

const allNamesRecorded = names.every(noneEmpty);

console.log(noneEmpty);
console.log(allNamesRecorded);
