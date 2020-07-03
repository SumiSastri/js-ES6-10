
// JavaScript stores numbers in 64 bits floating point numbers
// Numbers are not spearately notated as integers, floats, short or long
// Mathemathical accuracy therefore is not the language's strong suit
// leading zeros also do not work 007 


const number = 9.5776;
// number.toFixed(0);  returns 10
number.toFixed(2);
number.toFixed(4);

// In the above statements the code executed is returning 0, 2 and 4 decimal places after 9


// parseFloat()	Parses its argument and returns a floating point number
// parseFloat("10");        // returns 10
// parseInt()	Parses its argument and returns an integer BUT ONLY THE FIRST NUMBER
// parseInt("10");         // returns 10
// parseInt("10.33");      // returns 10
// parseInt("10 20 30");   // returns 10
// parseInt("10 years");   // returns 10
// parseInt("years 10");   // returns NaN 

