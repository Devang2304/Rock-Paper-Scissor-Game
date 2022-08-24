const totalScore={computerScore:0,PlayerScore:0}

function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}
function getResult(playerChoice,computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score=0;
    }
    else if (playerChoice=='Rock' && computerChoice=='Scissors')   {
        score=1;
    }
    else if (playerChoice=='Scissors' && computerChoice=='Paper')  {
        score=1;
    }
    else if (playerChoice=='Paper' && computerChoice=='Rock'){
        score =1;
}else{
    score=-1;
}
 return score;
 }
function showResult(score,playerChoice,computerChoice) {
   const resultDiv=document.getElementById('result')
   const handsDiv=document.getElementById('hands')
   const playerScoreDiv=document.getElementById('player-score')
   
   if (score==-1) {
    resultDiv.innerText='You lose!'
   }else if(score ==0){
    resultDiv.innerText="It's a tie!"
   }else{
    resultDiv.innerText='You win!'
   }
   handsDiv.innerText=`👱${playerChoice} vs 🤖${computerChoice}`
   playerScoreDiv.innerText=totalScore['PlayerScore']
   }


 function onClickRPS(playerChoice) {
    const computerChoice=getComputerChoice()
    const score=getResult(playerChoice,computerChoice)
    totalScore['PlayerScore']+=score
    showResult(score,playerChoice,computerChoice)
 }
    
function playGame() {
    let rpsButtons=document.querySelectorAll('.rpsButton')
    //rpsButtons[0].onclick=()=>console.log(rpsButtons[0].value)

    rpsButtons.forEach(rpsButton=>{
        rpsButton.onclick=()=>onClickRPS(rpsButton.value)
    })
    const endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame()
}
function endGame() {
   totalScore['playerScore'] =0;
   totalScore['computerChoice'] =0;
   const resultDiv=document.getElementById('result')
   const handsDiv=document.getElementById('hands')
   const playerScoreDiv=document.getElementById('player-score')
   resultDiv.innerText=''
   handsDiv.innerText=''
   playerScoreDiv.innerText=''
}
playGame()


