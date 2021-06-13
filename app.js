"use strict";

let userScore=0;
let compScore=0;
const smallUserWord="user".fontsize(3).sub();
const smallCompWord="comp".fontsize(3).sub();
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result >p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const reset_img=document.getElementById("resetImg");

function main() {
    reset_img.style="display:none;";
    
    rock_div.addEventListener("click",()=>{game("r");});

    paper_div.addEventListener("click",()=>{game("p");});

    scissors_div.addEventListener("click",()=>{game("s");});

    reset_img.addEventListener("click",()=>{handleReset();});
}

function game(userChoice){
    let compChoice=getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            compWin(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice);
            break;
    }

}

function getCompChoice(){
    const choices=["r","p","s"];
    let randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];

}

function userWin(userChoice,compChoice){
    let userWord=getWord(userChoice);
    let compWord=getWord(compChoice);
    userScore++;
    reset_img.style="display:inline;";
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=`${userWord}${smallUserWord} beats ${compWord}${smallCompWord}. You win!`;
    setGlow(userChoice,"green");
}

function compWin(userChoice,compChoice){
    let userWord=getWord(userChoice);
    let compWord=getWord(compChoice);
    compScore++;
    reset_img.style="display:inline;";
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=`${userWord}${smallUserWord} loses against ${compWord}${smallCompWord}. You lose...`;
    setGlow(userChoice,"red");
}

function tie(userChoice){
    let userWord=getWord(userChoice);
    result_div.innerHTML=`Both choosed ${userWord}. Its a tie.`;
    setGlow(userChoice,"grey");

}

function getWord(letter){
    let res="";
    switch(letter){
        case "r":
            res="Rock";
            break;
        case "p":
            res="Paper";
            break;
        case "s":
            res="Scissors";
            break;
    }
    return res;
}

function setGlow(userChoice,color){
    document.getElementById(userChoice).classList.add(`${color}-glow`);
    setTimeout(()=>{
        document.getElementById(userChoice).classList.remove(`${color}-glow`);
        },300);
}

function handleReset(){
    let answer = confirm("Do you really want restart?");
    if (answer) {
        userScore=0;
        compScore=0;
        userScore_span.innerHTML=userScore;
        compScore_span.innerHTML=compScore;
        reset_img.style="display:none;";
    }
}

document.addEventListener("DOMContentLoaded", main); 