import { deckCreation } from "./cards";
import PlayerHand from "./player-hand";
import * as UTIL from "./util" ;

export default class multiChoice { 
    constructor(){
        // this.ctx = canvas.getContext('2d');

        this.deck = deckCreation(); // deck used for multi-choice game
        this.players = []; //array that will hold all hands of the current game
        this.hands(3) // adds 3 or 5 players to the game, players array, depending on input
        this.dealer = new PlayerHand(this.deck); // creating dealer hand
        this.dealer.addToHand.call(this.dealer, 3) // dealer always starts off with 3 cards
        this.winningHand; // will hold winning hand
        this.tiedHand;
        this.outcome; // will hold a str of desc of winning hand
        this.tie = false;
    }

    hands(num){ // function for generating the num of players/hands wanted per game
        for(let i = 0; i < num; i++){
            let player = new PlayerHand(this.deck) // creating a hand that also has a reference to the game's deck
            player.addToHand.call(player, 2) //players/hands will only ever have two cards
            this.players.push(player) //adding each hand to game's players array
        }
    }

    printGame(){ // prints all cards in the game(dealer + players)
        console.log(this)
        console.log('Game Results', this.winningHand)
        // console.log(this.dealer.hand)
        // for(let i = 0; i < this.players.length; i++){
        //     console.log(this.players[i].hand);
        // }
    }

    // need to work on 4-of-kind occurance
    bestHand(level){
        let hand;
        let currentHand;

        if(level === 1){ //working!!!

            return this.roundOneToTwo.call(this);

        } else if(this.dealer.hand.length < 5){ //look for high card, pair, two pair, 3-of-a-kind, 4-of-a-kind

            // console.log('IN ROUNDS 3-4')
            let handIdx = [0];
            hand = this.players[0].hand.concat(this.dealer.hand)
            // console.log('hand');
            // console.log(hand)

            for(let i = 1; i < this.players.length; i++){
            // for(let i = 1; i < 2; i++){ //debugging purposes
                currentHand = this.players[i].hand.concat(this.dealer.hand)
                // console.log('current hand')
                // console.log(currentHand);

                //hashes to count pairs*
                let handCount = {};
                let currHandCount = {};
                for(let i = 0; i < hand.length; i++){
                    (handCount[hand[i].value]) ? handCount[hand[i].value].push(hand[i].value) : handCount[hand[i].value] = [hand[i].value];
                    (currHandCount[currentHand[i].value]) ? currHandCount[currentHand[i].value].push(currentHand[i].value) : currHandCount[currentHand[i].value] = [currentHand[i].value];
                }
                // console.log('hashes');
                // console.log(handCount);
                // console.log(currHandCount);

                //^^ WORKING

                if (Object.values(handCount).find((ele) => ele.length === 4) || Object.values(currHandCount).find((ele) => ele.length === 4)){ // at least one player has four of a kind

                    let result = this.compareFourOfKind.call(this, hand, handCount, currentHand, currHandCount, handIdx, tie);

                    hand = result[0]; // return hand
                    
                }else if (Object.values(handCount).find((ele) => ele.length === 3) || Object.values(currHandCount).find((ele) => ele.length === 3)){ // at least one player has 3 of a kind

                    let result = this.compareThreeOfKind.call(this, hand, handCount, currentHand, currHandCount, handIdx, tie);

                    hand = result[0]; // return hand

                }else if (Object.values(handCount).find((arr) => arr.length === 2) || Object.values(currHandCount).find((arr) => arr.length === 2)){
                    
                    let result = this.comparePairs.call(this, hand, handCount, currentHand, currHandCount, handIdx, tie);
                    hand = result[0]; // return hand
                    
                }else{ // last look for highest card, of their 2 cards, WORKING!!!
                    let result = this.compareHandValues(hand, currentHand);

                    if(result == 'tie'){
                        tie = true;
                        handIdx.push(i);
                    }else if (result === currentHand){
                        tie = false;
                        hand = currentHand;
                        handIdx = [i];
                    }
                }
            }
            return hand.slice(0,2);
        }else{ //NEED TO WOKR ON THIS!! case: dealer has all 5 cards, now check for flush, straight, etc.
            
            let result = this.lastRounds.call(this);
            return result[0];
            
        } 
    }//END OF BESTHAND FUNCTION

    //done and working!!
    roundOneToTwo(){ //WORKING!!
        let hand;
        let currentHand;

        hand = this.players[0].hand;
        for(let i = 1; i < this.players.length; i++){ 
        // for(let i = 1; i < 2; i++){ //debugging purpose 
            currentHand = this.players[i].hand;
            //booleans checking if any of the two have a pair
            let handPair = hand[0].value === hand[1].value;
            let currentHandPair = currentHand[0].value === currentHand[1].value; 

            if(handPair || currentHandPair){ // at least one has a pair
                if(handPair && currentHandPair){ // if both, checking for highest card
                    if(hand[0].value === currentHand[0].value){
                        this.tie = true;
                        this.outcome = `Tie! Between ${(this.players.map(player => {return player.hand}).indexOf(hand)) + 1} and ${(this.players.map(player => {return player.hand}).indexOf(currentHand)) + 1}.`
                        this.tiedHand = currentHand;
                    }else{
                        hand = (UTIL.values.indexOf(hand[0].value) > UTIL.values.indexOf(currentHand[0].value) ? hand : currentHand)
                        this.outcome = `Hand ${(this.players.map(player => {return player.hand}).indexOf(hand)) + 1} has the highest value pair.`
                        this.true = false;
                    }
                }else{
                    hand = (handPair ? hand : currentHand)
                    this.outcome = `Hand ${(this.players.map(player => {return player.hand}).indexOf(hand)) + 1} has a pair.`
                    this.tie = false;
                }

            }else{ // no pair, just checking for highest card
                let result = this.compareHandValues(hand, currentHand);
                if (result === 'tie'){
                    this.tie = true;
                    this.outcome = `There is a tie! Between hand ${(this.players.map(player => {return player.hand}).indexOf(hand)) + 1} and hand ${(this.players.map(player => {return player.hand}).indexOf(currentHand)) + 1}.`
                    this.tiedHand = currentHand;
                }else if (result === currentHand){
                    hand = result;
                    this.tie = false;
                    this.outcome = `Hand ${(this.players.map(player => {return player.hand}).indexOf(hand))+ 1} has the highest value card.`
                    // console.log(hand)
                    // console.log((this.players.map(player => {return player.hand}).indexOf(hand)))
                }else{
                    if(!this.tie){
                        this.outcome = `Hand ${(this.players.map(player => {return player.hand}).indexOf(hand))+ 1} has the highest value card.`
                    }
                }
            }
        }
        this.winningHand = hand;
        return this;
        // end of game logic for round 1-2
    }
    //done and working!!
    compareHandValues(hand1, hand2){ // WORKING!!
        let hand1Max = (UTIL.values.indexOf(hand1[0].value) > UTIL.values.indexOf(hand1[1].value)) ? UTIL.values.indexOf(hand1[0].value) : UTIL.values.indexOf(hand1[1].value);
        let hand2Max = (UTIL.values.indexOf(hand2[0].value) > UTIL.values.indexOf(hand2[1].value)) ? UTIL.values.indexOf(hand2[0].value) : UTIL.values.indexOf(hand2[1].value);

        let result;
        if (hand1Max === hand2Max){
            // if(hand1[0].value===hand2[0].value){
            //     if(UTIL.values.indexOf(hand1[1].value) < UTIL.values.indexOf(hand2[1].value)) result = hand2
            // }else if(hand1[0].value===hand2[1].value){
            //     if(UTIL.values.indexOf(hand1[1].value) < UTIL.values.indexOf(hand2[0].value)) result = hand2
            // }else if(hand1[1].value === hand2[0].value){
            //     if(UTIL.values.indexOf(hand1[0].value) < UTIL.values.indexOf(hand2[1].value)) result = hand2
            // }else if(hand1[1].value === hand2[1].value){ 
            //     if(UTIL.values.indexOf(hand1[0].value) < UTIL.values.indexOf(hand2[0].value)) result = hand2
            // }else{
            //     result = 'tie';
            // }
            result = 'tie';
        }else if (hand1Max < hand2Max){
            result = hand2
        }
        return result
    }

    //need to work on this
    lastRounds(){ // check for all possible hands then best, NEED TO WORK ON THIS!
        let dealerHand = this.dealer.hand;
        // console.log(dealerHand)
        let hand = this.players[0].hand.concat(dealerHand);
        // console.log(this.players[0].hand);

        for(let i = 1; i < this.players.length; i++){
            let currentHand = this.players[i].hand.concat(dealerHand);
            // need logic to check what kind of hand they have;
        }

        // if(tie) console.log(tie)
        return hand;
    }

    //done, working!!
    compareThreeOfKind(hand, handCount, currentHand, currHandCount, handIdx, tie){ //done, working?
        // console.log('in compareThreeOfKind');

        let handThreeOfKind = Object.values(handCount).find((arr) => arr.length === 3);
        let currHandThreeOfKind = Object.values(currHandCount).find((arr) => arr.length === 3);
        
        if(handThreeOfKind && currHandThreeOfKind){
            //check if anyone has another 3-of-kind
            if (Object.values(handCount).find((ele) => ele.length === 3) || Object.values(currHandCount).find((ele) => ele.length === 3)){
            
                let handThreeOfKindSecond = Object.values(handCount).find((arr) => arr.length === 3 && arr[0] !== handThreeOfKind[0]);
                let currHandThreeOfKindSecond = Object.values(currHandCount).find((arr) => arr.length === 3 && arr[0] !== currHandThreeOfKind[0]);
            
                if(handThreeOfKindSecond && currHandThreeOfKindSecond){
                    let handBestThreeOfKind = (UTIL.values.indexOf(handThreeOfKind[0]) > UTIL.values.indexOf(handThreeOfKindSecond[0])) ? handThreeOfKind : handThreeOfKindSecond;
                    let currHandBestThreeOfKind = (UTIL.values.indexOf(currHandThreeOfKind[0]) > UTIL.values.indexOf(currHandThreeOfKindSecond[0])) ? currHandThreeOfKind : currHandThreeOfKindSecond;

                    if((UTIL.values.indexOf(handBestThreeOfKind[0]) === TIL.values.indexOf(currHandBestThreeOfKind[0]))){
                        tie = true;
                    }else if(UTIL.values.indexOf(handBestThreeOfKind[0]) < TIL.values.indexOf(currHandBestThreeOfKind[0])){
                        hand = currentHand;
                        tie = false;
                    }
                }else{
                    if(currHandCount){
                        hand = currentHand;
                        tie = false;
                    }
                }

            }else if
            //check if anyone has a pair as well
            (Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handThreeOfKind[0]) || Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandThreeOfKind[0])){

                let handPair = Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handThreeOfKind[0]);
                let currHandPair = Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandThreeOfKind[0]);

                if(handPair && currHandPair){
                    //what if a hand has two pairs
                    //both have 3-of-kind & pair, check if for greatest 3-of-kind
                    if(UTIL.values.indexOf(handThreeOfKind[0]) === UTIL.values.indexOf(currHandThreeOfKind[0])){
                        //save 3-of-kind cards, then check for greatest pair
                        if(UTIL.values.indexOf(handPair[0]) === UTIL.values.indexOf(currHandPair[0])){
                            tie = true;
                        }else if(UTIL.values.indexOf(handPair[0]) < UTIL.values.indexOf(currHandPair[0])){
                            hand = currentHand;
                            tie = false;
                        }
                    }else if(UTIL.values.indexOf(handThreeOfKind[0]) < UTIL.values.indexOf(currHandThreeOfKind[0])){
                        hand = currentHand;
                        tie = false;
                    }
                }else{ //done
                    if(currHandPair){
                        hand = currHandCount;
                        tie = false;
                    }
                }
            }else if(handThreeOfKind[0] === currHandThreeOfKind[0]){
                tie = true;
            }else if (UTIL.values.indexOf(handThreeOfKind[0]) < UTIL.values.indexOf(currHandThreeOfKind[0])){
                hand = currentHand;
                // handIdx[0] = i;
            }
        }else{//done
            if (currHandThreeOfKind){
                hand = currentHand;
                // handIdx[0] = i;
            }
        }

        return [hand, handIdx, tie];
    }

    //still need to work on this
    compareFourOfKind(hand, handCount, currentHand, currHandCount, handIdx, tie){
        // console.log('in compareFourOfKind')
        let handFourOfKind = Object.values(handCount).find((arr) => arr.length === 4);
        let currHandFourOfKind = Object.values(currHandCount).find((arr) => arr.length === 4);

        if(handFourOfKind && currHandFourOfKind){

            if(handFourOfKind[0] === currHandFourOfKind[0]){
            
                //check if anyone has a pair as well
                if(Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handFourOfKind[0]) || Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandFourOfKind[0])){

                    let handPair = Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handThreeOfKind[0]);
                    let currHandPair = Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandThreeOfKind[0]);

                    if(handPair && currHandPair){
                        if(handPair[0] === currHandPair[0]){
                            tie = true;
                        }else{
                            if(currHandPair){
                                hand = currentHand
                                tie = false;
                            }
                        }
                    }else{
                        if(currHandPair){
                            hand = currHandCount;
                            tie = false;
                        }
                    }
                }else{
                    tie = true;
                    // handIdx.push(i);
                }
            }else if (UTIL.values.indexOf(handThreeOfKind[0]) < UTIL.values.indexOf(currHandThreeOfKind[0])){
                hand = currentHand;
                // handIdx[0] = i;
            }
        }else{
            if (currHandThreeOfKind){
                hand = currentHand;
                // handIdx[0] = i;
            }
        }

        return [hand, handIdx, tie]
    }

    //done and working!!!
    comparePairs(hand, handCount, currentHand, currHandCount, handIdx, tie){ // working!!
        let handPair = Object.values(handCount).find((arr) => arr.length === 2);
        let currHandPair = Object.values(currHandCount).find((arr) => arr.length === 2);
        // console.log(handPair)
        // console.log(currHandPair)
        
        //check if pair is amoung only dealer's hand, still need to work on this
        if(handPair && currHandPair){ // both have a pair
            // console.log('hi')
            
            if(Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handPair[0]) || Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandPair[0])){ //atleast one has two pairs, WOKRING!!!
                //check who has the second pair if not both
                let secondHandPair = Object.values(handCount).find((arr) => arr.length === 2 && arr[0] !== handPair[0]);
                let secondCurrHandPair = Object.values(currHandCount).find((arr) => arr.length === 2 && arr[0] !== currHandPair[0]);
                // console.log(secondHandPair);
                // console.log(secondCurrHandPair);

                if(secondHandPair && secondCurrHandPair){
                    if(secondHandPair[0] === secondCurrHandPair[0]){
                        tie = true;
                        // handIdx.push(i);
                    }else{
                        if (UTIL.values.indexOf(secondHandPair[0]) < UTIL.values.indexOf(secondCurrHandPair[0])) {
                            hand = currentHand;
                            tie = false;
                            // handCount = [i];
                        }
                    }

                }else{// WORKING!!
                    if(secondCurrHandPair){
                        hand = currentHand;
                        tie = false;
                        // handIdx = [i];
                    }
                }

            }else{ // look for the pair with the highest value, WOKRING!!!
                if(handPair[0] === currHandPair[0]){
                    tie = true;
                    // handIdx.push(i);
                    // console.log(tie);
                }else{
                    if( UTIL.values.indexOf(currHandPair[0]) > UTIL.values.indexOf(handPair[0]) ){
                        tie = false;
                        hand = currentHand;
                        // handIdx = [i];
                    }
                }

            }
        }else{ // check if currHand is the one with the pair, WORKING!!!!
            // console.log('one pair')
            if (currHandPair){
                tie = false;
                hand = currentHand;
                // handIdx = [i];
            }
        }

        // console.log('in ComparePairs')
        // console.log(hand);
        return [hand, handIdx, tie];
    }

}