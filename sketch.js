var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;
//Error: El game state no cambia al juagar miss; ya no supe como arreglarlo. De echo desde el no aparecia la plantilla correctamente


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    // Actualiza quiz
    // Llama al método update que está dentro de la clase quiz
    quiz.update();
  }
  if(gameState === 1){
    clear();
    // Actualiza play
    
    // Llama al método play que está dentro de la clase quiz
    quiz.play();
  }
}
