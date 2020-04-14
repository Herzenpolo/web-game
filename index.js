// random question generator

var game = starWarsArr
var index = 0


const shuffle = (arr) => {
arr.sort(() => Math.random() - 0.5);
return arr
}

let random = shuffle(game)

const question = () => {
document.querySelector("#question").innerHTML = random[index].q
document.querySelector(".btn1").value = random[index].btn1
document.querySelector(".btn2").value = random[index].btn2
document.querySelector(".btn3").value = random[index].btn3

}

const rightAnswer = () => {
  answer=random[index].a
  return answer
}

let answer = question()
rightAnswer()

document.querySelector(".btn1").onclick = function(e) {
  document.querySelector(".btn1").value === answer ? (index++, question(), rightAnswer()) : console.log('wrong')
}

document.querySelector(".btn2").onclick = function(e) {
  document.querySelector(".btn2").value === answer ? (index++, question(), rightAnswer()) : console.log('wrong')
}

document.querySelector(".btn3").onclick = function(e) {
  document.querySelector(".btn3").value === answer ? (index++, question(), rightAnswer()) : console.log('wrong')
}

document.querySelector("#instructions > input").addEventListener("click", function(e){
startGame()
})


// canvas 

  const ctx = canvas.getContext('2d');
  let animateId = null;

  
  var i = 500
  var j = 500


  let millFalconImg = new Image ()
  millFalconImg.src = './Images/Millennium-Falcon-Star-Wars-PNG-Image.png'
  millFalconImg.onload = function(e) {
    drawMillFalcon()
  }

const drawMillFalcon = () => {
    ctx.drawImage(milleniumFalcon.image, milleniumFalcon.x, milleniumFalcon.y, 150, 100) //sets properties and size of the road immage
  }

  milleniumFalcon ={
    x: 60,
    y: i,
    image: millFalconImg  // makes an object of the road image, we can refer to this later 
  }



  let starDestroyerImg = new Image ()
  starDestroyerImg.src = './Images/Star-Destroyer-PNG-Photo-Image.png'
  starDestroyerImg.onload = function(e) {
    drawStarDestroyer()
  }

const drawStarDestroyer = () => {
    ctx.drawImage(starDestroyer.image, starDestroyer.x, starDestroyer.y -= 0.2, 100, 75) //sets properties and size of the road immage
  }

  starDestroyer ={
    x: 250,
    y: j,
    image: starDestroyerImg  // makes an object of the road image, we can refer to this later 
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

  function detectCollisionMilleniumFalcon(){
    var rect1 = {x: milleniumFalcon.x, y: milleniumFalcon.y, width: 150, height: 75}
    var rect2 = {x: 0, y: 10, width: 450, height: 100} 
    

if (rect1.x < rect2.x + rect2.width &&
 rect1.x + rect1.width > rect2.x &&
 rect1.y < rect2.y + rect2.height &&
 rect1.y + rect1.height > rect2.y) {
   return true
 }
}

function detectCollisionStarDestroyer(){
var rect1 = {x: starDestroyer.x, y: starDestroyer.y, width: 100, height: 75}
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

function animate(){ //Where the magic happens
  animateId = window.requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height) //clears the canvas - flipping to a blank page

drawMillFalcon()
drawStarDestroyer()
drawFinishLine()
if(detectCollisionMilleniumFalcon()){
  alert('You win this round')
  milleniumFalcon.y = 500 // create round function to reflect current round and do scoring based on the round
  starDestroyer.y = 500
  playerScore++
  document.querySelector(".player-score").innerHTML = `Player: ${playerScore}`
  
}
if(detectCollisionStarDestroyer()){
  // alert `Computer takes this round`     
  alert('Computer wins this round')
  starDestroyer.y = 500
  milleniumFalcon.y = 500
  computerScore++
  document.querySelector(".computer-score").innerHTML = `Computer: ${computerScore}`

}
// console.log(playerScore, computerScore, animateId)

// computerScore === 1 ? (alert ("You have been captured by the star detroyer, your mission has failed"), cancelAnimationFrame(animateId)) : animateId = window.requestAnimationFrame(animate) 

if(computerScore === 1) {
  alert("You have been captured by the star detroyer, your mission has failed")
  cancelAnimationFrame(animateId)
}

if(playerScore === 1) {
  alert("You have CONGRATS! You completed the Kessler Run")
  cancelAnimationFrame(animateId)
}

// playerScore === 1 ? (alert("CONGRATS YOU HAVE COMPLETED THE KESSLER RUN IN RECORD TIME"), cancelAnimationFrame(animateId)) : animateId = window.requestAnimationFrame(animate)
//   animateId = window.requestAnimationFrame(animate)


//Game rendering -infinite loop that goes super fast
}

  function startGame() {

  animate()
  };