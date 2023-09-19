
import multiChoice from "./scripts/multiple-choice-game.js"; 

// const canvas = document.getElementById("canvas")
// canvas.width = 500;
// canvas.height = 500;


//have a do loop to create new multChoice games/questions, condition: answer must be right

let game = new multiChoice();
// game.hands.call(game, 5);
console.log(game);
game.printGame.call(game, 5);
game.dealer.addToHand.call(game.dealer, 1)
// console.log("dealer hand")
// console.log(game.dealer.hand)
console.log('Winner Hand')
console.log(game.bestHand.call(game, 3));

///build a database with possible questions to query for to use during each round


// createTable(game);

// function createTable(game){
    // const canvas = document.querySelector('#canvas');
    // const ctx = canvas.getContext('2d');
    // for(let i = 0; i < 1; i++){
        
    //     const playerHand = game.players[i].hand
    //     const cardOne = document.createElement('img');
    //     const firstCardIdx = UTIL.suits.indexOf(playerHand[0].suit);
    //     let suitArr = UTIL.cardImgs[firstCardIdx];
    //     let cardHash = (suitArr.findIndex(el => el.face === playerHand[0].value));
    //     let cardImg = UTIL.cardImgs[firstCardIdx][cardHash].img;
    //     console.log(cardImg);
    //     cardOne.setAttribute('src', cardImg);
    //     cardOne.setAttribute('data-id', 'player'.concat(i+1))
    //     // canvas.append(cardOne);
    //     // const img = new Image();
    //     // img.src = cardImg;
    //     // ctx.drawImage(
    //     //     cardImg, 0,0
    //     // )

    //     const cardTwo = document.createElement('img');
    //     const secondCardIdx = UTIL.suits.indexOf(playerHand[1].suit)
    //     suitArr = UTIL.cardImgs[secondCardIdx];
    //     cardHash = (suitArr.findIndex(el => el.face === playerHand[1].value));
    //     cardImg = UTIL.cardImgs[secondCardIdx][cardHash].img;
    //     console.log(cardImg);
    //     cardTwo.setAttribute('src', cardImg);
    //     cardTwo.setAttribute('data-id', 'player'.concat(i+1))
        
    //     console.log(cardOne, 1);
    //     console.log(cardTwo, 2);
    // }
// }

// function draw(){
    
// }
