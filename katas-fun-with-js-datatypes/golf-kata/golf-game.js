// golf game 1:28

// Pseudo
// game has two players (in constructor)
// player can play only the number holes in a course
// the number of holes in this course is 9
// player stroke is a random number between 1 and 9 (in constructor)

// player score is compared to par 
// score conditions - if par = strokes, score = 0;
// if par to strokes is +1, +2, +3, score is +1, +2, +3
// if par to strokes is -1, -2, -3, score is -1, -2, -3
// round score is added the players score to match the part to hole

// at the end of stroke, after the points added, it is the next players turn

// player two is now the active player and score is added to scoreboard
// players play in turns till the end of the course

// the final tally is added and winner is the player with the lower score
// winner is declared and the player scores return to zero

class GolfGame {
	// pars is an array with the pars for each hole
	// players is a number
	constructor(pars, players) {
		//...
	}

	playAHole(player, hole) {

	}

	endGame() {
		
	}


	constructor(holeNumber, parNumber, playerOneScore, playerTwoScore){
        this.scoreBoard = [0, 0, 0, 0];
        this.holeNumber = holeNumber;

        parNumber: golfGame.scoreBoard[1],
		playerOneScore: golfGame.scoreBoard[2],
	    playerTwoScore: golfGame.scoreBoard[3],
	    parToHole: [ 3, 3, 4, 3, 5, 5, 4, 2, 4],
        parNames: ["Par", "Hole-in-one", "Birdie", "Eagle", "Albatross", 
                   "Bogey", "Double-Bogey", "Triple-Bogey", 
                   "Quadruple-Bogey"],
        playerOne: "",
        playerTwo: "",           
        playerStrokes: function strokes(){	 
     	Math.floor(Math.random() * 9) + 1;}
     	gamePlaying: true
     }                
}		

// GAME FUNCTIONS

// player can play only the number holes in a course
var numberOfStrokes = setGolfCourse()

// the number of holes in this course is 9
	function setGolfCourse(){
	var holesInCourse = [];  
			for(var i = 1; i <= 9; i++){
				holesInCourse.push(i);
				console.log(holesInCourse)
	 		}
	 }		
	
// players strokes are a random number between 1 and 9
  var playerStrokes = Math.floor(Math.random() * 9) + 1;
  var playerOneStrokes && playerTwoStrokes = playerStrokes

// player score is compared to par 
// score conditions - if par = strokes, score = 0;
// if par to strokes is +1, +2, +3, score is +1, +2, +3
// if par to strokes is -1, -2, -3, score is -1, -2, -3
// round score is added the players score to match the part to hole

function playerOneScore(par, strokes){
	if (par === strokes -1 || strokes -2 || strokes -3) {
		playerOneScore = -1 || -2 || -3
	} else (par === strokes +1 || strokes +2 || strokes +3){ 
		playerOneScore = +1 || +2 || +3
	} esle (par === strokes){
		playerOneScore == 0
	}
}

function playerTwoScore(par, strokes){
	if (par === strokes -1 || strokes -2 || strokes -3) {
		playerTwoScore = -1 || -2 || -3
	} else (par === strokes +1 || strokes +2 || strokes +3){ 
		playerTwoScore = +1 || +2 || +3
	} esle (par === strokes){
		playerTwoScore == 0
	}
}


function playerOneFinalScore(){
	// if the player has completed all the rounds in the course
	// add all round scores for the final score
	// check while or do while loop
}

function playerOneFinalScore(){
	// if the player has completed all the rounds in the course
	// add all round scores for the final score
	// check while or do while loop
}      

function getWinner(playerOneFinalScore, playerTwoFinalScore){
  // if all the rounds completed 
  // compare the final playerOne score to playerTwo score
  // declare the winning player 
  // and the score
  

function clearScoreboard() {
	 // if all the rounds completed
	 // and the winner declared
     // and the score declared
	//  return scoreboard to 0
	//  remove player names from the board
}
