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
        this.dealer.addToHand.call(this.dealer, 3)
    }

    hands(num){ // function for generating the num of hands wanted per game
        for(let i = 0; i < num; i++){
            let player = new PlayerHand(this.deck) // creating a hand that also has a reference to the games deck
            player.addToHand.call(player, 2) //hands will only ever have two cards
            this.players.push(player) //adding each hand to the players array of the game
        }
    }

    printGame(){
        console.log(this.dealer.hand)
        for(let i = 0; i < this.players.length; i++){
            console.log(this.players[i].hand);
        }
    }

    //not too sure if we need this yet
    handValues(){
        for(let i = 0; i < this.players.length; i++){
           let hand = this.players[i].hand
           let value = 0
           for(let i = 0; i < hand.length; i++){
            // console.log(hand[i])
                if(typeof(hand[i].value) === "number"){
                    // console.log(hand[0].value)
                    value += hand[i].value;
                }else{
                    value += UTIL.letterValue[hand[i].value]
                }
            }
            hand.push(value);
        }
    }

    bestHand(round){
        if(round === 1){ //first round only check players cards not dealers
            let tie = false;
            // debugger
            let hand = this.players[0].hand;
            for(let i = 1; i < this.players.length; i++){
                let currentHand = this.players[i].hand;
                //booleans checking if any of the two have a pair
                let handPair = hand[0].value === hand[1].value;
                let currentHandPair = currentHand[0].value === currentHand[1].value; 

                if(handPair || currentHandPair){ // at least one has a pair
                    if(handPair && currentHandPair){ // if both, checking for highest card
                        if(hand[0].value === currentHand[0].value){
                            tie = true;
                        }else{
                            hand = (hand[0].value > currentHand[0].value ? hand : currentHand)
                        }
                    }else{
                        hand = (handPair ? hand : currentHand)
                    }


                }else{ // no pair, just checking for highest card
                    let handHighest = (hand[0].value > hand[1].value ? hand[0].value : hand[1].value)
                    let currentHandHighest = (currentHand[0].value > currentHand[1].value ? currentHand[0].value : currentHand[1].value)

                    hand = (handHighest > currentHandHighest ? hand : currentHand)
                }
            }

            return hand;
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
game.printGame.call(game, 5);
console.log(game.bestHand.call(game, 1));

///build a database with possible questions to query for to use during each round

