let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreboard = document.querySelector("#user-score");
const compScoreboard = document.querySelector("#comp-score");
const img = document.querySelector("img");

const genCompchoice = () =>{
    const object = ["rock", "paper", "scissors"];
    const random = Math.floor((Math.random())* 3);
    return object[random];
}

const playGame = (userChoice) =>{
    console.log("user Choice is", userChoice);
    const compChoice = genCompchoice();
    console.log("Computer Choice is", compChoice);

    if(userChoice === compChoice){
    draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "scissors" ? true : false; 
        }
        else if(userChoice === "paper"){
        userWin = compChoice === "rock" ? true : false;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    }

const draw = () =>{
    console.log("it was a draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin === true){ 
    userScore++;
    userScoreboard.innerText =  userScore;
    msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
       compScoreboard.innerText = compScore;
       msg.innerText = `You lose. The ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor = "Red"; 
}
checkGameOver();
}

const disableBox = () => {
    choices.forEach((choice) => {
        choice.disabled = true;
    });
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
