let RockDiv=document.getElementById('Rock');
let PaperDiv=document.getElementById('Paper');
let ScissorDiv=document.getElementById('Scissors');

function getComputerChoice() {
    let string=['rock','paper','scissors'];
    let randomNumber=(Math.floor(Math.random()*string.length));
    // console.log(randomNumber);
    // console.log(string[randomNumber]);
    return string[randomNumber];
}
function playGame() {
    let Rock=document.querySelector('Rock');
    let Paper=document.querySelector('Paper');
    let Scissors=document.querySelector('Scissors');
}