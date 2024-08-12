let UserScore = 0;
let CompUser =0;
const msgs = document.querySelector("#msg")
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const choices = document.querySelectorAll(".choice")



const DrawGame = () =>{
     msgs.innerText = "Game Draw"

}
const genCompChoice = () =>{
    const option = ["rock", "paper", "scissor"]
    const ranID = Math.floor(Math.random() * 3)
    return option[ranID]
}

const playGame =(Userchoice) =>{
    console.log("User Choice:", Userchoice)
    const compchoice = genCompChoice()
    console.log("Comp Choice: " , compchoice)

    if(Userchoice === compchoice){
        DrawGame()
    }
    else{
        let userwin = true

        if(Userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true
        }
            

        else if (Userchoice === "paper")
        {
            userwin = compchoice === "scissor" ? false : true
        }
        else{

            userwin = compchoice === "rock"?false : true
        }
        ShowWinner(userwin)
          

        
    }
}
const ShowWinner = (userwin , Userchoice, compchoice)=>{
    if (userwin){
        UserScore++;
        userScorepara.innerText= UserScore
        console.log("you win")
        msgs.innerText = `User Win.`;
        
    
    }
    else{
        CompUser++
        compScorepara.innerText= CompUser
        console.log("you lose")
        msgs.innerText = `Comp Win.`
    }
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",() =>{
    const Userchoice = choice.getAttribute("id")
    playGame(Userchoice)
    })
   
})