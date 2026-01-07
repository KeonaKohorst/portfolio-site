import React, { useLayoutEffect } from 'react';
import $ from 'jquery'; // Run: npm install jquery
import '../styleRPS.css';

const RockPaperScissors = () => {

  useLayoutEffect(() => {
   
    const ogHeight = $('#vs').height(); // Added () since .height is a function in jQuery
    let userChoice = "none";
    
    const rockButton = document.getElementById("rockButton");
    const paperButton = document.getElementById("paperButton");
    const scissorsButton = document.getElementById("scissorsButton");
    const fightButton = document.getElementById("fightButton");
    const playAgainButton = document.getElementById("playAgainButton");
    const uResult = document.getElementById("uResult");
    const cResult = document.getElementById("cResult");
    const uChoice = document.getElementById("uChoice");
    const cChoice = document.getElementById("cChoice");

    // All your existing functions
    function adjustHeight() {
        if(userChoice === 'none'){
            let height = $("div[name]").height();
            $("#vs").css("height", height);
        } else {
            $("#vs").css("height", ogHeight);
        }
    }

    function adjustHeightSides(){
        let targetHeight = $("#vs").height();
        $(".handsColumn").css("height", targetHeight);
    }

    // Your Event Listeners
    rockButton.addEventListener('click', () => {
        userChoice = "r";
        uChoice.innerHTML = "Rock";
        $('#uChoice').removeClass("hidden").css("font-size", "300%");
        adjustHeight();
    });

    paperButton.addEventListener('click', () => {
        userChoice = "p";
        uChoice.innerHTML = "Paper";
        $('#uChoice').removeClass("hidden").css("font-size", "300%");
        adjustHeight();
    });

    scissorsButton.addEventListener('click', () => {
        userChoice = "s";
        uChoice.innerHTML = "Scissors";
        $('#uChoice').removeClass("hidden").css("font-size", "300%");
        adjustHeight();
    });

    fightButton.addEventListener('click', () => {
        if(userChoice === "none"){
            window.alert("Must select a hand to play!");
        } else {
            $('#fightButton').addClass("gone");
            fadeOutOtherUserOptions(userChoice);
            const compChoice = getComputerChoice();
            fadeOutOtherCompOptions(compChoice);
            adjustHeightSides();
            writeCompChoice(compChoice);
            $("#cChoice").removeClass("hidden");
            const winner = determineWinner(userChoice, compChoice);
            dealWithWinner(winner);
            $("#playAgainButton").removeClass("hidden");
        }
    });

    playAgainButton.addEventListener('click', () => {
        window.location.reload(); 
    });

    // ... (Keep all your other functions: getComputerChoice, determineWinner, dealWithWinner)
    function getComputerChoice(){
        const choices = ["r", "p", "s"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function writeCompChoice(compChoice){
        const names = {r: "Rock", p: "Paper", s: "Scissors"};
        cChoice.innerHTML = names[compChoice];
        $('#cChoice').css("font-size", "300%");
    }

    function fadeOutOtherUserOptions(choice){
        if(choice === 'r') { $('#paperButton, #scissorsButton').slideUp(); }
        else if(choice === 'p') { $('#rockButton, #scissorsButton').slideUp(); }
        else { $('#rockButton, #paperButton').slideUp(); }
    }

    function fadeOutOtherCompOptions(choice){
        if(choice === 'r') { $('#cPaper, #cScissors').slideUp(); }
        else if(choice === 'p') { $('#cRock, #cScissors').slideUp(); }
        else { $('#cRock, #cPaper').slideUp(); }
    }

    function determineWinner(u, c){
        if(u === c) return 'tie';
        if((u==='r'&&c==='s') || (u==='p'&&c==='r') || (u==='s'&&c==='p')) return 'user';
        return 'computer';
    }

    function dealWithWinner(winner){
        $('#uResult, #cResult').hide();
        if(winner === 'user'){
            uResult.innerHTML="WINNER"; cResult.innerHTML="LOSER";
            $('.userHands').css("background-color", "#90BE6D");
            $('.computerHands').css("background-color", "#F94144");
        } else if(winner === 'computer'){
            uResult.innerHTML="LOSER"; cResult.innerHTML="WINNER";
            $('.userHands').css("background-color", "#F94144");
            $('.computerHands').css("background-color", "#90BE6D");
        } else {
            uResult.innerHTML="TIE"; cResult.innerHTML="TIE";
            $('.userHands, .computerHands').css("background-color", "#F9844A");
        }
        $('#uResult, #cResult').fadeIn(3000);
    }

  }, []); // Empty array means "Run this once when the component loads"

  return (
    <div className="rps-wrapper">
        <header>
            <div className="nav">
                <button className="button-header" id="homeButton">Home</button>
                <button className="button-header" id="rpsButton">Rock Paper Scissors</button>
            </div>
            <h1>ROCK PAPER SCISSORS</h1>
        </header>
        <main>
            <div className="row">
                <div className="col-4 userHands handsColumn">
                    <button className="handButton" id="rockButton"><img className="hand" src="src/uRock.png" alt=""/></button>
                    <button className="handButton" id="paperButton"><img className="hand" src="src/uPaper.png" alt=""/></button>
                    <button className="handButton" id="scissorsButton"><img className="hand" src="src/uScissors.png" alt=""/></button>
                    <p className="result" id="uResult"></p>
                </div>
                
                <div className="col-4" id="vs">
                    <p id="uChoice" className="hidden">filler</p>
                    <p>VS.</p>
                    <p id="cChoice" className="hidden">filler</p>
                </div>

                <div className="col-4 computerHands handsColumn">
                    <button id="cRock"><img className="hand" src="src/cRock.png" alt=""/></button>
                    <button id="cPaper"><img className="hand" src="src/cPaper.png" alt=""/></button>
                    <button id="cScissors"><img className="hand" src="src/cScissors.png" alt=""/></button>
                    <p className="result" id="cResult"></p>
                </div>
            </div>
            
            <div className="row">
                <button className="menu" id="fightButton">SHOOT!</button>
                <button className="menu hidden" id="playAgainButton">play again</button>
            </div>
        </main>
    </div>
  );
};

export default RockPaperScissors;