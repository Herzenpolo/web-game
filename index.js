console.log(`hello`)


// adding button function to answers



let questionHolder = document.querySelectorAll(`.question-holder`)

document.querySelector(".btn1").addEventListener("click", () => {
    document.querySelector(".btn1").className = "btn-wrong"
})//sets the click event on answer button
document.querySelector(".btn2").addEventListener("click", () => {
    document.querySelector(".btn2").className = "btn-right"
})
document.querySelector(".btn3").addEventListener("click", (e) => console.log(e.target))

document.querySelector(`.btn1`).value.includes(`Hello`) ? document.querySelector(".btn1").className = "btn-right" :console.log('no')

/* To set the right answe I will create an array containing all of the right answers and using the
ternary function above I will check the content of the buttons against this array, this will add the 
class .btn right. 

I need to create an array of all the questions and 3 arrays with possible answers. add an event listener to 
the class btn-right and on click will change all of the options*/

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
    `12`
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