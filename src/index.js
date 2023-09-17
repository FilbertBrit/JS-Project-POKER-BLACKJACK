// import multiChoice from "./scripts/multiple-choice-game.js"
// const PlayerHand = require('./scripts/player-hand.js');
// import * as PlayerHand from "./scripts/player-hand.js"
import { deckCreation } from "./scripts/cards.js"; // importing function that created the deck
import * as UTIL from "./scripts/util.js" // importing arrays of card values

const canvas = document.getElementById("canvas")
canvas.width = 500;
canvas.height = 500;

class multiChoice {
    constructor(){
        // this.ctx = canvas.getContext('2d');
        this.deck = deckCreation(); // deck used for multi-choice game
        this.players = []; //array that will hold all hands of the current game
        this.dealer = new PlayerHand(this.deck);
    }

    hands(num){ // function for generating the num of hands wanted per game
        for(let i = 0; i < num; i++){
            let player = new PlayerHand(this.deck) // creating a hand that also has a reference to the games deck
            player.addToHand.call(player, 2) //hands will only ever have two cards
            this.players.push(player) //adding each hand to the players array of the game
        }
    }
}
class PlayerHand{
    constructor(deck){
        this.deck = deck; // reference to the game's card deck
        this.hand = []; // array that will holf this hand's cards
    }


    addToHand(num){
        //take a card from deck and add to hand
        while(num > 0){
            this.hand.push(this.deck.shift());
            num--;
        }
    }
}

let game = new multiChoice();
game.hands.call(game, 5);
console.log(game);