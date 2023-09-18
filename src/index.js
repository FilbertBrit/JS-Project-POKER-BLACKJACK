// import multiChoice from "./scripts/multiple-choice-game.js"
// const PlayerHand = require('./scripts/player-hand.js');
// import * as PlayerHand from "./scripts/player-hand.js"
import { deckCreation } from "./scripts/cards.js"; // importing function that created the deck
import * as UTIL from "./scripts/util.js" // importing arrays of card values

// const canvas = document.getElementById("canvas")
// canvas.width = 500;
// canvas.height = 500;

class multiChoice { 
    constructor(){
        // this.ctx = canvas.getContext('2d');

        this.deck = deckCreation(); // deck used for multi-choice game
        this.players = []; //array that will hold all hands of the current game
        this.dealer = new PlayerHand(this.deck);
        this.dealer.addToHand.call(this.dealer, 3) // dealer always starts off with 3 cards
    }

    hands(num){ // function for generating the num of players/hands wanted per game
        for(let i = 0; i < num; i++){
            let player = new PlayerHand(this.deck) // creating a hand that also has a reference to the game's deck
            player.addToHand.call(player, 2) //players/hands will only ever have two cards
            this.players.push(player) //adding each hand to game's players array
        }
    }

    printGame(){ // prints all cards in the game(dealer + players)
        console.log(this.dealer.hand)
        for(let i = 0; i < this.players.length; i++){
            console.log(this.players[i].hand);
        }
    }

    //not too sure if we need this yet
    // handValues(){
    //     for(let i = 0; i < this.players.length; i++){
    //        let hand = this.players[i].hand
    //        let value = 0
    //        for(let i = 0; i < hand.length; i++){
    //         // console.log(hand[i])
    //             if(typeof(hand[i].value) === "number"){
    //                 // console.log(hand[0].value)
    //                 value += hand[i].value;
    //             }else{
    //                 value += UTIL.letterValue[hand[i].value]
    //             }
    //         }
    //         hand.push(value);
    //     }
    // }

    bestHand(round){
        let tie = false;
        let hand;
        let currentHand;

        if(round < 3){ //first round only check players cards not dealers
            // debugger
            hand = this.players[0].hand;
            for(let i = 1; i < this.players.length; i++){
                currentHand = this.players[i].hand;
                //booleans checking if any of the two have a pair
                let handPair = hand[0].value === hand[1].value;
                let currentHandPair = currentHand[0].value === currentHand[1].value; 

                if(handPair || currentHandPair){ // at least one has a pair
                    if(handPair && currentHandPair){ // if both, checking for highest card
                        if(hand[0].value === currentHand[0].value){
                            tie = true;
                        }else{
                            hand = (UTIL.values.indexOf(hand[0].value) > UTIL.values.indexOf(currentHand[0].value) ? hand : currentHand)
                        }
                    }else{
                        hand = (handPair ? hand : currentHand)
                    }


                }else{ // no pair, just checking for highest card
                    let handHighest = (UTIL.values.indexOf(hand[0].value) > UTIL.values.indexOf(hand[1].value) ? hand[0].value : hand[1].value);
                    let currentHandHighest = (UTIL.values.indexOf(currentHand[0].value) > UTIL.values.indexOf(currentHand[1].value) ? currentHand[0].value : currentHand[1].value)

                    if(handHighest === currentHandHighest) tie = true;

                    hand = (UTIL.values.indexOf(handHighest) > UTIL.values.indexOf(currentHandHighest) ? hand : currentHand)
                }
            }
            if(tie) console.log("tie")
            return hand;
            // end of game logic for round 1

        } else if(this.dealer.hand.length < 5){ //look for high card, pair, two pair, 3-of-a-kind, 4-of-a-kind
            let handIdx = 0;
            hand = this.players[0].hand.concat(this.dealer.hand)
            // console.log(hand)

            for(let i = 1; i < this.players.length; i++){
                currentHand = this.players[i].hand.concat(this.dealer.hand)

                //hashes to count pairs*
                let handCount = {};
                let currHandCount = {};
                for(let i = 0; i < hand.length; i++){
                    (handCount[hand[i].value]) ? handCount[hand[i].value].push(i) : handCount[hand[i].value] = [i];
                    (currHandCount[currentHand[i].value]) ? currHandCount[currentHand[i].value].push(i) : currHandCount[currentHand[i].value] = [i];
                }

                if (Object.values(handCount).find((ele) => ele.length > 4) || Object.values(currHandCount).find((ele) => ele.length > 4)){
                    handFourOfKind = Object.values(handCount).find((ele) => ele.length > 4);
                    currHandFourOFKind = Object.values(currHandCount).find((ele) => ele.length > 4);
                    if(handFourOfKind && currHandFourOFKind){
                        if(UTIL.values.indexOf(handFourOfKind[0]) === UTIL.values.indexOf(currHandFourOFKind[0])){
                            tie = true;
                        }else if (UTIL.values.indexOf(handFourOfKind[0]) < UTIL.values.indexOf(currHandFourOFKind[0])){
                            
                        }
                    }else{
                        if (currHandFourOFKind) hand = currHandCount;
                    }
                }else if (Object.values(handCount).find((ele) => ele.length > 3) || Object.values(currHandCount).find((ele) => ele.length > 3)){

                }else if (Object.values(handCount).find((ele) => ele.length > 22) || Object.values(currHandCount).find((ele) => ele.length > 2)){

                }
                // console.log(Object.values(handCount))
                // console.log(handCount)
                // console.log(currHandCount)
                
            }
            return this.players[handIdx].hand;
        }else{ //case: dealer has all 5 cards
            let dealerHand = this.dealer.hand;
            // console.log(dealerHand)
            hand = this.players[0].hand.concat(dealerHand);
            // console.log(this.players[0].hand);

            for(let i = 1; i < this.players.length; i++){
                currentHand = this.players[i].hand.concat(dealerHand);
                // need logic to check what kind of hand they have;
            }

            if(tie) console.log(tie)
            return hand;
        } //end of all other rounds logic
    }

}
class PlayerHand{
    constructor(deck){
        this.deck = deck; // reference to the game's card deck
        this.hand = []; // array that will hold this player's cards
    }


    addToHand(num){
        //take a card from deck and add to hand, remove card from deck
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
console.log("Winning card")
console.log(game.bestHand.call(game, 3));

///build a database with possible questions to query for to use during each round

