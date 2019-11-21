
// scoreboard as an array
var scores = [ 0, 0 ];
var scoreSequence = [0,15,30,40,50,60];
var playerOneScore = scores[0];
var playerTwoScore = scores[1];
var currentPlayerScores = scores;
console.log(scores)
console.log (currentPlayerScores)

  // players can score
  function gameScore(){}
  
  // players can add points
  // player one adds a point
  function playerOneAddPoint() {
    const playerOneCurrentScore = currentPlayerScore[0];
    const scoreSequenceIndex = scoreSequence.indexOf(playerOneCurrentScore);
    const playerOneNewScore = scoreSequence[scoreSequenceIndex + 1];
    const currentPlayerScore[0] = playerOneNewScore;
  }
  
  // player two adds a point
  function playerTwoAddPoint() {
    const playerTwoCurrentScore = currentPlayerScore[1];
    const scoreSequenceIndex = scoreSequence.indexOf(playerTwoCurrentScore);
    const playerTwoNewScore = scoreSequence[scoreSequenceIndex + 1];
    const currentPlayerScore[1] = playerOneNewScore;
  }

// players can win points 
function getWinPoint(playerOneScore, playerTwoScore) {
  if (playerOneScore > playerTwoScore) {
       return 'playerOne wins the point';
    } else if (playerOneScore < playerTwoScore) {
       return 'playerTwo wins the point';
    } else {
 	   return "point each"
   }
}
 console.log(getWinPoint) 

// players can be at deuce/ advantage point without winning the game

function deuce(playerOneScore, playerTwoScore) {
  if (playerOneScore && playerTwoScore === 40) {
       return 'Deice';
    } else if (playerOneScore < playerTwoScore) {
       return 'playerTwo wins the point';
    } else {
 	   return "point each"
   }
}
 console.log(getWinPoint) 


// players can win game
function getWinner(currentPlayerScores) {
  if (currentPlayerScores === [60, 40] || [50,30] || [50,15] || [50, 0]) {
        return 'playerOne Wins';
    } else (currentPlayerScores === [40, 60] || [30,50] || [15,50] || [0, 50]){
        return 'playerTwo Wins';
   }
}
 console.log(getWinner) 
