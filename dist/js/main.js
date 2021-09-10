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
overflow_position_1.EchoSlider();
overflow_position_1.ScrollEventExample();
styleguide_1.styleGuideSetup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2xvcl9nZW4udHMiLCJ3ZWJwYWNrOi8vLy4vb3ZlcmZsb3dfcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVndWlkZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsaUJBQWlCLENBQUMsZUFBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCO0lBRW5HLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBQ0wsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0IsNEJBQTRCLENBQUMsZUFBOEIsRUFBRSxRQUFnQjtJQUV6RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM1RixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUM7QUFORCxvRUFNQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBR3RCLFNBQWdCLFVBQVU7SUFDdEIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekMsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsSUFBSSxrQkFBa0IsQ0FBQztJQUV2QixjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUN2QixrQkFBa0IsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzVELGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLENBQUM7UUFDakQsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELGdDQVVDO0FBR0QsU0FBZ0Isa0JBQWtCO0lBQzlCLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEQsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0MsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RDLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztJQUV0QixtQkFBbUIsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVMsQ0FBQztRQUczQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBMkIsQ0FBQztRQUUvQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLGFBQWEsR0FBRyxRQUFRLEVBQUU7WUFDdEQsYUFBYSxFQUFFO1lBQ2YsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzVFO1FBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQWEsR0FBRyxTQUFTLEVBQUU7WUFDeEQsYUFBYSxFQUFFO1lBQ2YsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMvQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1NBQzdFO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBdkJELGdEQXVCQztBQUVELFNBQWdCLGdCQUFnQjtJQUM1QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUVsQixVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRTtRQUNsQixTQUFTLEVBQUUsQ0FBQztRQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVRELDRDQVNDOzs7Ozs7Ozs7Ozs7OztBQ25ERCw2RUFBOEU7QUFFOUUsTUFBTSxnQkFBZ0IsR0FBRztJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sd0JBQXdCLEdBQUc7SUFDN0IsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFdBQVc7Q0FDZDtBQUVELE1BQU0sdUJBQXVCLEdBQUc7SUFDNUIsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0NBQ1Y7QUFFRCxTQUFnQixlQUFlO0lBQzNCLHdDQUE0QixDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDdEUsd0JBQXdCLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUcsd0JBQXdCLENBQUMsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDekcsQ0FBQztBQUpELDBDQUlDO0FBRUQsU0FBZ0Isd0JBQXdCLENBQUMsZ0JBQStCLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsZ0JBQXdCO0lBRWhJLElBQUksZ0JBQWdCLElBQUksV0FBVyxFQUFFO1FBQ2pDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDbkcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztLQUNKO0lBRUQsSUFBSSxnQkFBZ0IsSUFBSSxTQUFTLEVBQUU7UUFDL0IsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxRCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsY0FBYyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUNuRyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hDO0tBQ0o7QUFFTCxDQUFDO0FBbEJELDREQWtCQzs7Ozs7OztVQ2xERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsZ0ZBQStDO0FBQy9DLHFHQUFxRTtBQUVyRSw4QkFBVSxFQUFFLENBQUM7QUFDYixzQ0FBa0IsRUFBRSxDQUFDO0FBQ3JCLDRCQUFlLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RlcE5hbWVzKGNvbG9yTmFtZXNBcnJheTogQXJyYXk8c3RyaW5nPiwgbnVtT2ZTdGVwczogbnVtYmVyLCBiYXNlQ29sb3I6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChudW1PZlN0ZXBzIDwgMCB8fCBudW1PZlN0ZXBzID4gMTApIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIGNvbG9yIHN0ZXAgcmFuZ2UgcHJvdmlkZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1PZlN0ZXBzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29sb3JOYW1lc0FycmF5LnB1c2goXCJmZS1cIiArIGJhc2VDb2xvciArIFwiLTBcIiArIGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCYWNrZ3JvdW5kQ29sb3JFbGVtZW50cyhjb2xvck5hbWVzQXJyYXk6IEFycmF5PHN0cmluZz4sIHBhcmVudEVsOiBzdHJpbmcpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sb3JOYW1lc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCAkY29sb3JFbHMgPSAkKFwiPGRpdiBjbGFzcz0nY29sb3ItZGVtby1ib3ggZmUtXCIgKyBjb2xvck5hbWVzQXJyYXlbaW5kZXhdICsgXCItYmcnPjwvZGl2PlwiKVxyXG4gICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCRjb2xvckVscyk7XHJcbiAgICB9XHJcbn0iLCJjb25zdCBNQVhfTEVGVCA9IC0yNTY7XHJcbmNvbnN0IE1BWF9SSUdIVCA9IDI1NjtcclxuXHJcbi8vIFJhbmdlIGlucHV0IHNjcm9sbGluZyBvZiBlbGVtZW50cyB3aXRoIG92ZXJmbG93IGhpZGRlblxyXG5leHBvcnQgZnVuY3Rpb24gRWNob1NsaWRlcigpIHtcclxuICAgIGxldCBwb3NpdGlvblNsaWRlciA9ICQoXCIjUG9zaXRpb25SYW5nZVwiKTtcclxuICAgIGxldCB0ZXh0RWxlbWVudFRvTW92ZSA9ICQoXCIjVGV4dFRvTW92ZVwiKTtcclxuICAgIGxldCBjdXJyZW50U2xpZGVyVmFsdWU7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uU2xpZGVyLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZXJWYWx1ZSA9IHBvc2l0aW9uU2xpZGVyLnZhbCgpLnRvU3RyaW5nKCkgKyBcInB4XCI7XHJcbiAgICAgICAgdGV4dEVsZW1lbnRUb01vdmUuY3NzKFwibGVmdFwiLCBjdXJyZW50U2xpZGVyVmFsdWUpXHJcbiAgICAgICAgJChcIiNTbGlkZXJWYWx1ZVwiKS50ZXh0KFwiQ3VycmVudCBkZWx0YVk6IFwiICsgY3VycmVudFNsaWRlclZhbHVlKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBNb3VzZSB3aGVlbCBzY3JvbGxpbmcgb2YgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBoaWRkZW5cclxuZXhwb3J0IGZ1bmN0aW9uIFNjcm9sbEV2ZW50RXhhbXBsZSgpIHtcclxuICAgIGxldCBtb3VzZVdoZWVsU2Nyb2xsQm94ID0gJChcIiNNb3VzZVdoZWVsU2Nyb2xsQm94XCIpO1xyXG4gICAgbGV0IHRleHRFbGVtZW50VG9Nb3ZlMDEgPSAkKFwiI1RleHRUb01vdmUwMVwiKTtcclxuICAgIGxldCBzY3JvbGxOb3RpY2UgPSAkKFwiI1Njcm9sbE5vdGljZVwiKTtcclxuICAgIGxldCBjdXJyZW50RGVsdGFZID0gMDtcclxuXHJcbiAgICBtb3VzZVdoZWVsU2Nyb2xsQm94Lm9uKFwibW91c2V3aGVlbFwiLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgIC8vIENhc3QgdGhlIGV2ZW50IGFzIGEgV2hlZWxFdmVudCB0byBleHBvc2UgZGVsdGFZIHByb3BlcnR5XHJcbiAgICAgICAgbGV0IHdoZWVsRXZlbnQgPSBlLm9yaWdpbmFsRXZlbnQgYXMgV2hlZWxFdmVudDtcclxuXHJcbiAgICAgICAgaWYgKHdoZWVsRXZlbnQuZGVsdGFZID09IDEwMCAmJiBjdXJyZW50RGVsdGFZID4gTUFYX0xFRlQpIHtcclxuICAgICAgICAgICAgY3VycmVudERlbHRhWS0tXHJcbiAgICAgICAgICAgIHRleHRFbGVtZW50VG9Nb3ZlMDEuY3NzKFwibGVmdFwiLCBjdXJyZW50RGVsdGFZKTtcclxuICAgICAgICAgICAgc2Nyb2xsTm90aWNlLnRleHQoXCJFbGVtZW50IG1vdmVkOiBcIiArIGN1cnJlbnREZWx0YVkgKyBcInB4IHRvIHRoZSBsZWZ0LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh3aGVlbEV2ZW50LmRlbHRhWSA9PSAtMTAwICYmIGN1cnJlbnREZWx0YVkgPCBNQVhfUklHSFQpIHtcclxuICAgICAgICAgICAgY3VycmVudERlbHRhWSsrXHJcbiAgICAgICAgICAgIHRleHRFbGVtZW50VG9Nb3ZlMDEuY3NzKFwibGVmdFwiLCBjdXJyZW50RGVsdGFZKTtcclxuICAgICAgICAgICAgc2Nyb2xsTm90aWNlLnRleHQoXCJFbGVtZW50IG1vdmVkOiBcIiArIGN1cnJlbnREZWx0YVkgKyBcInB4IHRvIHRoZSByaWdodC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEcmFnRXZlbnRFeGFtcGxlKCkge1xyXG4gICAgbGV0IGRyYWdQYXJhRWwgPSAkKFwiI0RyYWdQYXJhRWxcIik7XHJcbiAgICBsZXQgZHJhZ05vdGljZSA9ICQoXCIjRHJhZ05vdGljZVwiKTtcclxuICAgIGxldCBkcmFnQ291bnQgPSAwO1xyXG5cclxuICAgIGRyYWdQYXJhRWwub24oXCJkcmFnXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRyYWdDb3VudCsrO1xyXG4gICAgICAgIGRyYWdOb3RpY2UudGV4dChcIkRyYWcgZXZlbnQgZmlyZWQ6IFwiICsgZHJhZ0NvdW50ICsgXCIgdGltZXMuXCIpO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyBnZW5lcmF0ZVN0ZXBOYW1lcywgYnVpbGRCYWNrZ3JvdW5kQ29sb3JFbGVtZW50cyB9IGZyb20gXCIuL2NvbG9yX2dlblwiO1xyXG5cclxuY29uc3Qgc2l0ZUNvbG9yUGFsZXR0ZSA9IFtcclxuICAgIFwibGlnaHQtZ3JlZW5cIixcclxuICAgIFwibGlnaHQtYmx1ZVwiLFxyXG4gICAgXCJsaWdodC15ZWxsb3dcIixcclxuICAgIFwiYmx1ZWdyYXktZGFya1wiLFxyXG4gICAgXCJibHVlZ3JleS1tZWRpdW1cIixcclxuICAgIFwiYmx1ZWdyZXktbGlnaHRcIixcclxuICAgIFwiYmx1ZWdyZXktbGlnaHRlc3RcIixcclxuXTtcclxuXHJcbmNvbnN0IG9wZW5TYW5zRm9udFdlaWdodFZhbHVlcyA9IFtcclxuICAgIFwibGlnaHRcIixcclxuICAgIFwicmVndWxhci1pdGFsaWNcIixcclxuICAgIFwicmVndWxhclwiLFxyXG4gICAgXCJib2xkXCIsXHJcbiAgICBcImV4dHJhYm9sZFwiXHJcbl1cclxuXHJcbmNvbnN0IHBvcHBpbnNGb250V2VpZ2h0VmFsdWVzID0gW1xyXG4gICAgXCJyZWd1bGFyXCIsXHJcbiAgICBcImJvbGRcIixcclxuICAgIFwiYmxhY2tcIlxyXG5dXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVHdWlkZVNldHVwKCkge1xyXG4gICAgYnVpbGRCYWNrZ3JvdW5kQ29sb3JFbGVtZW50cyhzaXRlQ29sb3JQYWxldHRlLCBcIkNvbG9yUGFsZXR0ZVdyYXBwZXJcIik7XHJcbiAgICBidWlsZFR5cGVFeGFtcGxlRWxlbWVudHMob3BlblNhbnNGb250V2VpZ2h0VmFsdWVzLCBcIlR5cGVFeGFtcGxlV3JhcHBlclwiLCBcIk9wZW4gU2FucyBTYW1wbGVcIiwgXCJvcGVuLXNhbnNcIik7XHJcbiAgICBidWlsZFR5cGVFeGFtcGxlRWxlbWVudHMocG9wcGluc0ZvbnRXZWlnaHRWYWx1ZXMsIFwiVHlwZUV4YW1wbGVXcmFwcGVyXCIsIFwiUG9wcGlucyBTYW1wbGVcIiwgXCJwb3BwaW5zXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRUeXBlRXhhbXBsZUVsZW1lbnRzKGZvbnRXZWlnaHRWYWx1ZXM6IEFycmF5PHN0cmluZz4sIHBhcmVudEVsOiBzdHJpbmcsIGV4VGV4dDogc3RyaW5nLCB0YXJnZXRGb250RmFtaWx5OiBzdHJpbmcpIHtcclxuXHJcbiAgICBpZiAodGFyZ2V0Rm9udEZhbWlseSA9PSBcIm9wZW4tc2Fuc1wiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvbnRXZWlnaHRWYWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCAkdHlwZUV4RWxzID0gJChcIjxkaXYgY2xhc3M9J1wiICsgdGFyZ2V0Rm9udEZhbWlseSArIFwiLVwiICsgZm9udFdlaWdodFZhbHVlc1tpbmRleF0gKyBcIic+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAkdHlwZUV4RWxzLnRleHQoZXhUZXh0KTtcclxuICAgICAgICAgICAgJChcIiNcIiArIHBhcmVudEVsKS5hcHBlbmQoJHR5cGVFeEVscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXRGb250RmFtaWx5ID09IFwicG9wcGluc1wiKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvbnRXZWlnaHRWYWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCAkdHlwZUV4RWxzID0gJChcIjxkaXYgY2xhc3M9J1wiICsgdGFyZ2V0Rm9udEZhbWlseSArIFwiLVwiICsgZm9udFdlaWdodFZhbHVlc1tpbmRleF0gKyBcIic+PC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAkdHlwZUV4RWxzLnRleHQoZXhUZXh0KTtcclxuICAgICAgICAgICAgJChcIiNcIiArIHBhcmVudEVsKS5hcHBlbmQoJHR5cGVFeEVscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgc3R5bGVHdWlkZVNldHVwIH0gZnJvbSBcIi4vc3R5bGVndWlkZVwiO1xyXG5pbXBvcnQgeyBFY2hvU2xpZGVyLCBTY3JvbGxFdmVudEV4YW1wbGUgfSBmcm9tIFwiLi9vdmVyZmxvd19wb3NpdGlvblwiO1xyXG5cclxuRWNob1NsaWRlcigpO1xyXG5TY3JvbGxFdmVudEV4YW1wbGUoKTtcclxuc3R5bGVHdWlkZVNldHVwKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==