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

    bestHand(round){
        let tie = false;
        let hand;
        let currentHand;

        if(round < 3){ //first round only check players cards not dealers
            // debugger
            hand = this.players[0].hand;
            // for(let i = 1; i < this.players.length; i++){
            for(let i = 1; i < 2; i++){
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
                    let result = this.compareHandValues(hand, currentHand);
                    if (result === 'tie'){
                        tie = true;
                    }else if (result === currentHand){
                        hand = result;
                    }
                }
            }
            if(tie) console.log("tie")
            return hand;
            // end of game logic for round 1-2

        } else if(this.dealer.hand.length < 5){ //look for high card, pair, two pair, 3-of-a-kind, 4-of-a-kind
            let handIdx = [0];
            hand = this.players[0].hand.concat(this.dealer.hand)
            console.log('hand');
            console.log(hand)

            // for(let i = 1; i < this.players.length; i++){
            for(let i = 1; i < 2; i++){ //debugging purposes
                currentHand = this.players[i].hand.concat(this.dealer.hand)
                console.log('current hand')
                console.log(currentHand);

                //hashes to count pairs*
                let handCount = {};
                let currHandCount = {};
                for(let i = 0; i < hand.length; i++){
                    (handCount[hand[i].value]) ? handCount[hand[i].value].push(i) : handCount[hand[i].value] = [i];
                    (currHandCount[currentHand[i].value]) ? currHandCount[currentHand[i].value].push(i) : currHandCount[currentHand[i].value] = [i];
                }
                console.log('hashes');
                console.log(handCount);
                console.log(currHandCount);
                // console.log(Object.values(handCount)[0])
                // console.log(Object.values(handCount).find((arr) => arr.length === 2))

                // if (Object.values(handCount).find((ele) => ele.length === 4) || Object.values(currHandCount).find((ele) => ele.length === 4)){ // at least one player has four of a kind
                //     let handFourOfKind = Object.values(handCount).find((ele) => ele.length === 4);
                //     let currHandFourOfKind = Object.values(currHandCount).find((ele) => ele.length === 4);

                //     if(handFourOfKind && currHandFourOfKind){ //case: both players have 4 of a kind
                //         if(handFourOfKind[0] === currHandFourOfKind[0]){
                //             tie = true;
                //             handIdx.push(i);
                //         }else if (UTIL.values.indexOf(handFourOfKind[0]) < UTIL.values.indexOf(currHandFourOfKind[0])){
                //             hand = currentHand;
                //             handIdx[0] = i;
                //         }
                //     }else{ // case: only one player has four of a kind
                //         if (currHandFourOfKind){
                //             hand = currentHand;
                //             handIdx[0] = i;
                //         } 
                //     }
                // }else if (Object.values(handCount).find((ele) => ele.length === 3) || Object.values(currHandCount).find((ele) => ele.length === 3)){ // at least one player has 3 of a kind
                //     let handThreeOfKind = Object.values(handCount).find((ele) => ele.length === 3);
                //     let currHandThreeOfKind = Object.values(currHandCount).find((ele) => ele.length === 3);

                //     if(handThreeOfKind && currHandThreeOfKind){
                //         if(handThreeOfKind[0] === currHandThreeOfKind[0]){
                //             tie = true;
                //             handIdx.push(i);
                //         }else if (UTIL.values.indexOf(handThreeOfKind[0]) < UTIL.values.indexOf(currHandThreeOfKind[0])){
                //             hand = currentHand;
                //             handIdx[0] = i;
                //         }
                //     }else{
                //         if (currHandThreeOfKind){
                //             hand = currentHand;
                //             handIdx[0] = i;
                //         }
                //     }

                // }else if (Object.values(handCount).find((arr) => arr.length > 2) || Object.values(currHandCount).find((arr) => arr.length > 2)){
                if (Object.values(handCount).find((arr) => arr.length === 2) || Object.values(currHandCount).find((arr) => arr.length === 2)){
                    console.log('here')
                    let handPair = Object.values(handCount).find((arr) => arr.length === 2);
                    let currHandPair = Object.values(currHandCount).find((arr) => arr.length === 2);
                    console.log(handPair)
                    console.log(currHandPair)

                    if(handPair && currHandPair){ // both have a pair
                        console.log('hi')
                        if(Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handPair[0]) || Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandPair[0])){ //atleast one has two pairs
                            //check who has the second pair if not both
                            let secondHandPair = Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handPair[0]);
                            let secondCurrHandPair = Object.values(currHandCount).find((arr) => arr.length > 2);

                            if(secondHandPair && secondCurrHandPair){
                                // check for highest value
                                // handMaxPair = UTIL.values.indexOf(handPair[0]) > UTIL.values.indexOf() ? : ;

                            }else{
                                if(secondCurrHandPair){
                                    hand = currentHand;
                                    tie = false;
                                    handIdx = i;
                                }
                            }
    
                        }else{ // look for the pair with the highest value
                            if(handPair[0] === currHandPair[0]){
                                tie = true;
                                handIdx.push(i);
                            }else{
                                if( UTIL.values.indexOf(currHandPair[0]) > UTIL.values.indexOf(handPair[0]) ){
                                    tie = false;
                                    hand = currentHand;
                                    handIdx[0] = i;
                                }
                            }
    
                        }
                    }else{ // check if currHand is the one with the pair
                        // console('one pair')
                        // if (currHandPair){
                        //     tie = false;
                        //     hand = currentHand;
                        //     handIdx[0] = i;
                        // }
                    }

                    console.log(hand);

                }else{ // last look for highest card, of their 2 cards, WORKING!!!
                    // console.log('testing...')
                    
                    //can make this a helperfunction
                    let handRank = hand.slice(0,2).map(card => UTIL.values.indexOf(card.value));
                    let handMax = Math.max(...handRank);
                    // console.log(handRank)
                    // console.log(handMax)
                    let currHandRank = currentHand.slice(0,2).map(card => UTIL.values.indexOf(card.value));
                    let currHandMax = Math.max(...currHandRank);
                    // console.log(currHandRank)
                    // console.log(currHandMax)
                    if(handMax === currHandMax){
                        tie = true;
                        handIdx.push(i);
                    }else if(handMax < currHandMax){
                        tie = false;
                        hand = currentHand;
                        handIdx[0] = i;
                    }

                    // console.log('no pairs, chechking for highest card')
                    // console.log(hand);
                    // console.log(tie);
                    
                }
                // console.log(Object.values(handCount))
                // console.log(handCount)
                // console.log(currHandCount)
                // console.log(hand);
                // console.log(hand.map(card => UTIL.values.indexOf(card.value)))
                // console.log(Math.max(...(hand.map(card => UTIL.values.indexOf(card.value)))))
            }
            // return this.players[handIdx].hand;
        }else{ //case: dealer has all 5 cards, now check for flush, straight, etc.
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

    compareHandValues(hand1, hand2){
        let hand1Max = (UTIL.values.indexOf(hand1[0].value) > UTIL.values.indexOf(hand1[1].value)) ? UTIL.values.indexOf(hand1[0].value) : UTIL.values.indexOf(hand1[1].value);
        let hand2Max = (UTIL.values.indexOf(hand2[0].value) > UTIL.values.indexOf(hand2[1].value)) ? UTIL.values.indexOf(hand2[0].value) : UTIL.values.indexOf(hand2[1].value);

        let result;
        if (hand1Max === hand2Max){
            result = 'tie';
        }else if (hand1Max > hand2Max){
            result = hand1
        }else{
            result = hand2
        }
        return result
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
console.log(game.bestHand.call(game, 2));

///build a database with possible questions to query for to use during each round

