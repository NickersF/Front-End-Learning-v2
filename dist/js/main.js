/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./debug_test.ts":
/*!***********************!*\
  !*** ./debug_test.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debugTest = void 0;
function debugTest(a, b) {
    let sum = a + b;
    let productOfSum = sum * 2;
    return productOfSum;
}
exports.debugTest = debugTest;


/***/ }),

/***/ "./layout/overflow_position.ts":
/*!*************************************!*\
  !*** ./layout/overflow_position.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DragEventExample = exports.ScrollEventExample = exports.EchoSlider = void 0;
const MAX_LEFT = -256;
const MAX_RIGHT = 256;
function EchoSlider() {
    let positionSlider = $("#PositionRange");
    let textElementToMove = $("#TextToMove");
    let currentSliderValue;
    positionSlider.on("input", function () {
        currentSliderValue = positionSlider.val().toString() + "px";
        textElementToMove.css("left", currentSliderValue);
        $("#SliderValue").text("Current deltaY: " + currentSliderValue);
    });
}
exports.EchoSlider = EchoSlider;
function ScrollEventExample() {
    let mouseWheelScrollBox = $("#MouseWheelScrollBox");
    let textElementToMove01 = $("#TextToMove01");
    let scrollNotice = $("#ScrollNotice");
    let currentDeltaY = 0;
    mouseWheelScrollBox.on("mousewheel", function (e) {
        let wheelEvent = e.originalEvent;
        if (wheelEvent.deltaY == 100 && currentDeltaY > MAX_LEFT) {
            currentDeltaY--;
            textElementToMove01.css("left", currentDeltaY);
            scrollNotice.text("Element moved: " + currentDeltaY + "px to the left.");
        }
        if (wheelEvent.deltaY == -100 && currentDeltaY < MAX_RIGHT) {
            currentDeltaY++;
            textElementToMove01.css("left", currentDeltaY);
            scrollNotice.text("Element moved: " + currentDeltaY + "px to the right.");
        }
    });
}
exports.ScrollEventExample = ScrollEventExample;
function DragEventExample() {
    let dragParaEl = $("#DragParaEl");
    let dragNotice = $("#DragNotice");
    let dragCount = 0;
    dragParaEl.on("drag", function () {
        dragCount++;
        dragNotice.text("Drag event fired: " + dragCount + " times.");
    });
}
exports.DragEventExample = DragEventExample;


/***/ }),

/***/ "./todo/todo.ts":
/*!**********************!*\
  !*** ./todo/todo.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Todo {
    testTodo() {
        console.log("Echo from TODO class instance.");
    }
}
exports["default"] = Todo;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const overflow_position_1 = __webpack_require__(/*! ./layout/overflow_position */ "./layout/overflow_position.ts");
const debug_test_1 = __webpack_require__(/*! ./debug_test */ "./debug_test.ts");
const todo_1 = __webpack_require__(/*! ./todo/todo */ "./todo/todo.ts");
overflow_position_1.EchoSlider();
overflow_position_1.ScrollEventExample();
let todo = new todo_1.default();
todo.testTodo();
$("#DebugTest_Btn").on("click", () => {
    let debugResult = debug_test_1.debugTest(2, 3);
    console.log(debugResult);
});
console.log(document.URL);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map