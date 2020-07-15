const add = (x, y, z) => x + y + z;
console.log(add, 'function declaration');
console.log('function call', add(5, 4, 3));

// one variable is always going to be 5 for example
// isolate the fixed into a partial arg, pass that on to the next function whose args are y&z - pass that on the final function

const xPartial = (x) => (y, z) => add(x, y, z);
const add5 = xPartial(5);
const add5AndxPartial = add5(16, 77);
console.log(xPartial, 'function declaration');
console.log(add5, 'function reassignment');
console.log(add5AndxPartial, 'function call from add5AndxPartial');

const xyPartial = (x, y) => (z) => add(x, y, z);
const add5And21 = xyPartial(5, 21);
const addXYpartial = add5And21(77);
console.log(xyPartial, 'function declaration');
console.log(add5And21, 'function reassignment');
console.log(addXYpartial, 'function call from addXYpartial');

const xyzPartials = (x) => (y) => (z) => add(x, y, z);
const addXYZpartials = xyzPartials(29)(16)(18);

console.log(xyzPartials, 'function declaration');
console.log(addXYZpartials, 'function call from addXYZpartials');
