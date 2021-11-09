/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./color_gen.ts":
/*!**********************!*\
  !*** ./color_gen.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildBackgroundColorElements = exports.generateStepNames = void 0;
function generateStepNames(colorNamesArray, numOfSteps, baseColor) {
    if (numOfSteps < 0 || numOfSteps > 10) {
        return console.log("Invalid color step range provided.");
    }
    for (let index = 0; index < numOfSteps; index++) {
        colorNamesArray.push("fe-" + baseColor + "-0" + index.toString());
    }
}
exports.generateStepNames = generateStepNames;
function buildBackgroundColorElements(colorNamesArray, parentEl) {
    for (let index = 0; index < colorNamesArray.length; index++) {
        let $colorEls = $("<div class='color-demo-box fe-" + colorNamesArray[index] + "-bg'></div>");
        $("#" + parentEl).append($colorEls);
    }
}
exports.buildBackgroundColorElements = buildBackgroundColorElements;


/***/ }),

/***/ "./conversation_editor/conversation_editor.ts":
/*!****************************************************!*\
  !*** ./conversation_editor/conversation_editor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationEditor = void 0;
class ConversationEditor {
    main() {
        console.log("ConversationEditor instance.");
    }
}
exports.ConversationEditor = ConversationEditor;


/***/ }),

/***/ "./function.ts":
/*!*********************!*\
  !*** ./function.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.moduleTestFunc = void 0;
function moduleTestFunc() {
    console.log("Webpack allowed this to be loaded via a module.");
}
exports.moduleTestFunc = moduleTestFunc;


/***/ }),

/***/ "./overflow_position.ts":
/*!******************************!*\
  !*** ./overflow_position.ts ***!
  \******************************/
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

/***/ "./styleguide.ts":
/*!***********************!*\
  !*** ./styleguide.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildTypeExampleElements = exports.styleGuideSetup = void 0;
const color_gen_1 = __webpack_require__(/*! ./color_gen */ "./color_gen.ts");
const siteColorPalette = [
    "light-green",
    "light-blue",
    "light-yellow",
    "bluegray-dark",
    "bluegrey-medium",
    "bluegrey-light",
    "bluegrey-lightest",
];
const openSansFontWeightValues = [
    "light",
    "regular-italic",
    "regular",
    "bold",
    "extrabold"
];
const poppinsFontWeightValues = [
    "regular",
    "bold",
    "black"
];
function styleGuideSetup() {
    color_gen_1.buildBackgroundColorElements(siteColorPalette, "ColorPaletteWrapper");
    buildTypeExampleElements(openSansFontWeightValues, "TypeExampleWrapper", "Open Sans Sample", "open-sans");
    buildTypeExampleElements(poppinsFontWeightValues, "TypeExampleWrapper", "Poppins Sample", "poppins");
}
exports.styleGuideSetup = styleGuideSetup;
function buildTypeExampleElements(fontWeightValues, parentEl, exText, targetFontFamily) {
    if (targetFontFamily == "open-sans") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }
    if (targetFontFamily == "poppins") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }
}
exports.buildTypeExampleElements = buildTypeExampleElements;


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
const styleguide_1 = __webpack_require__(/*! ./styleguide */ "./styleguide.ts");
const overflow_position_1 = __webpack_require__(/*! ./overflow_position */ "./overflow_position.ts");
const function_1 = __webpack_require__(/*! ./function */ "./function.ts");
const conversation_editor_1 = __webpack_require__(/*! ./conversation_editor/conversation_editor */ "./conversation_editor/conversation_editor.ts");
styleguide_1.styleGuideSetup();
overflow_position_1.EchoSlider();
overflow_position_1.ScrollEventExample();
function_1.moduleTestFunc();
let conversationEditorInstance = new conversation_editor_1.ConversationEditor();
conversationEditorInstance.main();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map