

let round = 0;
var choices = ["rock", "paper", "scissors"]
var userPoints = 0
var computerPoints = 0

const main = document.querySelector(".main")

const rock = document.getElementById("button1");
const paper = document.getElementById("button2");
const scissors = document.getElementById("button3");
const restart = document.querySelector("#button4")

const computerText = document.querySelector("#computer")
const playerText = document.querySelector("#player")
const scoreText = document.querySelector(".score")

let result = document.getElementById("result")
const resultText = document.querySelector(".resultText")



rock.addEventListener("click", () => {
    playGame("rock")
});
paper.addEventListener("click", () => {
    playGame("paper")
});
scissors.addEventListener("click", () => {
    playGame("scissors")
});

scoreText.innerHTML = (`Player points: ${userPoints} // computer points: ${computerPoints}`)


restart.addEventListener("click", () => {
    main.setAttribute('class', 'null')
    main.style.backgroundColor = null;
    main.style.pointerEvents = "visible";
    result.style.visibility = "hidden"
    console.log("player picked YES")
    console.log("New game Has started")
    round = 0;
    userPoints = 0;
    computerPoints = 0;
    scoreText.innerHTML = (`Player points: ${userPoints} // computer points: ${computerPoints}`)
})

function computerSelection(){
    //console.log("Computer: ",choices[random])
    let random = Math.floor(Math.random() * choices.length)
    console.log(`computer choice: ${choices[random].toUpperCase()}`)
    
    computerText.innerHTML = `computer choice: ${choices[random].toUpperCase()}`
    return choices[random]
}

function playGame(player){
    var rocktext = "rock"
    var papertext = "paper"
    var scissorstext = "scissors"
    var rockLower = rocktext.toLowerCase()
    var paperLower = papertext.toLowerCase()
    var scissorsLower = scissorstext.toLowerCase()
    let computer = computerSelection()
    

    playerText.innerHTML = `player choice: ${player.toUpperCase()}`

    if(player === computer){
        console.log("tie!!!")
        
        scoreText.innerHTML = (`Player points: ${userPoints} // computer points: ${computerPoints}`)
    }
    if(player === rockLower && computer === scissorsLower ||
    player === paperLower && computer === rockLower ||
    player === scissorsLower && computer === paperLower)
    {
        console.log("player gets point!!")
        round++;
        userPoints++;
        scoreText.innerHTML = (`Player points: ${userPoints} // computer points: ${computerPoints}`)
    }
    if(computer === rockLower && player === scissorsLower ||
    computer === paperLower && player === rockLower ||
    computer === scissorsLower && player === paperLower)
    {
        console.log("computer gets point!!")
        round++;  
        computerPoints++;
        scoreText.innerHTML = (`Player points: ${userPoints} // computer points: ${computerPoints}`)
    }
    else{
        null
    }


   playRounds()
}



function playRounds(){
    var optionYes = "yes"
    var optionNo = "no"
    if(userPoints == 5 || computerPoints == 5){
        
        
        if (userPoints > computerPoints){
            console.log("PLAYER WINS GAME!!!")
            result.style.visibility = "visible"
            resultText.innerHTML = "PLAYER WINS GAME!!!"
            main.style.pointerEvents = "none";
            main.setAttribute('class', 'blur')
        }

        else if (computerPoints > userPoints){
            console.log("COMPUTER WINS GAME!!!")
            result.style.visibility = "visible"
            resultText.innerHTML = "COMPUTER WINS GAME!!!"
            main.style.pointerEvents = "none";
            main.setAttribute('class', 'blur')
        }
        else{
            console.log("IT WAS A GAME TIE!!!")
        }

        //var userQuestion = prompt("Play again? Yes | No" ).toLowerCase()
        /* if(userQuestion === optionYes){
            console.log("player picked YES")
            console.log("New game Has started")
            round = 0;
            userPoints = 0;
            computerPoints = 0;
            
            // round = 0
            // playGame
        }
        else if(userQuestion === optionNo){
            console.log("player picked NO")
            console.log("Game Over")
        }
        else{
            return console.error("option not selected");
        }*/
    }
    
    else{
        console.log("next round")
        result.style.visibility = "hidden"
        main.style.backgroundColor = null;
        
    }

}
