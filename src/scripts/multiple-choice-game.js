import { deckCreation } from "./cards";

export class multiChoice {
    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.deck = deckCreation()
    }
}