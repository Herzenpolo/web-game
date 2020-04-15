

var game = starWarsArr // this variable will be used in the home page to assign the game that we are playing (ie Harry Potter or )
var index = 0 // This index will serve as the index for the suffled array, when a button is clicked this index gets addad ++


const shuffle = (arr) => {
arr.sort(() => Math.random() - 0.5);
return arr
}
// Shuffle array (game)
let random = shuffle(game)

const question = () => { //This function call on the "random" array 
document.querySelector("#question").innerHTML = random[index].q //calls for the new question 
document.querySelector(".btn1").value = random[index].btn1 // sets the value for the button
document.querySelector(".btn1").style.color = '#FFE81F' // resets the color if the answer was wrong
document.querySelector(".btn2").value = random[index].btn2
document.querySelector(".btn2").style.color = '#FFE81F'
document.querySelector(".btn3").value = random[index].btn3
document.querySelector(".btn3").style.color = '#FFE81F'

}

const rightAnswer = () => { // calls on the arraw object to get the right answer and be able to compare to the button value
  answer=random[index].a
  return answer
} 

let answer = question()
rightAnswer()

document.querySelector(".btn1").onclick = function(e) { // assigns an event listener to the buttons
  document.querySelector(".btn1").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn1").style.color = 'red'
}
// if the button has the same value as an answer then the index +=1 we run the question() function, the right answer formula, and moves the player function
document.querySelector(".btn2").onclick = function(e) {
  document.querySelector(".btn2").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn2").style.color = 'red'
}

document.querySelector(".btn3").onclick = function(e) {
  document.querySelector(".btn3").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn3").style.color = 'red'
}

document.querySelector("#instructions > input").addEventListener("click", function(e){
  
  startGame()
})
// adds the functionality to the "go" button

// canvas 

  const ctx = canvas.getContext('2d');
  let animateId = null;

   
  
  var i = 500
  var j = 500


  let playerImg = new Image ()
  
  if(game === starWarsArr){
  playerImg.src = starWarsPlayerSrc
  } else if (game === harryPotterArr) {
  playerImg.src = harryPotterPlayerSrc
  }
   // decides on the image source depending on the "game" class 
  
  playerImg.onload = function(e) {
    drawPlayer()
  }

const drawPlayer = () => {
    if(game === starWarsArr) {
    ctx.drawImage(player.image, player.x, player.y, 150, 100) //sets properties and size of the road immage
  } else if (game === harryPotterArr) {
    ctx.drawImage(player.image, player.x, player.y, 100, 100)
  }
}
// sets the dimmensions of an image based on the value of "game"
  
player ={
    x: 60,
    y: i,
    image: playerImg  
  }
// makes an object of the road image, we can refer to this later 

  let computerImg = new Image ()
  
  if(game === starWarsArr) {
    computerImg.src = starWarsComputerSrc
  } else if (game === harryPotterArr) {
    computerImg.src = harryPotterComputerSrc
  }
  
computerImg.onload = function(e) {
    drawComputer()
  }

const drawComputer = () => {
  if(game === starWarsArr) {
  ctx.drawImage(computer.image, computer.x, computer.y -= 0.2, 100, 75) //sets properties and size of the road immage
  } else if (game === harryPotterArr) {
  ctx.drawImage(computer.image, computer.x, computer.y -= 0.2, 75, 75)
  }
}

  computer ={
    x: 250,
    y: j,
    image: computerImg  // makes an object of the road image, we can refer to this later 
  }

  let finishLineImg = new Image ()
  finishLineImg.src = './Images/Finish-Line-PNG-HD.png'
  finishLineImg.onload = function(e) {
      drawFinishLine()
  }

  const drawFinishLine = () => {
      ctx.drawImage(finishLine.image, finishLine.x, finishLine.y, 450, 100)
  }

  finishLine = {
      x: 0,
      y: 10,
      image: finishLineImg
  }

  function detectCollisionplayer(){
    var rect1 = {x: player.x, y: player.y, width: 150, height: 75}
    var rect2 = {x: 0, y: 10, width: 450, height: 100} 
    

if (rect1.x < rect2.x + rect2.width &&
 rect1.x + rect1.width > rect2.x &&
 rect1.y < rect2.y + rect2.height &&
 rect1.y + rect1.height > rect2.y) {
   return true
 }
}

function detectCollisioncomputer(){
var rect1 = {x: computer.x, y: computer.y, width: 100, height: 75}
var rect2 = {x: 0, y: 10, width: 450, height: 100}

if (rect1.x < rect2.x + rect2.width &&
rect1.x + rect1.width > rect2.x &&
rect1.y < rect2.y + rect2.height &&
rect1.y + rect1.height > rect2.y) {
return true
}
}


ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page
      
let playerScore = 0
let computerScore = 0

function animate(){ 

  animateId = window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height) 

  drawPlayer()

  drawComputer()

  drawFinishLine()

if(detectCollisionplayer()){
    alert('You win this round')
    player.y = 500 
    computer.y = 500
    playerScore++
    document.querySelector(".player-score").innerHTML = `Player: ${playerScore}`
  // makes the collision formula useful to the, creates an alert, changes score, ends game 
}
if(detectCollisioncomputer()){
  alert('Computer wins this round')
  computer.y = 500
  player.y = 500
  computerScore++
  document.querySelector(".computer-score").innerHTML = `Computer: ${computerScore}`

}

if(computerScore === 2) {
  alert("Youu've lost this round, ty again soon")
  cancelAnimationFrame(animateId)
}

if(playerScore === 2) {
  alert("You did it!")
  cancelAnimationFrame(animateId)
}


}

  function startGame() {

  animate()
  };

