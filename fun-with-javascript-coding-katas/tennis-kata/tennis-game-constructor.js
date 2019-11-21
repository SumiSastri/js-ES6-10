type Score = [GameScore, GameScore];
type GameScore = 0 | 15 | 30 | 40 | 50 | 60;

export class TennisGame {
  private scoreSequence: GameScore[] = [0, 15, 30, 40, 50, 60];
  private currentPlayerScore: Score = [0, 0];

  constructor(initialScore?: Score) {
    if (initialScore) {
      this.currentPlayerScore = initialScore;
    }
  }

  function score(): Score {
    return this.currentPlayerScore;
  }

  function djokovicAddPoint() {
    const djokovicCurrentScore = this.currentPlayerScore[0];
    const scoreSequenceIndex = this.scoreSequence.indexOf(djokovicCurrentScore);
    const djokovicNewScore = this.scoreSequence[scoreSequenceIndex + 1];
    this.currentPlayerScore[0] = djokovicNewScore;
  }

  function nadalAddPoint() {
    const nadalCurrentScore = this.currentPlayerScore[1];
    const scoreSequenceIndex = this.scoreSequence.indexOf(nadalCurrentScore);
    const nadalNewScore = this.scoreSequence[scoreSequenceIndex + 1];
    this.currentPlayerScore[1] = nadalNewScore;
  }

var scoreBoard = [0, 0];
function winPointsAndGame(scoreBoard){
switch (true) {
case scoreBoard[0] > scoreBoard[1]:
    console.log("Point to Djokovic, the score is" + " " + scoreBoard);
    break;
case scoreBoard[0] < scoreBoard[1]:
     console.log("Point to Nadal, the score is" + " " + scoreBoard);
    break;
case  scoreBoard[0] === 15 && scoreBoard[1] === 15 || scoreBoard[0] === 30 && scoreBoard[1] === 30:
     console.log("Point each, the score is" + " " + scoreBoard);
        break;
case  scoreBoard[0] === 40 && scoreBoard[1] === 40 || scoreBoard[0] === 50 && scoreBoard[1] === 50: 
     console.log("Deuce");
        break;
case scoreBoard[0]===60 && scoreBoard[1]===40 || scoreBoard[0] === 50 && scoreBoard[1] === 30 ||
     scoreBoard[0]===50 && scoreBoard[1]===15 || scoreBoard[0] === 50 && scoreBoard[1] === 0:  
    console.log("Point and match to Djokovic, the score is" + " " + scoreBoard);
    break;
case scoreBoard[0]===40 && scoreBoard[1]===60 || scoreBoard[0] === 30 && scoreBoard[1] === 50 ||
     scoreBoard[0]=== 15 && scoreBoard[1]===50 || scoreBoard[0] === 0 && scoreBoard[1] === 50:  
     console.log("Point and Match to Nadal, the score is" + " " + scoreBoard);
    break;
   default:  scoreBoard[0] === 0 && scoreBoard[1] === 0;
     console.log("Silence please, the game is about to start");
}
}
