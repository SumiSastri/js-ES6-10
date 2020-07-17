// example 2 - tennis score win point
var scoreBoard = [0, 0];
function winPoint(){
switch (scoreBoard) {
case "scoreBoard[0] > scoreBoard[1]":
    console.log("Point to Djokovic, the score is" + " " + scoreBoard);
    break;
case "scoreBoard[0] < scoreBoard[1]":
     console.log("Point to Nadal, the score is" + " " + scoreBoard);
    break;
   default:  "scoreBoard[0] === scoreBoard[1]";
     console.log("Point each, the score is" + " " + scoreBoard);
 }
}

// example 3 - win game
var scoreBoard = [0, 0];
function winGame(scoreBoard){
switch (scoreBoard) {
case "scoreBoard[0]===60 && scoreBoard[1]===40 || scoreBoard[0] === 50 && scoreBoard[1] === 30 ||
     scoreBoard[0]===50 && scoreBoard[1]===15 || scoreBoard[0] === 50 && scoreBoard[1] === 0":  
    console.log("Point and match to Djokovic, the score is" + " " + scoreBoard);
    break;
case "scoreBoard[0]===40 && scoreBoard[1]===60 || scoreBoard[0] === 30 && scoreBoard[1] === 50 ||
     scoreBoard[0]=== 15 && scoreBoard[1]===50 || scoreBoard[0] === 0 && scoreBoard[1] === 50":  
     console.log("Point and Match to Nadal, the score is" + " " + scoreBoard);
    break;
   default:  "scoreBoard[0] === 40 && scoreBoard[1] === 40 || scoreBoard[0] === 50 && scoreBoard[1] === 50; 
     console.log("Deuce");
}
}


//  whole game conditions
var gameScoreSequence = [0, 15, 30, 40, 50, 60];
var currentPlayerScore = [0,0]
var playerOneScore= currentPlayerScore[0]
var playerTwoScore = currentPlayerScore[1]
var score = currentPlayerScore

function gameScore(score){
// if (score[0]> score[1])
//   {
//     console.log("Point to Djokovic, the score is" + " " + score);

//   }
}
var currentPlayerScore = [0,0]
var playerOneScore= currentPlayerScore[0]
var playerTwoScore = currentPlayerScore[1]
var score = currentPlayerScore

function pointScoring(playerOneScore, playerTwoScore){
    switch(playerOneScore, playerTwoScore) {
        case playerOneScore > playerTwoScore:
        return "Point to PlayerOne";
         break;
       case playerOneScore < playerTwoScore:
        return "Point to Player2";
       break;
       default:  playerOneScore === playerTwoScore; 
       return "Point each";
  }
}   

// case  score[0] === 15 && score[1] === 15 || score[0] === 30 && score[1] === 30:
//      console.log("Point each, the score is" + " " + score);
//         break;
// case  score[0] === 40 && scoreBoard[1] === 40: 
//      console.log("Deuce");
//         break;
// // case score[0] === 50 && score[1] === 50:
// //      return score[0] && score[1] === 40;
// //      console.log("Deuce");
//      break;        
// case score[0]===60 && score[1]===40 || score[0] === 50 && score[1] === 30 ||
//      score[0]===50 && score[1]===15 || score[0] === 50 && score[1] === 0:  
//     console.log("Point and match to Djokovic, the score is" + " " + scoreBoard);
//     break;
// case score[0]===40 && score[1]===60 || score[0] === 30 && score[1] === 50 ||
//      score[0]=== 15 && score[1]===50 || score[0] === 0 && score[1] === 50:  
//      console.log("Point and Match to Nadal, the score is" + " " + score);
//     break;
   
 }
}



