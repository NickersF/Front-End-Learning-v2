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
styleguide_1.styleGuideSetup();
overflow_position_1.EchoSlider();
overflow_position_1.ScrollEventExample();
function_1.moduleTestFunc();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2xvcl9nZW4udHMiLCJ3ZWJwYWNrOi8vLy4vZnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vb3ZlcmZsb3dfcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVndWlkZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsaUJBQWlCLENBQUMsZUFBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCO0lBRW5HLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBQ0wsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0IsNEJBQTRCLENBQUMsZUFBOEIsRUFBRSxRQUFnQjtJQUV6RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM1RixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUM7QUFORCxvRUFNQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsU0FBZ0IsY0FBYztJQUMx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bkcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztLQUNKO0FBRUwsQ0FBQztBQWxCRCw0REFrQkM7Ozs7Ozs7VUNsREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLGdGQUErQztBQUMvQyxxR0FBcUU7QUFDckUsMEVBQTRDO0FBRTVDLDRCQUFlLEVBQUUsQ0FBQztBQUNsQiw4QkFBVSxFQUFFLENBQUM7QUFDYixzQ0FBa0IsRUFBRSxDQUFDO0FBQ3JCLHlCQUFjLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RlcE5hbWVzKGNvbG9yTmFtZXNBcnJheTogQXJyYXk8c3RyaW5nPiwgbnVtT2ZTdGVwczogbnVtYmVyLCBiYXNlQ29sb3I6IHN0cmluZykge1xyXG5cclxuICAgIGlmIChudW1PZlN0ZXBzIDwgMCB8fCBudW1PZlN0ZXBzID4gMTApIHtcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJJbnZhbGlkIGNvbG9yIHN0ZXAgcmFuZ2UgcHJvdmlkZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1PZlN0ZXBzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29sb3JOYW1lc0FycmF5LnB1c2goXCJmZS1cIiArIGJhc2VDb2xvciArIFwiLTBcIiArIGluZGV4LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRCYWNrZ3JvdW5kQ29sb3JFbGVtZW50cyhjb2xvck5hbWVzQXJyYXk6IEFycmF5PHN0cmluZz4sIHBhcmVudEVsOiBzdHJpbmcpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sb3JOYW1lc0FycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxldCAkY29sb3JFbHMgPSAkKFwiPGRpdiBjbGFzcz0nY29sb3ItZGVtby1ib3ggZmUtXCIgKyBjb2xvck5hbWVzQXJyYXlbaW5kZXhdICsgXCItYmcnPjwvZGl2PlwiKVxyXG4gICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCRjb2xvckVscyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbW9kdWxlVGVzdEZ1bmMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlYnBhY2sgYWxsb3dlZCB0aGlzIHRvIGJlIGxvYWRlZCB2aWEgYSBtb2R1bGUuXCIpO1xyXG59IiwiY29uc3QgTUFYX0xFRlQgPSAtMjU2O1xyXG5jb25zdCBNQVhfUklHSFQgPSAyNTY7XHJcblxyXG4vLyBSYW5nZSBpbnB1dCBzY3JvbGxpbmcgb2YgZWxlbWVudHMgd2l0aCBvdmVyZmxvdyBoaWRkZW5cclxuZXhwb3J0IGZ1bmN0aW9uIEVjaG9TbGlkZXIoKSB7XHJcbiAgICBsZXQgcG9zaXRpb25TbGlkZXIgPSAkKFwiI1Bvc2l0aW9uUmFuZ2VcIik7XHJcbiAgICBsZXQgdGV4dEVsZW1lbnRUb01vdmUgPSAkKFwiI1RleHRUb01vdmVcIik7XHJcbiAgICBsZXQgY3VycmVudFNsaWRlclZhbHVlO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvblNsaWRlci5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjdXJyZW50U2xpZGVyVmFsdWUgPSBwb3NpdGlvblNsaWRlci52YWwoKS50b1N0cmluZygpICsgXCJweFwiO1xyXG4gICAgICAgIHRleHRFbGVtZW50VG9Nb3ZlLmNzcyhcImxlZnRcIiwgY3VycmVudFNsaWRlclZhbHVlKVxyXG4gICAgICAgICQoXCIjU2xpZGVyVmFsdWVcIikudGV4dChcIkN1cnJlbnQgZGVsdGFZOiBcIiArIGN1cnJlbnRTbGlkZXJWYWx1ZSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gTW91c2Ugd2hlZWwgc2Nyb2xsaW5nIG9mIGVsZW1lbnRzIHdpdGggb3ZlcmZsb3cgaGlkZGVuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY3JvbGxFdmVudEV4YW1wbGUoKSB7XHJcbiAgICBsZXQgbW91c2VXaGVlbFNjcm9sbEJveCA9ICQoXCIjTW91c2VXaGVlbFNjcm9sbEJveFwiKTtcclxuICAgIGxldCB0ZXh0RWxlbWVudFRvTW92ZTAxID0gJChcIiNUZXh0VG9Nb3ZlMDFcIik7XHJcbiAgICBsZXQgc2Nyb2xsTm90aWNlID0gJChcIiNTY3JvbGxOb3RpY2VcIik7XHJcbiAgICBsZXQgY3VycmVudERlbHRhWSA9IDA7XHJcblxyXG4gICAgbW91c2VXaGVlbFNjcm9sbEJveC5vbihcIm1vdXNld2hlZWxcIiwgZnVuY3Rpb24oZSkge1xyXG5cclxuICAgICAgICAvLyBDYXN0IHRoZSBldmVudCBhcyBhIFdoZWVsRXZlbnQgdG8gZXhwb3NlIGRlbHRhWSBwcm9wZXJ0eVxyXG4gICAgICAgIGxldCB3aGVlbEV2ZW50ID0gZS5vcmlnaW5hbEV2ZW50IGFzIFdoZWVsRXZlbnQ7XHJcblxyXG4gICAgICAgIGlmICh3aGVlbEV2ZW50LmRlbHRhWSA9PSAxMDAgJiYgY3VycmVudERlbHRhWSA+IE1BWF9MRUZUKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnREZWx0YVktLVxyXG4gICAgICAgICAgICB0ZXh0RWxlbWVudFRvTW92ZTAxLmNzcyhcImxlZnRcIiwgY3VycmVudERlbHRhWSk7XHJcbiAgICAgICAgICAgIHNjcm9sbE5vdGljZS50ZXh0KFwiRWxlbWVudCBtb3ZlZDogXCIgKyBjdXJyZW50RGVsdGFZICsgXCJweCB0byB0aGUgbGVmdC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2hlZWxFdmVudC5kZWx0YVkgPT0gLTEwMCAmJiBjdXJyZW50RGVsdGFZIDwgTUFYX1JJR0hUKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnREZWx0YVkrK1xyXG4gICAgICAgICAgICB0ZXh0RWxlbWVudFRvTW92ZTAxLmNzcyhcImxlZnRcIiwgY3VycmVudERlbHRhWSk7XHJcbiAgICAgICAgICAgIHNjcm9sbE5vdGljZS50ZXh0KFwiRWxlbWVudCBtb3ZlZDogXCIgKyBjdXJyZW50RGVsdGFZICsgXCJweCB0byB0aGUgcmlnaHQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRHJhZ0V2ZW50RXhhbXBsZSgpIHtcclxuICAgIGxldCBkcmFnUGFyYUVsID0gJChcIiNEcmFnUGFyYUVsXCIpO1xyXG4gICAgbGV0IGRyYWdOb3RpY2UgPSAkKFwiI0RyYWdOb3RpY2VcIik7XHJcbiAgICBsZXQgZHJhZ0NvdW50ID0gMDtcclxuXHJcbiAgICBkcmFnUGFyYUVsLm9uKFwiZHJhZ1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBkcmFnQ291bnQrKztcclxuICAgICAgICBkcmFnTm90aWNlLnRleHQoXCJEcmFnIGV2ZW50IGZpcmVkOiBcIiArIGRyYWdDb3VudCArIFwiIHRpbWVzLlwiKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVTdGVwTmFtZXMsIGJ1aWxkQmFja2dyb3VuZENvbG9yRWxlbWVudHMgfSBmcm9tIFwiLi9jb2xvcl9nZW5cIjtcclxuXHJcbmNvbnN0IHNpdGVDb2xvclBhbGV0dGUgPSBbXHJcbiAgICBcImxpZ2h0LWdyZWVuXCIsXHJcbiAgICBcImxpZ2h0LWJsdWVcIixcclxuICAgIFwibGlnaHQteWVsbG93XCIsXHJcbiAgICBcImJsdWVncmF5LWRhcmtcIixcclxuICAgIFwiYmx1ZWdyZXktbWVkaXVtXCIsXHJcbiAgICBcImJsdWVncmV5LWxpZ2h0XCIsXHJcbiAgICBcImJsdWVncmV5LWxpZ2h0ZXN0XCIsXHJcbl07XHJcblxyXG5jb25zdCBvcGVuU2Fuc0ZvbnRXZWlnaHRWYWx1ZXMgPSBbXHJcbiAgICBcImxpZ2h0XCIsXHJcbiAgICBcInJlZ3VsYXItaXRhbGljXCIsXHJcbiAgICBcInJlZ3VsYXJcIixcclxuICAgIFwiYm9sZFwiLFxyXG4gICAgXCJleHRyYWJvbGRcIlxyXG5dXHJcblxyXG5jb25zdCBwb3BwaW5zRm9udFdlaWdodFZhbHVlcyA9IFtcclxuICAgIFwicmVndWxhclwiLFxyXG4gICAgXCJib2xkXCIsXHJcbiAgICBcImJsYWNrXCJcclxuXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlR3VpZGVTZXR1cCgpIHtcclxuICAgIGJ1aWxkQmFja2dyb3VuZENvbG9yRWxlbWVudHMoc2l0ZUNvbG9yUGFsZXR0ZSwgXCJDb2xvclBhbGV0dGVXcmFwcGVyXCIpO1xyXG4gICAgYnVpbGRUeXBlRXhhbXBsZUVsZW1lbnRzKG9wZW5TYW5zRm9udFdlaWdodFZhbHVlcywgXCJUeXBlRXhhbXBsZVdyYXBwZXJcIiwgXCJPcGVuIFNhbnMgU2FtcGxlXCIsIFwib3Blbi1zYW5zXCIpO1xyXG4gICAgYnVpbGRUeXBlRXhhbXBsZUVsZW1lbnRzKHBvcHBpbnNGb250V2VpZ2h0VmFsdWVzLCBcIlR5cGVFeGFtcGxlV3JhcHBlclwiLCBcIlBvcHBpbnMgU2FtcGxlXCIsIFwicG9wcGluc1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhmb250V2VpZ2h0VmFsdWVzOiBBcnJheTxzdHJpbmc+LCBwYXJlbnRFbDogc3RyaW5nLCBleFRleHQ6IHN0cmluZywgdGFyZ2V0Rm9udEZhbWlseTogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKHRhcmdldEZvbnRGYW1pbHkgPT0gXCJvcGVuLXNhbnNcIikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb250V2VpZ2h0VmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgJHR5cGVFeEVscyA9ICQoXCI8ZGl2IGNsYXNzPSdcIiArIHRhcmdldEZvbnRGYW1pbHkgKyBcIi1cIiArIGZvbnRXZWlnaHRWYWx1ZXNbaW5kZXhdICsgXCInPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgJHR5cGVFeEVscy50ZXh0KGV4VGV4dCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCR0eXBlRXhFbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0Rm9udEZhbWlseSA9PSBcInBvcHBpbnNcIikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb250V2VpZ2h0VmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgJHR5cGVFeEVscyA9ICQoXCI8ZGl2IGNsYXNzPSdcIiArIHRhcmdldEZvbnRGYW1pbHkgKyBcIi1cIiArIGZvbnRXZWlnaHRWYWx1ZXNbaW5kZXhdICsgXCInPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgJHR5cGVFeEVscy50ZXh0KGV4VGV4dCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCR0eXBlRXhFbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHN0eWxlR3VpZGVTZXR1cCB9IGZyb20gXCIuL3N0eWxlZ3VpZGVcIjtcclxuaW1wb3J0IHsgRWNob1NsaWRlciwgU2Nyb2xsRXZlbnRFeGFtcGxlIH0gZnJvbSBcIi4vb3ZlcmZsb3dfcG9zaXRpb25cIjtcclxuaW1wb3J0IHsgbW9kdWxlVGVzdEZ1bmMgfSBmcm9tIFwiLi9mdW5jdGlvblwiO1xyXG5cclxuc3R5bGVHdWlkZVNldHVwKCk7XHJcbkVjaG9TbGlkZXIoKTtcclxuU2Nyb2xsRXZlbnRFeGFtcGxlKCk7XHJcbm1vZHVsZVRlc3RGdW5jKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==