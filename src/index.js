import multiChoice from "./scripts/multiple-choice-game.js"

const canvas = document.getElementById("canvas")
canvas.width = 500;
canvas.height = 500;
//if user wants to play tutorial game call multiple choice game
// const gi = new multiChoice(canvas);
// gi.start();
// window.gi = gi;

//if user wants to play normal poker game call poker-game
// console.log(canvas);

//testing to see if cards are being created and havr acess
import { deckCreation } from "./scripts/cards.js";
const deck = deckCreation();
console.log(deck)