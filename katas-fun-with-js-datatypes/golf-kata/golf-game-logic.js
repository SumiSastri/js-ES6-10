// golf game 1:28
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

// As an object

var golfGame = {
  golfNames: [  "Par", "Hole-in-one", "Birdie", "Eagle", "Albatross", 
                  "Bogey", "Double-Bogey", "Triple-Bogey", 
                 "Quadruple-Bogey"]

  par: 0,
  strokes: [-2,-1,0,1,2,3,4,5],
  player1: "",
  player2: "",
  golfScore: function golfScore(par, strokes){
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
}