// IF-ELSE/ ELSE-IF sometimes known as IF THEN ELSE 1:23
// If is a single loop
// If else is a double loop
// If else then is a trip loop/ if - else if - else
// or if else break
// else if can be written in as many times for as many loops
// the loops through all the conditions in if
// checks if condition is true or false
// if true perform block
// goes to the next condition in the else if
// if true performs block of code and the next else if
// if it finds none of the blocks true it goes to default else
// and performs the default else block

var value = -1; 
var value = 10; 
var value = 1000;
if (value <= 0) {
console.log("This number is either zero or less than zero")
} else if (value <= 100) {
 console.log("This number is either 100 or less than 100")
} else {
  console.log("This is a number greater than 100" +" " + "it is" + " " + value)
}
// OUTPUT 
This number is either zero or less than zero
This number is either 100 or less than 100
This is a number greater than 100 it is 1000

// golf game 1:28
var golfNames = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Three under par or more"];
var par = 0
var strokes = 0

function golfScore(par, strokes){
 if (strokes === 1 && par === 0) { 
    return golfNames[0]
      } else if (strokes <= par - 2) {
    return golfNames[1]
      }  else if (strokes <= par - 1) {
    return golfNames[2]
      } else if (strokes === par ) {
    return golfNames[3]
     } else if (strokes === par + 1 ) {
    return golfNames[4]
     } else if (strokes === par + 2 ) {
    return golfNames[5]
    } else {
    return golfNames[6]
  }  
}
golfScore(3, 5)

// IF-ELSE-BREAK
// a triple loop
// the first is a for loop
// checks if i is zero and less than 100 
// then checks if i is greater than or equal to 18
// then checks if i is less than or equal to 60
// then performs the function when the function called which is log result
