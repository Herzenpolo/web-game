

// var game = harryPotterArr
var index = 0

let docBackground = document.querySelector("body")

// document.querySelector("#home > a:nth-child(1)").addEventListener("click", function (e) {
//   game = harryPotterArr
// })
// document.querySelector("#home > a:nth-child(2)").addEventListener("click", function (e) {
//    game = starWarsArr
// })

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('game')); // "edit"
game = window[urlParams.get('game')] // window changes the string to the variable in this


const starWarsGame = () => {
  document.querySelector("#header-logo").src = './Images/Star_Wars_logo-1.png'
  document.querySelector("#header-logo").style.width = "25%"
  docBackground.style.backgroundImage = "url('./Images/784428-death-star-wallpaper-2560x1600-for-ipad-pro.jpg')"
  document.querySelector("audio").src = "./Imperial March.mp3"
  document.querySelector("#p1").innerHTML = "Welcome to Star Wars Trivia, "
  document.querySelector("#p2").innerHTML = "today you have been tasked with completing "
  document.querySelector("#p3").innerHTML = "the kessler run in 11 seconds or less and beat Han Solo's"
  document.querySelector("#p4").innerHTML = "12 seconds. Han Solo was able to make this run by downloading L3's"
  document.querySelector("#p5").innerHTML = "memory on to the Millennium Falcon.  Download your memory into your ship by"
  document.querySelector("#p6").innerHTML = "answering the question's below, you have to beat your opponent 2 out of "
  document.querySelector("#p7").innerHTML = "3 times to complete the Kessler run! So start your engines, press GO and start moving!"
  document.querySelector("body").classList.add("starWars")
}

const harryPotterGame = () => {
  document.querySelector("#header-logo").src = './Images/harry-potter-text-logo--13.png'
  document.querySelector("#header-logo").style.width = "10%"
  docBackground.style.backgroundImage = "url('./Images/542752.jpg')"
  document.querySelector("audio").src = "./Harry_Potter_Theme_Song_Hedwigs_Theme.mp3"
  document.querySelector("#p7").innerHTML = "Traditionally the house cup goes to the House that accumulated the most amount of points in the course of the school year. Some claim that Dumbledore and Professor Mcgonagall have rigged the competitions so Gryffindor can win the cup every year. This year, however, decided that the winner of the cup will be determined by the winner of a race between Gryffindor and Slytherin. Not surprisingly Gryffindor chose Harry Potter and Slytherin chose Malfoy."
  document.querySelector("body").classList.add("harryPotter")
}

const beerGame = () => {
  document.querySelector("#header-logo").src = './Images/Duff_Beer-logo-A7BA6E5125-seeklogo.com.png'
  document.querySelector("#header-logo").style.width = "10%"
  docBackground.style.backgroundImage = "url('./Images/1105647.jpg')"
  document.querySelector("audio").src = "./Harry_Potter_Theme_Song_Hedwigs_Theme.mp3"
  document.querySelector("#p7").innerHTML = "Traditionally the house cup goes to the House that accumulated the most amount of points in the course of the school year. Some claim that Dumbledore and Professor Mcgonagall have rigged the competitions so Gryffindor can win the cup every year. This year, however, decided that the winner of the cup will be determined by the winner of a race between Gryffindor and Slytherin. Not surprisingly Gryffindor chose Harry Potter and Slytherin chose Malfoy."
  document.querySelector("body").classList.add("harryPotter")
}

if(game === starWarsArr) {
  starWarsGame()
} else if (game === harryPotterArr) {
  harryPotterGame()
} else if (game === beerArr) {
  beerGame()
}

const shuffle = (arr) => {
arr.sort(() => Math.random() - 0.5);
return arr
}

let random = shuffle(game)

const question = () => {
document.querySelector("#question").innerHTML = random[index].q
document.querySelector(".btn1").value = random[index].btn1
if (game === starWarsArr){
  document.querySelector(".btn1").style.color = '#FFE81F'
} else if (game === harryPotterArr) {
  document.querySelector(".btn1").style.color = 'white'
}
document.querySelector(".btn2").value = random[index].btn2
if (game === starWarsArr){
  document.querySelector(".btn2").style.color = '#FFE81F'
} else if (game === harryPotterArr) {
  document.querySelector(".btn2").style.color = 'white'
}
document.querySelector(".btn3").value = random[index].btn3
if (game === starWarsArr){
  document.querySelector(".btn3").style.color = '#FFE81F'
} else if (game === harryPotterArr) {
  document.querySelector(".btn3").style.color = 'white'
}

}

document.querySelector("#scores > span.computer-score").style.color = 'white'

const rightAnswer = () => {
  answer=random[index].a
  return answer
}

let answer = question()
rightAnswer()

document.querySelector(".btn1").onclick = function(e) {
  document.querySelector(".btn1").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn1").style.color = 'red'
}

document.querySelector(".btn2").onclick = function(e) {
  document.querySelector(".btn2").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn2").style.color = 'red'
}

document.querySelector(".btn3").onclick = function(e) {
  document.querySelector(".btn3").value === answer ? (index++, question(), rightAnswer(), player.y -= 55) : document.querySelector(".btn3").style.color = 'red'
}

document.querySelector("#instructions > input").addEventListener("click", function(e){
  
  startGame()
})


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

  player ={
    x: 60,
    y: i,
    image: playerImg  // makes an object of the road image, we can refer to this later 
  }



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
  ctx.drawImage(computer.image, computer.x, computer.y -= 0.2, 50,100)
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
    document.querySelector(".player-score").innerHTML = `Player : ${playerScore} |  `
  
}
if(detectCollisioncomputer()){
  alert('Computer wins this round')
  computer.y = 500
  player.y = 500
  computerScore++
  document.querySelector(".computer-score").innerHTML = `Computer : ${computerScore}`

}

if(computerScore === 2) {
  alert("You've lost this round, try again soon")
  cancelAnimationFrame(animateId)
}

if(playerScore === 2) {
  alert("You did it! you won")
  cancelAnimationFrame(animateId)
}


}

  function startGame() {

  animate()
  };
