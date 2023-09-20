
import multiChoice from "./scripts/multiple-choice-game.js"; 
import * as UTIL from "./scripts/util" ;
// import GameView from "./scripts/game-view.js";

const startMessage = 'Welcome to Poker Pro! Here you can learn how to play poker. There are three distinct levels but an endless amount of rounds within each level. The goal for each level is to select the strongest hand amoung the player hands. The first level will consist of only 3 different player hands, hands that have only 2 cards. The second level will include a dealers hand, a hand of 3-4 cards, cards that player hands can use to strengthen their hand. Lastly, the final level will include the complete hand of the dealer, 5 cards, cards that player hands can also use to strengthen their hand. Again the goal is select the STRONGEST hand. Good Luck!!! READY?!'
let answerMessage = ['Correct!', 'Not quite.']
let level = 1;
let lost = false;
let game;
const scoringDiv = document.getElementById('scoring') //div holding scoring sheet
const board = document.getElementById('board') //div holding game boards

document.addEventListener("DOMContentLoaded", () => {

    scoringDiv.style.display = "none";  //blocks div from displaying contents

    startGame(level);
    //call func to setup listener
    const divStartMessage = document.getElementById("start-message");
    divStartMessage.innerHTML = startMessage
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
    
})


//will create a game, find the winning hand and output the game onto the app
function startGame(level){

    game = new multiChoice();
    const gameResult = game.bestHand(level);
    game.printGame.call(game);
    console.log('Game Results', gameResult.winningHand)
    const questionH2 = document.querySelector("#questionH2");
    
    if(level > 1){
        const dealerDiv = document.getElementById("dealer-cards")
        const h3 = document.createElement('h3');
        h3.innerHTML = 'Dealer Hand'
        dealerDiv.append(h3)
        const dealerCardContainer = document.createElement('div')
        dealerCardContainer.setAttribute('id', 'dealerCardContainer')
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
    }

    if([1,4,5].includes(level)){
        questionH2.innerHTML = UTIL.questions[0];
    }else if(level === 2){
        questionH2.innerHTML = UTIL.questions[1];
    }else{
        questionH2.innerHTML = UTIL.questions[2];
    }

    const div = document.getElementById("players-hands");
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
    //call func to 

    return gameResult // return winning card, later [card, tie, game?, idx?]

}

//checks if the hand the user clicked on is correct, creates new game if correct
function checkAnswer(game, answer){
    if(game.winningHand === game.players[answer-1].hand){
        console.log(answerMessage[0]);
        level++;
        console.log(level)

        let div = document.getElementById("players-hands");
        div.remove();
        let body = document.getElementById('body')
        div = document.createElement('div')
        div.setAttribute('id', 'players-hands')
        body.append(div)

        // const container = document.getElementById("dealerCardContainer")
        // container.remove();
        // const dealerDiv = document.getElementById("dealer-cards")
        // container = document.createElement('div')
        // container.setAttribute('id', 'dealerCardContainer')
        // container.innerHTML = 'Dealer Hand'
        // const h3 = document.createElement('h3');
        // h3.innerHTML = 'Dealer Hand'
        // container.append(h3)
        // dealerDiv.append(container);

        lost = false;
        div = document.getElementById('scoring');
        let answer = document.createElement('h1')
        answer.innerHTML = answerMessage[0]
        div.append(answer);
        // startGame(level);
        setTimeout(() => {
            answer.remove();
            startGame(level);
        }, 3 * 1000);
    }else{
        console.log(answerMessage[1]);
        lost = true;
    }



    
}

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

//code that creates and shows the scoring img div
const infoClick = document.getElementById("info-button")
infoClick.addEventListener('click', (e) => {
    
    if(scoringDiv.style.display === 'flex'){
        scoringDiv.style.display = 'none'
        board.style.display = 'flex'
    }else{
        scoringDiv.style.display = 'flex';
        board.style.display = 'none'
    }
})


// //have a do loop to create new multChoice games/questions, condition: answer must be right
