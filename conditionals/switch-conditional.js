// A function that runs till all conditions are met
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript


// SWITCH - conditions must be strictly true to pass
// SYNTAX
var x = [number, string, array, object]
switch (x) {}

// SYNTAX BROKEN DOWN
var grade = 0;
switch (){
	case 1:
	// condition
	// return code block
	break;
	case 2:
	// condition
	// return code block
	break;
	case 3:
	// condition
	// return code block
	break;
	case 4:
	// condition
	// return code block
	break;
	default:
	// condition
	// return code block
	break;
}


// EXAMPLE
var grade = 0;
switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("Excellent, you got a distinction, your marks are" +" " + grade);
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("Well deserved, you got a high merit, your marks are" +" " + grade);
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("Well done, you got a merit, your marks are" +" " + grade);
        break;
    // If score is 60 or greater
    case grade >= 60:
         console.log("Congratulations, you passed, your marks are" +" " + grade);
        break;
    // Anything 59 or below is failing
    default:
        console.log("You got below 59 which is the pass grade");
}

// GOTCHA'S does not work with greater than or less than only strictly true or false
var currentPlayerScore = [0, 0]
switch (currentPlayerScore) {
case currentPlayerScore[0] > currentPlayerScore[1]:
    console.log("Point to Djokovic, the score is" + " " + currentPlayerScore);
    break;
case currentPlayerScore[0] < currentPlayerScore[1]:
     console.log("Point to Nadal, the score is" + " " + currentPlayerScore);
    break;

   default:  currentPlayerScore[0] === 0 && currentPlayerScore[1] === 0;
     console.log("Silence please, the game is about to start");
  }
console.log(currentPlayerScore[60,40])
// the error will be the switch always shows the default option