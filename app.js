
        let round = 0;
        var choices = ["rock", "paper", "scissors"]
        var userPoints = 0
        var computerPoints = 0
        
       

        function computerSelection(){
            //console.log("Computer: ",choices[random])
            let random = Math.floor(Math.random() * choices.length)
            console.log(`computer choice: ${choices[random].toUpperCase()}`)
            return choices[random]
        }
        function playerSelection(){
            const userchoice =  prompt("Select your choice >> [rock] [paper] [scissors]")
            console.log(`Player choice: ${userchoice.toUpperCase()}`)
            return userchoice;
        }
        



        function numberOfRounds(){
            var optionYes = "yes"
            var optionNo = "no"
            if(round >= 5){
                
                
                if (userPoints > computerPoints){
                    console.log("PLAYER WINS GAME!!!")
                }

                else if (computerPoints > userPoints){
                    console.log("COMPUTER WINS GAME!!!")
                }
                else{
                    console.log("IT WAS A GAME TIE!!!")
                }

                var userQuestion = prompt("Play again? Yes | No" ).toLowerCase()
                if(userQuestion === optionYes){
                    console.log("player picked YES")
                    console.log("New game Has started")
                    round = 0;
                    userPoints = 0;
                    computerPoints = 0;
                    playGame(playerSelection(), computerSelection());
                    // round = 0
                    // playGame
                }
                else if(userQuestion === optionNo){
                    console.log("player picked NO")
                    console.log("Game Over")
                }
                else{
                    return console.log("error >> Option was not selected.")
                }
            }
            
            else{
                console.log("next round")
                playGame(playerSelection(), computerSelection()); 
            }

        }


        function playGame(player, computer){
            var rocktext = "rock"
            var papertext = "paper"
            var scissorstext = "scissors"
            var rockLower = rocktext.toLowerCase()
            var paperLower = papertext.toLowerCase()
            var scissorsLower = scissorstext.toLowerCase()
            
           
            if(player === computer){
                console.log("tie!!!")
                round++;
                console.log(`Player points: ${userPoints} // computer points: ${computerPoints}`)
            }
            if(player === rockLower && computer === scissorsLower ||
            player === paperLower && computer === rockLower ||
            player === scissorsLower && computer === paperLower)
            {
                console.log("player gets point!!")
                round++;
                userPoints++;
                console.log(`Player points: ${userPoints} // computer points: ${computerPoints}`)
            }
            if(computer === rockLower && player === scissorsLower ||
            computer === paperLower && player === rockLower ||
            computer === scissorsLower && player === paperLower)
            {
                console.log("computer gets point!!")
                round++;  
                computerPoints++;
                console.log(`Player points: ${userPoints} // computer points: ${computerPoints}`)
            }
            else{
                null
            }


            numberOfRounds();
        }

        playGame(playerSelection(), computerSelection());