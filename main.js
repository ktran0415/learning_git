document.addEventListener("DOMContentLoaded", function(){
//the entire game is inside here
//variables
var player
var name = document.getElementById('name')
var startButton = document.getElementById('start-button')
var top = document.getElementById('top')
var gameArea = document.getElementById('game-area')

name.addEventListener('keyup', function(event){
  startButton.className=""
} else {
  startButton.className="hide"

}
)
function drawBoxes() {
  for(var i = 0; i < 3; i++){
    var box = document.createElement('div')
    box.className = 'box'
    box.id = 'box-'+ i
    gameArea.append(box)
    box.addEventListener('click', makeGuess)
  }
}
//functions
function startGame() {
  player = name.value
  startButton.className = "hide"
  var label = document.createElement('p')
  label.innerHTML = 'Welcome ' + player 
  label. className = 'center'
  top.append(label)
  drawBoxes()
}
startButton.addEventListener('click', startGame)
})