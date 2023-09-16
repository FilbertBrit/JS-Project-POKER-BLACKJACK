
//I think im done with this portion, cards have two attributes their suit and number/value
//I dont think I need any methods for the card class
class Card {
 
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }

}

// returning a generated deck of cards
export function deckCreation(){
    //variables for creation cards/deck
    const suits = ['♣', '♦', '♥', '♠']
    const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    //flatten method with map
    return suits.flatMap(suit => {
        return values.map(value => { // returns an array of cards of a suit paried with each value in values array
            return new Card(suit,value)
        })
    }) 
}