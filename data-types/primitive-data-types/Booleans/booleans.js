let title = 'Java';
console.log(typeof title);
console.log(typeof title[Symbol.iterator]);

let stringIteration = title[Symbol.iterator]();
console.log(stringIteration.next());
console.log(stringIteration.next());
console.log(stringIteration.next());
console.log(stringIteration.next());
console.log(stringIteration.next());
