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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_multiple_choice_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/multiple-choice-game.js */ \"./src/scripts/multiple-choice-game.js\");\n/* harmony import */ var _scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/cards.js */ \"./src/scripts/cards.js\");\n\nconst canvas = document.getElementById(\"canvas\");\ncanvas.width = 500;\ncanvas.height = 500;\n//if user wants to play tutorial game call multiple choice game\n// const gi = new multiChoice(canvas);\n// gi.start();\n// window.gi = gi;\n\n//if user wants to play normal poker game call poker-game\n// console.log(canvas);\n\n//testing to see if cards are being created and havr acess\n\nconst deck = (0,_scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__.deckCreation)();\nconsole.log(deck);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJEO0FBRTNELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBQ2hERixNQUFNLENBQUNHLEtBQUssR0FBRyxHQUFHO0FBQ2xCSCxNQUFNLENBQUNJLE1BQU0sR0FBRyxHQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDa0Q7QUFDbEQsTUFBTUUsSUFBSSxHQUFHRCwrREFBWSxDQUFDLENBQUM7QUFDM0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0LXBva2VyLWJsYWNramFjay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0aUNob2ljZSBmcm9tIFwiLi9zY3JpcHRzL211bHRpcGxlLWNob2ljZS1nYW1lLmpzXCJcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIilcbmNhbnZhcy53aWR0aCA9IDUwMDtcbmNhbnZhcy5oZWlnaHQgPSA1MDA7XG4vL2lmIHVzZXIgd2FudHMgdG8gcGxheSB0dXRvcmlhbCBnYW1lIGNhbGwgbXVsdGlwbGUgY2hvaWNlIGdhbWVcbi8vIGNvbnN0IGdpID0gbmV3IG11bHRpQ2hvaWNlKGNhbnZhcyk7XG4vLyBnaS5zdGFydCgpO1xuLy8gd2luZG93LmdpID0gZ2k7XG5cbi8vaWYgdXNlciB3YW50cyB0byBwbGF5IG5vcm1hbCBwb2tlciBnYW1lIGNhbGwgcG9rZXItZ2FtZVxuLy8gY29uc29sZS5sb2coY2FudmFzKTtcblxuLy90ZXN0aW5nIHRvIHNlZSBpZiBjYXJkcyBhcmUgYmVpbmcgY3JlYXRlZCBhbmQgaGF2ciBhY2Vzc1xuaW1wb3J0IHsgZGVja0NyZWF0aW9uIH0gZnJvbSBcIi4vc2NyaXB0cy9jYXJkcy5qc1wiO1xuY29uc3QgZGVjayA9IGRlY2tDcmVhdGlvbigpO1xuY29uc29sZS5sb2coZGVjaykiXSwibmFtZXMiOlsibXVsdGlDaG9pY2UiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJkZWNrQ3JlYXRpb24iLCJkZWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deckCreation: function() { return /* binding */ deckCreation; }\n/* harmony export */ });\n//I think im done with this portion, cards have two attributes their suit and number/value\n//I dont think I need any methods for the card class\nclass Card {\n  constructor(suit, value) {\n    this.suit = suit;\n    this.value = value;\n  }\n}\n\n// returning a generated deck of cards\nfunction deckCreation() {\n  //variables for creation cards/deck\n  const suits = ['♣', '♦', '♥', '♠'];\n  const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];\n  //flatten method with map\n  return suits.flatMap(suit => {\n    return values.map(value => {\n      // returns an array of cards of a suit paried with each value in values array\n      return new Card(suit, value);\n    });\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFDQTtBQUNBLE1BQU1BLElBQUksQ0FBQztFQUVQQyxXQUFXQSxDQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBQztJQUNwQixJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztFQUN0QjtBQUVKOztBQUVBO0FBQ08sU0FBU0MsWUFBWUEsQ0FBQSxFQUFFO0VBQzFCO0VBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0VBQ2xDLE1BQU1DLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUNqRjtFQUNBLE9BQU9ELEtBQUssQ0FBQ0UsT0FBTyxDQUFDTCxJQUFJLElBQUk7SUFDekIsT0FBT0ksTUFBTSxDQUFDRSxHQUFHLENBQUNMLEtBQUssSUFBSTtNQUFFO01BQ3pCLE9BQU8sSUFBSUgsSUFBSSxDQUFDRSxJQUFJLEVBQUNDLEtBQUssQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QtcG9rZXItYmxhY2tqYWNrLy4vc3JjL3NjcmlwdHMvY2FyZHMuanM/NDUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vSSB0aGluayBpbSBkb25lIHdpdGggdGhpcyBwb3J0aW9uLCBjYXJkcyBoYXZlIHR3byBhdHRyaWJ1dGVzIHRoZWlyIHN1aXQgYW5kIG51bWJlci92YWx1ZVxuLy9JIGRvbnQgdGhpbmsgSSBuZWVkIGFueSBtZXRob2RzIGZvciB0aGUgY2FyZCBjbGFzc1xuY2xhc3MgQ2FyZCB7XG4gXG4gICAgY29uc3RydWN0b3Ioc3VpdCwgdmFsdWUpe1xuICAgICAgICB0aGlzLnN1aXQgPSBzdWl0O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG59XG5cbi8vIHJldHVybmluZyBhIGdlbmVyYXRlZCBkZWNrIG9mIGNhcmRzXG5leHBvcnQgZnVuY3Rpb24gZGVja0NyZWF0aW9uKCl7XG4gICAgLy92YXJpYWJsZXMgZm9yIGNyZWF0aW9uIGNhcmRzL2RlY2tcbiAgICBjb25zdCBzdWl0cyA9IFsn4pmjJywgJ+KZpicsICfimaUnLCAn4pmgJ11cbiAgICBjb25zdCB2YWx1ZXMgPSBbJ0EnLCAnSycsICdRJywgJ0onLCAnMTAnLCAnOScsICc4JywgJzcnLCAnNicsICc1JywgJzQnLCAnMycsICcyJ11cbiAgICAvL2ZsYXR0ZW4gbWV0aG9kIHdpdGggbWFwXG4gICAgcmV0dXJuIHN1aXRzLmZsYXRNYXAoc3VpdCA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHsgLy8gcmV0dXJucyBhbiBhcnJheSBvZiBjYXJkcyBvZiBhIHN1aXQgcGFyaWVkIHdpdGggZWFjaCB2YWx1ZSBpbiB2YWx1ZXMgYXJyYXlcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ2FyZChzdWl0LHZhbHVlKVxuICAgICAgICB9KVxuICAgIH0pIFxufSJdLCJuYW1lcyI6WyJDYXJkIiwiY29uc3RydWN0b3IiLCJzdWl0IiwidmFsdWUiLCJkZWNrQ3JlYXRpb24iLCJzdWl0cyIsInZhbHVlcyIsImZsYXRNYXAiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/cards.js\n");

/***/ }),

/***/ "./src/scripts/multiple-choice-game.js":
/*!*********************************************!*\
  !*** ./src/scripts/multiple-choice-game.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   multiChoice: function() { return /* binding */ multiChoice; }\n/* harmony export */ });\n/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ \"./src/scripts/cards.js\");\n\nclass multiChoice {\n  constructor(canvas) {\n    this.ctx = canvas.getContext('2d');\n    this.deck = (0,_cards__WEBPACK_IMPORTED_MODULE_0__.deckCreation)();\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tdWx0aXBsZS1jaG9pY2UtZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUVoQyxNQUFNQyxXQUFXLENBQUM7RUFDckJDLFdBQVdBLENBQUNDLE1BQU0sRUFBQztJQUNmLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxNQUFNLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdOLG9EQUFZLENBQUMsQ0FBQztFQUM5QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC1wb2tlci1ibGFja2phY2svLi9zcmMvc2NyaXB0cy9tdWx0aXBsZS1jaG9pY2UtZ2FtZS5qcz9hOTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlY2tDcmVhdGlvbiB9IGZyb20gXCIuL2NhcmRzXCI7XG5cbmV4cG9ydCBjbGFzcyBtdWx0aUNob2ljZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5kZWNrID0gZGVja0NyZWF0aW9uKClcbiAgICB9XG59Il0sIm5hbWVzIjpbImRlY2tDcmVhdGlvbiIsIm11bHRpQ2hvaWNlIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGVjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/multiple-choice-game.js\n");

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