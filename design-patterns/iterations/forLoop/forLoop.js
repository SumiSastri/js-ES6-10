// A function that runs till all conditions are met
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript

// FOR LOOP 2:11
//SYNTAX
//  for key word outside parenthesis
// in parenthesis the first argument is initialisation of the index 
// to the number/key of the array ends with a semicolon
// the next argument is the condition that needs to be met for the
// loop - ususally this is the number of iterations based on the
// number of items in the array - ends with a semicolon
//  what do you do to each item of the array close parenthesis
//  the final return is what is the result you want to see 

// NOTE:
// i++ these are synonyms i+1  add one 1+1 = 2, 2+1 = 3, 3+1 = 4
// i+= this means add the number to itself 1 + 1 = 2/ 2+2 = 4 / 4+4 = 8


var i = 0;
var count = 10;
for (var i = 0; i < 10; i++) {
    count += i;
}
console.log(count)
// Output from console
55

var i = 0;
var count = 10;
for (var i = 0; i < 10; i+=1) {
    count += i;
}
console.log(count)
// Output from console
55


var i = 0;
var count = 10;
for (var i = 0; i < 10; i+=2) {
    count += i;
}
console.log(count)
// Output from console
30

var arrayOfNumbers = [];
for (var i = 0; i < 10; i+=2) {
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers)
// Output from console
(5) [0, 2, 4, 6, 8]
// the loop works on every second number

// the for loop goes through each number from 0 to 10
// each number 2, 3, 4 is added to the previous total
// 0+1=1, 1+2=3 , 3+3=6, 6+4= 10, etc.
// and then adds count (10) to the sum of the rest (45)
// output is 45 if var count set to 0
// the loop ends at 10 so the output should be 45
// checks if the statement is true or false is it less than 10
// true - therefore perform the i + 1 or i++
// returns the answer when function console.log called

// the loop goes through an empty array from 0 to 5 and adds one to
// the number then pushes that into the empty array (2:13)
// at the end of each iteration you run a function that maps through
// the conditional iteration

var arrayOfNumbers = [];

for(var i = 0; i < 5; i++){

	arrayOfNumbers.push(i);
}
console.log(arrayofNumbers)


// this is a quick way to populate an empty array rather than manually writing it out
var golfCourseArray = [];
for(var i = 1; i < 19; i++){

	golfCourseArray.push(i);
}
console.log(golfCourseArray)

// FOR LOOP with a break
//  variable to initialize (while i is zero)
//  condition is it true or false (and i which is zero is less than 100)
//  what do you do at the end of the iteration (add one to each number)
//  you can add 2 (+=2) or  multiply or divide

for (var i = 0; i < 100; i++) {
   if (i <= 18) {
      continue;
   } else if (i >= 60) {
      break;
   }
   console.log(i);
}  
// output print of all numbers between 18 and 60


// count backwards with a forloop 2:15 - decrement rather than increment

var arrayOfNumbers = [];
for (var i = 20; i > 0; i-=2) {
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers)
Output
(10) [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]


// iterating through an array with a forLoop and the array.length() method



for(vari=0; i < array.length; i++)