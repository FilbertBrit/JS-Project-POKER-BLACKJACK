
import multiChoice from "./scripts/multiple-choice-game.js"; 
import * as UTIL from "./scripts/util" ;
// import GameView from "./scripts/game-view.js";

const startMessage = 'Learn how to play poker!! There are three distinct levels but an endless amount of rounds within each level. The goal for each level is to select the strongest hand among the player hands. The first level will consist of only 3 different player hands, hands that have only 2 cards. The second level will include a dealers hand, a hand of 3-4 cards, cards that player hands can use to strengthen their hand. Lastly, the final level will include the complete hand of the dealer, 5 cards, cards that player hands can also use to strengthen their hand. Again the goal is select the STRONGEST hand. Check out the info icon next to the sound button to see a scoring sheet. Good Luck!!! READY?!'
// const startMes = 'Welcome to Poker Pro! Here you can learn how to play poker.';
const winningMessage = ['Correct!', 'Nice!', 'Good Job!', 'Wow, correct again!', 'Correct, you are on a roll!', 'Keep it up!!']
const losingMessage = ['Not quite. '];
let level = 1;
let lost = false;
let streak = 0
let game;
const scoringDiv = document.getElementById('scoring') //div holding scoring sheet
const board = document.getElementById('board') //div holding game boards
const dealerDiv = document.getElementById('dealer-cards'); //div that holds dealers cards
const feedbackContainer = document.getElementById('feedback-container')
const score = document.getElementById('score');
const playerHandsContainer = document.getElementById('players-hands-container')
let loseScreen = document.getElementById('losing-screen');
let loseMessage = document.getElementById('losing-message');
const soundButton = document.getElementById('sound-button');
const audio = document.getElementById('audio')
audio.style.display = 'none';
audio.pause();
let audioActive = false;
const openingMessage = document.getElementById('opening')
const noneOpeningMessage = document.getElementById('not-opening')

const openingStart = document.getElementById('opening-start')
const infoClick = document.getElementById("info-button")
let time = 10;

document.addEventListener("DOMContentLoaded", () => {
    noneOpeningMessage.style.display = 'none';
    scoringDiv.style.display = "none";  //blocks div from displaying contents
    loseScreen.style.display = 'none';
    startGame(level);
    document.getElementById("start-message").innerHTML = startMessage;
    // const divStartbutton = document.getElementById("start-button")
    // divStartbutton.innerHTML = ('Click Here To Start');
    

    // want to do something similar for my music
    // function toggleMusic(){
    //     audioButton.onclick = function () {
    //       audioButton.classList.toggle('active')
    //       if (audio.paused) {
    //         document.getElementById("play-audio").src = "./assets/darkmodeButtons/musicOn.png"
    //         audio.play()
    //       } else {
    //         document.getElementById("play-audio").src = "./assets/darkmodeButtons/musicOff.png"
    //         audio.pause();
    //       }
    //     }
    // }

    
    // let game = startGame(level);
    // while(!lost){
    //     let result = startGame(++level);
    //     lost = true;
    // }

    // if(streak === 0){
    //     const infoIconMessage = document.createElement('h3');

    // }

})

//will create a game, find the winning hand and output the game onto the app
function startGame(level){

    game = new multiChoice();
    const gameResult = game.bestHand(level); // grabs the best hand depending on level
    // game.printGame.call(game); //debugging purposes, to see the full game info in console
    const questionH2 = document.querySelector("#questionH2");
    
    if(level > 1){
        dealerDiv.style.display = 'block';
        const dealerCardContainer = document.createElement('div')
        dealerCardContainer.setAttribute('id','dealerCardContainer');
        dealerCardContainer.style.display = "flex";
        const dealerH3 = document.createElement('h3')
        dealerH3.innerHTML = "Dealer's hand"
        dealerH3.setAttribute('id', 'dealer-title')
        dealerDiv.append(dealerH3)
        dealerDiv.append(dealerCardContainer);
        const dealersHand = game.dealer.hand;

        for(let i = 0; i < dealersHand.length; i++){
            const card = document.createElement('img');
            const cardIdx = UTIL.suits.indexOf(dealersHand[i].suit);
            const suitArr = UTIL.cardImgs[cardIdx];
            const cardHash = (suitArr.findIndex(el => el.face === dealersHand[i].value));
            const cardImg = UTIL.cardImgs[cardIdx][cardHash].img;
            card.setAttribute('src', cardImg);
            dealerCardContainer.appendChild(card);
        }
    }else{
        dealerDiv.style.display = 'none'
    }

    if([1,4,5].includes(level)){
        questionH2.innerHTML = UTIL.questions[0];
    }else if(level === 2){
        questionH2.innerHTML = UTIL.questions[1];
    }else{
        questionH2.innerHTML = UTIL.questions[2];
    }

    const div = document.createElement('div')
    div.setAttribute('id',"players-hands");
    playerHandsContainer.append(div)

    //for-loop for displaying hands of current game
    for(let i = 0; i < game.players.length; i++){
        const innerDiv = document.createElement('div')
        innerDiv.setAttribute('id', ('player-hand').concat(String(i+1)));
        // innerDiv.setAttribute("style","width:200px");
        div.append(innerDiv);
        const h3 = document.createElement('h3')
        h3.innerHTML = ('hand ').concat(String(i+1))
        innerDiv.append(h3)
        const nestedDiv = document.createElement('div');
        nestedDiv.setAttribute('id', 'cards-container')
        innerDiv.appendChild(nestedDiv);

        const playerHand = game.players[i].hand;
        const cardOne = document.createElement('img');
        const cardTwo = document.createElement('img');
        const firstCardIdx = UTIL.suits.indexOf(playerHand[0].suit);
        const secondCardIdx = UTIL.suits.indexOf(playerHand[1].suit)
        let suitArr = UTIL.cardImgs[firstCardIdx];
        let cardHash = (suitArr.findIndex(el => el.face === playerHand[0].value));
        let cardImg = UTIL.cardImgs[firstCardIdx][cardHash].img;
        cardOne.setAttribute('src', cardImg);
        nestedDiv.appendChild(cardOne);
        suitArr = UTIL.cardImgs[secondCardIdx];
        cardHash = (suitArr.findIndex(el => el.face === playerHand[1].value));
        cardImg = UTIL.cardImgs[secondCardIdx][cardHash].img;
        // console.log(cardImg)
        cardTwo.setAttribute('src', cardImg);
        nestedDiv.appendChild(cardTwo);

    }
    // checkInfoClick();
    userSelect();

    // return gameResult // return winning card, later [card, tie, game?, idx?]

}

//create a feefback element and add text of feedback
let feedback = document.createElement('h1')
feedbackContainer.append(feedback)

//checks if the hand the user clicked on is correct, creates new game if correct
function checkAnswer(game, answer){
    // console.log(game.players[answer-1].hand)

    if(game.winningHand === game.players[answer-1].hand || (game.tie && game.tiedHand === game.players[answer-1].hand)){

        console.log(winningMessage[0]);
        if(streak === 0){
            feedback.innerHTML = winningMessage[0] + ' ' + game.outcome
        }else{
            feedback.innerHTML = winningMessage[Math.floor(Math.random() * winningMessage.length)] + ' ' + game.outcome
        }
        // level++;
        streak++;
        score.innerHTML = 'Score: '+ streak.toString()
        lost = false;

        setTimeout(() => {
            let div = document.getElementById("players-hands");
            div.remove();
    
            if(document.getElementById("dealerCardContainer")){
    
                let dealerH3 = document.getElementById('dealer-title')
                dealerH3.remove();
                dealerDiv.append(dealerH3)
                let dealerCardContainer = document.getElementById("dealerCardContainer")
                dealerCardContainer.remove();
                dealerCardContainer = document.createElement('div')
                dealerCardContainer.setAttribute('id', 'dealerCardContainer')
                dealerCardContainer.style.display = "flex";
                dealerDiv.append(dealerCardContainer);
            }
            feedback.remove();
            feedback = document.createElement('h1')
            feedbackContainer.append(feedback)

            startGame(level);
        }, 1850);
    }else{
        console.log(losingMessage[0]);
        feedback.innerHTML = losingMessage[0] + game.outcome;
        score.innerHTML = 'Score: 0'

        setTimeout(() => {

            board.style.display = 'none'
            loseScreen.style.display = 'block'
            loseMessage.innerHTML = `Your score was ${streak}, care to beat it? `;
            streak = 0;

            // setTimeout(() => {

            //     noneOpeningMessage.style.display = 'none';
            //     openingMessage.style.display = 'block'
            //     loseScreen.style.display = 'none'
            //     let div = document.getElementById("players-hands");
            //     div.remove();
            //     feedback.remove();
            //     feedback = document.createElement('h1')
            //     feedbackContainer.append(feedback)
            //     startGame(level);
            //     board.style.display = 'block'
                
            // }, 5.5 * 1000)

            checkRetryGame();
        }, 2.5 * 1000)
        lost = true;
    }
    
}

function userSelect(){
    document.getElementById('players-hands').addEventListener('click', e => {
        let answer;
    
        if(e.target.id.slice(0,e.target.id.length-1) === 'player-hand'){
            answer = e.target.id.slice(e.target.id.length-1);
            checkAnswer(game, answer)
            
        }else if(e.target.parentNode.id.slice(0,e.target.parentNode.id.length-1) === 'player-hand'){
            answer = e.target.parentNode.id.slice(e.target.id.length-1);
            checkAnswer(game, answer)
            
        }else if(e.target.parentNode.parentNode.id.slice(0,e.target.parentNode.parentNode.id.length-1) === 'player-hand'){
            answer = e.target.parentNode.parentNode.id.slice(e.target.id.length-1);
            checkAnswer(game, answer)
        }
    })
}

let infoClicker;
//code that creates and shows the scoring img div
// function checkInfoClick(){
//     const infoClick = document.getElementById("info-button")
//     infoClick.addEventListener('click', (e) => {
    
//         if(loseScreen.style.display === 'block'){
//             infoClicker = 'lockScreen'
//             scoringDiv.style.display = 'flex';
//             loseScreen.style.display = 'none'
    
//         }else if(board.style.display === 'block'){
//             infoClicker = 'board'
//             scoringDiv.style.display = 'flex';
//             board.style.display = 'none'
//         }else if(infoClicker === 'lockScreen'){
//             infoClicker = ''
//             scoringDiv.style.display = 'none';
//             loseScreen.style.display = 'block'
//         }else if(infoClicker === 'board'){
//             infoClicker = ''
//             scoringDiv.style.display = 'none';
//             board.style.display = 'block'
//         }else if(streak === 0){ // not sure why I need this
//             infoClicker = 'board'
//             scoringDiv.style.display = 'flex';
//             board.style.display = 'none'
//         }
    
//     })
// }
// const infoClick = document.getElementById("info-button")
infoClick.addEventListener('click', (e) => {
    console.log(e)

    if(loseScreen.style.display === 'block'){
        infoClicker = 'lockScreen'
        scoringDiv.style.display = 'flex';
        loseScreen.style.display = 'none'

    }else if(board.style.display === 'block'){
        infoClicker = 'board'
        scoringDiv.style.display = 'flex';
        board.style.display = 'none'
    }else if(infoClicker === 'lockScreen'){
        infoClicker = ''
        scoringDiv.style.display = 'none';
        loseScreen.style.display = 'block'
    }else if(infoClicker === 'board'){
        infoClicker = ''
        scoringDiv.style.display = 'none';
        board.style.display = 'block'
    }else 
        {infoClicker = 'board'
        scoringDiv.style.display = 'flex';
        board.style.display = 'none'
    }

})

soundButton.addEventListener('click', e => {
    //add code to start/stop music
    //and change music icon
    if(!audioActive){
        audio.play();
        soundButton.setAttribute('src', 'images/sound-off.png')
        audioActive = true;
    }else{
        audio.pause();
        soundButton.setAttribute('src', 'images/sound-high.png')
        audioActive = false;
    }

})

openingStart.addEventListener('click', e => {
    openingMessage.style.display = 'none';
    noneOpeningMessage.style.display = 'block';
})


function checkRetryGame(){

    document.getElementById('play-button').addEventListener('click', e => {
        let div = document.getElementById("players-hands");
        div.remove();

        if(document.getElementById("dealerCardContainer")){

            let dealerH3 = document.getElementById('dealer-title')
            dealerH3.remove();
            dealerDiv.append(dealerH3)
            let dealerCardContainer = document.getElementById("dealerCardContainer")
            dealerCardContainer.remove();
            dealerCardContainer = document.createElement('div')
            dealerCardContainer.setAttribute('id', 'dealerCardContainer')
            dealerCardContainer.style.display = "flex";
            dealerDiv.append(dealerCardContainer);
        }
        feedback.remove();
        feedback = document.createElement('h1')
        feedbackContainer.append(feedback)

        startGame(1);
        loseScreen.style.display = 'none'
        board.style.display = 'block';
    })
}

// //have a do loop to create new multChoice games/questions, condition: answer must be right
