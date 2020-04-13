//DOM

/* To set the right answe I will create an array containing all of the right answers and using the
ternary function above I will check the content of the buttons against this array, this will add the 
class .btn right. 
I need to create an array of all the questions and 3 arrays with possible answers. add an event listener to 
the class btn-right and on click will change all of the options*/

// question and variable arrays

var questionArr = [
  `What is the name of Han Solo’s ship?`, 
  `What is the weapon used by Jedi Knights?`,
  `Which young Jedi Knight becomes Darth Vader in Star Wars: Episode III Revenge of the Sith?`,
  `What Jedi Master spent 800 years training such pupils as Qui-Gon Jinn Obi-Wan Kenobi, Count Dooku and Luke Skywalker?`,
  `What Wookiee is Han Solo’s loyal friend and first mate?`,
  `Who is Luke and Leia’s mother?`,
  `How many members are there in the Jedi Council?`,
  `Why did Yoda say he didn’t want to train Luke Skywalker?`,
  `In the Star Wars film, what invisible power binds the galaxy together?`,
  `Who are the masters of the Dark Side who want to rule the galaxy?`,
  `What were the last words spoken in The Empire Strikes Back?`,
  `What animals did the visual effects crew study when designing the Imperial Walkers from The Empire Strikes Back?`,
  `Which country was the home base for principal photography on Revenge of the Sith?`,
  `Which Star Wars movie was the first to be shot entirely with high-definition cameras, without using traditional 35-millimeter film?`,
  `What U.S. magazine declared Star Wars “the year’s best movie” in its May 30, 1977, issue?`,
  `Which star of Revenge of the Sith is the real-life nephew of Denis Lawson, who played Wedge in the first Star Wars Trilogy?`,
  `According to Star Wars legend, what substance powers lightsabers?`,
  `How much does the Chewbacca costume weigh?`,
  `Yoda did not make an appearance in only one of the six Star Wars movies. Which one?`,
  `What famous scientist was the inspiration for creature designer Stuart Freeborn when creating Yoda’s eyes?`,
  `Padmé Amidala is first queen of, and then the senator from, what peaceful planet?`,
  `What Ewok medicine man presided over the attempt to make a roast of Han Solo in Return of the Jedi?`,
  `Lando Clarissian’s operation on Cloud City mines what type of gas?`,
  `The Empire attacked the Rebel base on Hoth with four-legged Imperial Walkers, or AT-ATs. What does AT-AT stand for?`,
  `What planet is home to Chewbacca and the Wookiees?`,
  `What is the species of the diminutive workers on Cloud City who helped freeze Han Solo in carbonite?`,
  `What type of battle armor does Boba Fett wear?`,
  `Han Solo upgraded his beloved Millennium Falcon from which stock starship?`,
  `What color is Yoda’s lightsaber in Attack of the Clones and Revenge of the Sith?`,
  `Complete this line from A New Hope: “The ____________ Wastes are not to be traveled lightly."`,
  `Who preceded Senator Palpatine as Chancellor of the Galactic Senate?`,
  `How many engines are on an X-wing fighter?`,
  `Bail Organa is Princess Leia’s adoptive father. What is her adoptive mother’s name?`,
]

var rightAnswers = [
  `Millennium Falcon`,
  `Lightsaber`,
  `Anakin Skywalker`,
  `Yoda`,
  `Chewie`,
  `Padmé Amidala`,
  `12`,
  `because he lacked patience`,
  `The Force`,
  `The Sith`,
  `“May the Force be with you.”`,
  `Elephants`,
  `Australia`,
  `Attack of the Clones`,
  `Time`,
  `Ewan McGregor`,
  `Ilum crystals`,
  `8 pounds`,
  `Star Wars: Episode IV A New Hope`,
  `Albert Einstein`,
  `Naboo`,
  `Logray`,
  `Tibanna gas`,
  `All Terrain-Armored Transport`,
  `Kashyyyk`,
  `Ugnaughts`,
  `Mandalorian`,
  `The YT-1300 stock light freighter`,
  `Green`,
  `Jundland`,
  `Chancellor Valorum`,
  `4`,
  `Queen Breha Organa`
]

let btn1 = [
`Millennium Falcon`,
`Lightsaber`,
`Anakin Skywalker`,
`Yoda`,
`Chewie`,
`Padmé Amidala`,
`12`,
`because he lacked patience`,
`The Force`,
`The Sith`,
`"Luke I am your Father"`,
`Hippos`,
`Ethiopia`,
`Return of the Jedi`,
`Forbes`,
`Harrison Ford`,
`Ice Crystals`,
`6 pounds`,
`Star Wars: Episode V The Empire Strikes Back`,
`Isaac Newton`,
`Tatooine`,
`Jabush`,
`tintin gas`,
`All Terrain All Attack`,
`Kashan`,
`Sand People`,
`Jedi`,
`L3's memory drive`,
`Purple`,
`Naboo`,
`Chancellor Organa`,
`2`,
`Padme`,
// answer options for button `
]

let btn2 = [
  // enter wrong answers for indexes 1-9
  `Silver Bullet`,
  `Shooters`,
  `Luke Skywalker`,
  `Qui Gon Jinn`,
  `Padme Amidala`,
  `Princess Leia`,
  `13`,
  `Because he had no talent`,
  `The Strength`,
  `The Senate`,
  `“May the Force be with you.”`,
  `Elephants`,
  `Australia`,
  `Attack of the Clones`,
  `Time`,
  `Ewan McGregor`,
  `Ilum crystals`,
  `8 pounds`,
  `Star Wars: Episode IV A New Hope`,
  `Stephen Hawking`,
  'Organa',
  'Largaa',
  `Muhana Gas`,
  `All Attack Acessible Transport`,
  `Mandalore`,
  `Garnaughts`,
  `Gungan`,
  `The Death Star`,
  `yellow`,
  `Tatooine`,
  `Chancellor Obi Wan Kenobi`,
  `5`,
  `Queen Jamilia`,
  // Answer options for second button 
]

let btn3 = [
 // write in answers for all indexes before 18 and before 
 `J Type 327 Nubian`,
 `Blasters`,
 `Ben Solo`,
 `Yada`,
 `Jamilia Amidala`,
 `Ahsoka Tano`,
 `14`,
 `Because he had no dedication`,
 `The magic`,
 `The Council`,
 `“Do or do not, there is no try”`,
 `Giraffe`,
 `Tunisia`,
 `Attack of the Droids`,
 `Rolling Stone`,
 `Liam Neeson `,
 `Karma crystals`,
 `9 pounds`,
 `Star Wars: Episode III Revenge of the Sith`,
  `Albert Einstein`,
  `Naboo`,
  `Logray`,
  `Tibanna gas`,
  `All Terrain-Armored Transport`,
  `Kashyyyk`,
  `Ugnaughts`,
  `Mandalorian`,
  `The YT-1300 stock light freighter`,
  `Green`,
  `Jundland`,
  `Chancellor Valorum`,
  `4`,
  `Queen Breha Organa`
]



// var questionIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]



// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
//   console.log(array)
//   return array
// }

// let random = shuffle(questionIndex)

// Conditional statements establishing right question
// rightAnswers.includes(document.querySelector(`.btn1`).value) ? document.querySelector(`.btn1`).classList.add("btn-right") : document.querySelector(`.btn1`).classList.add("btn-wrong")
// rightAnswers.includes(document.querySelector(`.btn2`).value) ? document.querySelector(`.btn2`).classList.add("btn-right") : document.querySelector(`.btn2`).classList.add("btn-wrong")
// rightAnswers.includes(document.querySelector(`.btn3`).value) ? document.querySelector(`.btn3`).classList.add("btn-right") : document.querySelector(`.btn3`).classList.add("btn-wrong")

// event listeners for buttons 
//  document.querySelector(".btn1").addEventListener("click", function(e){ // first button
//      console.log(e.target)
//  })

//  document.querySelector(".btn2").addEventListener("click", function(e){ // second button 
//     console.log(e.target)
// })

// document.querySelector(".btn3").addEventListener("click", function(e){ // third button 
//     console.log(e.target)
// })

// document.querySelector(".start-btn").addEventListener("click", function(e){ // start-button  
//     console.log(e.target)
// })





// random question generator

var questionIndex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]



function shuffle(array) {
array.sort(() => Math.random() - 0.5);
return array
}



const randomQuestion = () => {
let random = shuffle(questionIndex)
for (let i = 0; i < questionIndex.length; i++) {
//question
  document.querySelector("#question").innerHTML = questionArr[random[i]] // selects a new question
  //btn 1
  document.querySelector(".btn1").value = btn1[random[i]] // sets the option for the button
  document.querySelector(".btn1").classList.remove("btn-wrong","show","btn-right") // removes the class
  // console.log(document.querySelector(".btn1").className)
  // rightAnswers.includes(document.querySelector(`.btn1`).value) ? document.querySelector(`.btn1`).classList.add("btn-right") : document.querySelector(`.btn1`).classList.add("btn-wrong") // sets the new class
 //btn 2
  document.querySelector(".btn2").value = btn2[random[i]]
  document.querySelector(".btn2").classList.remove("btn-wrong","show","btn-right")
  // console.log(document.querySelector(".btn2").className)
  // rightAnswers.includes(document.querySelector(`.btn2`).value) ? document.querySelector(`.btn2`).classList.add("btn-right") : document.querySelector(`.btn2`).classList.add("btn-wrong") // do after event listener, dont add classes ahead of time 
  // btn 3
  document.querySelector(".btn3").value = btn3[random[i]]
  document.querySelector(".btn3").classList.remove("btn-wrong","show","btn-right")
  // console.log(document.querySelector(".btn3").className)
  // rightAnswers.includes(document.querySelector(`.btn3`).value) ? document.querySelector(`.btn3`).classList.add("btn-right") : document.querySelector(`.btn3`).classList.add("btn-wrong")
}
}

randomQuestion()

const questionChange = () => {
document.querySelector(".btn1").addEventListener("click", function(e) { 
  // document.querySelector(".btn1").classList.contains("btn-wrong") ? document.querySelector(".btn1").style.color='red' : null
  rightAnswers.includes(document.querySelector(`.btn1`).value) ? document.querySelector(".btn1").classList.add("btn-right") : document.querySelector(".btn1").classList.add("btn-wrong") // sets the new class
  console.log(e.target)
  document.querySelector(".btn1").classList.add("show")
  document.querySelector(".btn1").classList.contains("btn-right")? (milleniumFalcon.y -= 55, randomQuestion()) : null
})
document.querySelector(".btn2").addEventListener("click", function(e) { 
  // document.querySelector(".btn2").classList.contains("btn-wrong") ? document.querySelector(".btn2").style.color='red' : null
  rightAnswers.includes(document.querySelector(`.btn2`).value) ? document.querySelector(".btn2").classList.add("btn-right") : document.querySelector(".btn2").classList.add("btn-wrong") // do after event listener, dont add classes ahead of time 
  document.querySelector(".btn2").classList.add("show")
  document.querySelector(".btn2").classList.contains("btn-right")? (milleniumFalcon.y -= 55, randomQuestion()) : null

})

document.querySelector(".btn3").addEventListener("click", function(e) { 
  // document.querySelector(".btn3").classList.contains("btn-wrong") ?  document.querySelector(".btn2").style.color='red' : null
  rightAnswers.includes(document.querySelector(`.btn3`).value) ? document.querySelector(".btn3").classList.add("btn-right") : document.querySelector(".btn3").classList.add("btn-wrong")
  document.querySelector(".btn3").classList.add("show")
  document.querySelector(".btn3").classList.contains("btn-right")? (milleniumFalcon.y -= 55, randomQuestion()) : null

})

// document.querySelector(".btn-right").addEventListener("click", function(e){ // third button 
// milleniumFalcon.y -= 55
// randomQuestion()
// })
}

questionChange()

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
  playerScore === 2 ? console.log("CONGRATS YOU HAVE COMPLETED THE KESSLER RUN IN RECORD TIME") : ctx.clearRect(0, 0, canvas.width, canvas.height)
}
if(detectCollisionStarDestroyer()){
  // alert `Computer takes this round`     
  alert('Computer wins this round')
  starDestroyer.y = 500
  milleniumFalcon.y = 500
  computerScore++
  document.querySelector(".computer-score").innerHTML = `Computer: ${computerScore}`
  computerScore === 2 ? alert ("You have been captured by the star detroyer, your mission has failed"): null

}

animateId = window.requestAnimationFrame(animate) //Game rendering -infinite loop that goes super fast
}

  function startGame() {

  animate()
  };

