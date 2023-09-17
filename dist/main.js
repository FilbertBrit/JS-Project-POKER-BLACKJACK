/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _scripts_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/util.js */ \"./src/scripts/util.js\");\n// import multiChoice from \"./scripts/multiple-choice-game.js\"\n// const PlayerHand = require('./scripts/player-hand.js');\n// import * as PlayerHand from \"./scripts/player-hand.js\"\n // importing function that created the deck\n // importing arrays of card values\n\nconst canvas = document.getElementById(\"canvas\");\ncanvas.width = 500;\ncanvas.height = 500;\nclass multiChoice {\n  constructor() {\n    // this.ctx = canvas.getContext('2d');\n    this.deck = (0,_scripts_cards_js__WEBPACK_IMPORTED_MODULE_0__.deckCreation)(); // deck used for multi-choice game\n    this.players = []; //array that will hold all hands of the current game\n    this.dealer = new PlayerHand(this.deck);\n  }\n  hands(num) {\n    // function for generating the num of hands wanted per game\n    for (let i = 0; i < num; i++) {\n      let player = new PlayerHand(this.deck); // creating a hand that also has a reference to the games deck\n      player.addToHand.call(player, 2); //hands will only ever have two cards\n      this.players.push(player); //adding each hand to the players array of the game\n    }\n  }\n}\n\nclass PlayerHand {\n  constructor(deck) {\n    this.deck = deck; // reference to the game's card deck\n    this.hand = []; // array that will holf this hand's cards\n  }\n\n  addToHand(num) {\n    //take a card from deck and add to hand\n    while (num > 0) {\n      this.hand.push(this.deck.shift());\n      num--;\n    }\n  }\n}\nlet game = new multiChoice();\ngame.hands.call(game, 5);\nconsole.log(game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ2tELENBQUM7QUFDVixDQUFDOztBQUUxQyxNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoREYsTUFBTSxDQUFDRyxLQUFLLEdBQUcsR0FBRztBQUNsQkgsTUFBTSxDQUFDSSxNQUFNLEdBQUcsR0FBRztBQUVuQixNQUFNQyxXQUFXLENBQUM7RUFDZEMsV0FBV0EsQ0FBQSxFQUFFO0lBQ1Q7SUFDQSxJQUFJLENBQUNDLElBQUksR0FBR1QsK0RBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUNVLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJQyxVQUFVLENBQUMsSUFBSSxDQUFDSCxJQUFJLENBQUM7RUFDM0M7RUFFQUksS0FBS0EsQ0FBQ0MsR0FBRyxFQUFDO0lBQUU7SUFDUixLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsR0FBRyxFQUFFQyxDQUFDLEVBQUUsRUFBQztNQUN4QixJQUFJQyxNQUFNLEdBQUcsSUFBSUosVUFBVSxDQUFDLElBQUksQ0FBQ0gsSUFBSSxDQUFDLEVBQUM7TUFDdkNPLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxJQUFJLENBQUNGLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBQztNQUNqQyxJQUFJLENBQUNOLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDSCxNQUFNLENBQUMsRUFBQztJQUM5QjtFQUNKO0FBQ0o7O0FBQ0EsTUFBTUosVUFBVTtFQUNaSixXQUFXQSxDQUFDQyxJQUFJLEVBQUM7SUFDYixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSSxDQUFDLENBQUM7SUFDbEIsSUFBSSxDQUFDVyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDcEI7O0VBR0FILFNBQVNBLENBQUNILEdBQUcsRUFBQztJQUNWO0lBQ0EsT0FBTUEsR0FBRyxHQUFHLENBQUMsRUFBQztNQUNWLElBQUksQ0FBQ00sSUFBSSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDVixJQUFJLENBQUNZLEtBQUssQ0FBQyxDQUFDLENBQUM7TUFDakNQLEdBQUcsRUFBRTtJQUNUO0VBQ0o7QUFDSjtBQUVBLElBQUlRLElBQUksR0FBRyxJQUFJZixXQUFXLENBQUMsQ0FBQztBQUM1QmUsSUFBSSxDQUFDVCxLQUFLLENBQUNLLElBQUksQ0FBQ0ksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QtcG9rZXItYmxhY2tqYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IG11bHRpQ2hvaWNlIGZyb20gXCIuL3NjcmlwdHMvbXVsdGlwbGUtY2hvaWNlLWdhbWUuanNcIlxuLy8gY29uc3QgUGxheWVySGFuZCA9IHJlcXVpcmUoJy4vc2NyaXB0cy9wbGF5ZXItaGFuZC5qcycpO1xuLy8gaW1wb3J0ICogYXMgUGxheWVySGFuZCBmcm9tIFwiLi9zY3JpcHRzL3BsYXllci1oYW5kLmpzXCJcbmltcG9ydCB7IGRlY2tDcmVhdGlvbiB9IGZyb20gXCIuL3NjcmlwdHMvY2FyZHMuanNcIjsgLy8gaW1wb3J0aW5nIGZ1bmN0aW9uIHRoYXQgY3JlYXRlZCB0aGUgZGVja1xuaW1wb3J0ICogYXMgVVRJTCBmcm9tIFwiLi9zY3JpcHRzL3V0aWwuanNcIiAvLyBpbXBvcnRpbmcgYXJyYXlzIG9mIGNhcmQgdmFsdWVzXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpXG5jYW52YXMud2lkdGggPSA1MDA7XG5jYW52YXMuaGVpZ2h0ID0gNTAwO1xuXG5jbGFzcyBtdWx0aUNob2ljZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5kZWNrID0gZGVja0NyZWF0aW9uKCk7IC8vIGRlY2sgdXNlZCBmb3IgbXVsdGktY2hvaWNlIGdhbWVcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gW107IC8vYXJyYXkgdGhhdCB3aWxsIGhvbGQgYWxsIGhhbmRzIG9mIHRoZSBjdXJyZW50IGdhbWVcbiAgICAgICAgdGhpcy5kZWFsZXIgPSBuZXcgUGxheWVySGFuZCh0aGlzLmRlY2spO1xuICAgIH1cblxuICAgIGhhbmRzKG51bSl7IC8vIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIHRoZSBudW0gb2YgaGFuZHMgd2FudGVkIHBlciBnYW1lXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBudW07IGkrKyl7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllckhhbmQodGhpcy5kZWNrKSAvLyBjcmVhdGluZyBhIGhhbmQgdGhhdCBhbHNvIGhhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2FtZXMgZGVja1xuICAgICAgICAgICAgcGxheWVyLmFkZFRvSGFuZC5jYWxsKHBsYXllciwgMikgLy9oYW5kcyB3aWxsIG9ubHkgZXZlciBoYXZlIHR3byBjYXJkc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKSAvL2FkZGluZyBlYWNoIGhhbmQgdG8gdGhlIHBsYXllcnMgYXJyYXkgb2YgdGhlIGdhbWVcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIFBsYXllckhhbmR7XG4gICAgY29uc3RydWN0b3IoZGVjayl7XG4gICAgICAgIHRoaXMuZGVjayA9IGRlY2s7IC8vIHJlZmVyZW5jZSB0byB0aGUgZ2FtZSdzIGNhcmQgZGVja1xuICAgICAgICB0aGlzLmhhbmQgPSBbXTsgLy8gYXJyYXkgdGhhdCB3aWxsIGhvbGYgdGhpcyBoYW5kJ3MgY2FyZHNcbiAgICB9XG5cblxuICAgIGFkZFRvSGFuZChudW0pe1xuICAgICAgICAvL3Rha2UgYSBjYXJkIGZyb20gZGVjayBhbmQgYWRkIHRvIGhhbmRcbiAgICAgICAgd2hpbGUobnVtID4gMCl7XG4gICAgICAgICAgICB0aGlzLmhhbmQucHVzaCh0aGlzLmRlY2suc2hpZnQoKSk7XG4gICAgICAgICAgICBudW0tLTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IGdhbWUgPSBuZXcgbXVsdGlDaG9pY2UoKTtcbmdhbWUuaGFuZHMuY2FsbChnYW1lLCA1KTtcbmNvbnNvbGUubG9nKGdhbWUpOyJdLCJuYW1lcyI6WyJkZWNrQ3JlYXRpb24iLCJVVElMIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwibXVsdGlDaG9pY2UiLCJjb25zdHJ1Y3RvciIsImRlY2siLCJwbGF5ZXJzIiwiZGVhbGVyIiwiUGxheWVySGFuZCIsImhhbmRzIiwibnVtIiwiaSIsInBsYXllciIsImFkZFRvSGFuZCIsImNhbGwiLCJwdXNoIiwiaGFuZCIsInNoaWZ0IiwiZ2FtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deckCreation: function() { return /* binding */ deckCreation; }\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/scripts/util.js\");\n\n//I think im done with this portion, cards have two attributes their suit and number/value\n//I dont think I need any methods for the card class\nclass Card {\n  constructor(suit, value) {\n    this.suit = suit;\n    this.value = value;\n  }\n}\n\n// returning a generated deck of cards\nfunction deckCreation() {\n  //variables for creation of cards/deck\n  // const suits = ['♣', '♦', '♥', '♠']\n  // const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']\n  //flatten method with map\n  let deck = _util__WEBPACK_IMPORTED_MODULE_0__.suits.flatMap(suit => {\n    return _util__WEBPACK_IMPORTED_MODULE_0__.values.map(value => {\n      // returns an array of cards of a suit paried with each value in values array\n      return new Card(suit, value);\n    });\n  });\n  return deck.sort(() => 0.5 - Math.random()); // shuffling deck array randomly \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUM5QjtBQUNBO0FBQ0EsTUFBTUMsSUFBSSxDQUFDO0VBQ1BDLFdBQVdBLENBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFDO0lBQ3BCLElBQUksQ0FBQ0QsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0VBQ3RCO0FBQ0o7O0FBRUE7QUFDTyxTQUFTQyxZQUFZQSxDQUFBLEVBQUU7RUFDMUI7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJQyxJQUFJLEdBQUdOLHdDQUFVLENBQUNRLE9BQU8sQ0FBQ0wsSUFBSSxJQUFJO0lBQ2xDLE9BQU9ILHlDQUFXLENBQUNVLEdBQUcsQ0FBQ04sS0FBSyxJQUFJO01BQUU7TUFDOUIsT0FBTyxJQUFJSCxJQUFJLENBQUNFLElBQUksRUFBQ0MsS0FBSyxDQUFDO0lBQy9CLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGLE9BQU9FLElBQUksQ0FBQ0ssSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQztBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QtcG9rZXItYmxhY2tqYWNrLy4vc3JjL3NjcmlwdHMvY2FyZHMuanM/NDUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVVElMIGZyb20gXCIuL3V0aWxcIlxuLy9JIHRoaW5rIGltIGRvbmUgd2l0aCB0aGlzIHBvcnRpb24sIGNhcmRzIGhhdmUgdHdvIGF0dHJpYnV0ZXMgdGhlaXIgc3VpdCBhbmQgbnVtYmVyL3ZhbHVlXG4vL0kgZG9udCB0aGluayBJIG5lZWQgYW55IG1ldGhvZHMgZm9yIHRoZSBjYXJkIGNsYXNzXG5jbGFzcyBDYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihzdWl0LCB2YWx1ZSl7XG4gICAgICAgIHRoaXMuc3VpdCA9IHN1aXQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5cbi8vIHJldHVybmluZyBhIGdlbmVyYXRlZCBkZWNrIG9mIGNhcmRzXG5leHBvcnQgZnVuY3Rpb24gZGVja0NyZWF0aW9uKCl7XG4gICAgLy92YXJpYWJsZXMgZm9yIGNyZWF0aW9uIG9mIGNhcmRzL2RlY2tcbiAgICAvLyBjb25zdCBzdWl0cyA9IFsn4pmjJywgJ+KZpicsICfimaUnLCAn4pmgJ11cbiAgICAvLyBjb25zdCB2YWx1ZXMgPSBbJ0EnLCAnSycsICdRJywgJ0onLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJ11cbiAgICAvL2ZsYXR0ZW4gbWV0aG9kIHdpdGggbWFwXG4gICAgbGV0IGRlY2sgPSBVVElMLnN1aXRzLmZsYXRNYXAoc3VpdCA9PiB7XG4gICAgICAgIHJldHVybiBVVElMLnZhbHVlcy5tYXAodmFsdWUgPT4geyAvLyByZXR1cm5zIGFuIGFycmF5IG9mIGNhcmRzIG9mIGEgc3VpdCBwYXJpZWQgd2l0aCBlYWNoIHZhbHVlIGluIHZhbHVlcyBhcnJheVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJkKHN1aXQsdmFsdWUpXG4gICAgICAgIH0pXG4gICAgfSkgXG5cbiAgICByZXR1cm4gZGVjay5zb3J0KCgpID0+IDAuNSAtIE1hdGgucmFuZG9tKCkpIC8vIHNodWZmbGluZyBkZWNrIGFycmF5IHJhbmRvbWx5IFxufSJdLCJuYW1lcyI6WyJVVElMIiwiQ2FyZCIsImNvbnN0cnVjdG9yIiwic3VpdCIsInZhbHVlIiwiZGVja0NyZWF0aW9uIiwiZGVjayIsInN1aXRzIiwiZmxhdE1hcCIsInZhbHVlcyIsIm1hcCIsInNvcnQiLCJNYXRoIiwicmFuZG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/cards.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   suits: function() { return /* binding */ suits; },\n/* harmony export */   values: function() { return /* binding */ values; }\n/* harmony export */ });\n//variables for creation of cards/deck and scoring purposes\nconst suits = ['♣', '♦', '♥', '♠'];\nconst values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0k7QUFDRyxNQUFNQSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDbEMsTUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC1wb2tlci1ibGFja2phY2svLi9zcmMvc2NyaXB0cy91dGlsLmpzPzY5NGIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLy92YXJpYWJsZXMgZm9yIGNyZWF0aW9uIG9mIGNhcmRzL2RlY2sgYW5kIHNjb3JpbmcgcHVycG9zZXNcbmV4cG9ydCBjb25zdCBzdWl0cyA9IFsn4pmjJywgJ+KZpicsICfimaUnLCAn4pmgJ11cbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSBbJ0EnLCAnSycsICdRJywgJ0onLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJ11cbiJdLCJuYW1lcyI6WyJzdWl0cyIsInZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0LXBva2VyLWJsYWNramFjay8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;