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
exports.EchoSlider = void 0;
function EchoSlider() {
    let positionSlider = $("#PositionRange");
    let textElementToMove = $("#TextToMove");
    let currentSliderValue;
    positionSlider.on("input", function () {
        currentSliderValue = positionSlider.val().toString() + "px";
        textElementToMove.css("left", currentSliderValue);
        $("#SliderValue").text(currentSliderValue);
    });
}
exports.EchoSlider = EchoSlider;


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
styleguide_1.styleGuideSetup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2xvcl9nZW4udHMiLCJ3ZWJwYWNrOi8vLy4vb3ZlcmZsb3dfcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVndWlkZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsaUJBQWlCLENBQUMsZUFBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCO0lBRW5HLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBQ0wsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0IsNEJBQTRCLENBQUMsZUFBOEIsRUFBRSxRQUFnQjtJQUV6RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM1RixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUM7QUFORCxvRUFNQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsU0FBZ0IsVUFBVTtJQUN0QixJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUMs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ZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwTmFtZXMoY29sb3JOYW1lc0FycmF5OiBBcnJheTxzdHJpbmc+LCBudW1PZlN0ZXBzOiBudW1iZXIsIGJhc2VDb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKG51bU9mU3RlcHMgPCAwIHx8IG51bU9mU3RlcHMgPiAxMCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkludmFsaWQgY29sb3Igc3RlcCByYW5nZSBwcm92aWRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bU9mU3RlcHM7IGluZGV4KyspIHtcclxuICAgICAgICBjb2xvck5hbWVzQXJyYXkucHVzaChcImZlLVwiICsgYmFzZUNvbG9yICsgXCItMFwiICsgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzKGNvbG9yTmFtZXNBcnJheTogQXJyYXk8c3RyaW5nPiwgcGFyZW50RWw6IHN0cmluZykge1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2xvck5hbWVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0ICRjb2xvckVscyA9ICQoXCI8ZGl2IGNsYXNzPSdjb2xvci1kZW1vLWJveCBmZS1cIiArIGNvbG9yTmFtZXNBcnJheVtpbmRleF0gKyBcIi1iZyc+PC9kaXY+XCIpXHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudEVsKS5hcHBlbmQoJGNvbG9yRWxzKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBFY2hvU2xpZGVyKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uU2xpZGVyID0gJChcIiNQb3NpdGlvblJhbmdlXCIpO1xyXG4gICAgbGV0IHRleHRFbGVtZW50VG9Nb3ZlID0gJChcIiNUZXh0VG9Nb3ZlXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRTbGlkZXJWYWx1ZTtcclxuICAgIFxyXG4gICAgcG9zaXRpb25TbGlkZXIub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlclZhbHVlID0gcG9zaXRpb25TbGlkZXIudmFsKCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICB0ZXh0RWxlbWVudFRvTW92ZS5jc3MoXCJsZWZ0XCIsIGN1cnJlbnRTbGlkZXJWYWx1ZSlcclxuICAgICAgICAkKFwiI1NsaWRlclZhbHVlXCIpLnRleHQoY3VycmVudFNsaWRlclZhbHVlKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVTdGVwTmFtZXMsIGJ1aWxkQmFja2dyb3VuZENvbG9yRWxlbWVudHMgfSBmcm9tIFwiLi9jb2xvcl9nZW5cIjtcclxuXHJcbmNvbnN0IHNpdGVDb2xvclBhbGV0dGUgPSBbXHJcbiAgICBcImxpZ2h0LWdyZWVuXCIsXHJcbiAgICBcImxpZ2h0LWJsdWVcIixcclxuICAgIFwibGlnaHQteWVsbG93XCIsXHJcbiAgICBcImJsdWVncmF5LWRhcmtcIixcclxuICAgIFwiYmx1ZWdyZXktbWVkaXVtXCIsXHJcbiAgICBcImJsdWVncmV5LWxpZ2h0XCIsXHJcbiAgICBcImJsdWVncmV5LWxpZ2h0ZXN0XCIsXHJcbl07XHJcblxyXG5jb25zdCBvcGVuU2Fuc0ZvbnRXZWlnaHRWYWx1ZXMgPSBbXHJcbiAgICBcImxpZ2h0XCIsXHJcbiAgICBcInJlZ3VsYXItaXRhbGljXCIsXHJcbiAgICBcInJlZ3VsYXJcIixcclxuICAgIFwiYm9sZFwiLFxyXG4gICAgXCJleHRyYWJvbGRcIlxyXG5dXHJcblxyXG5jb25zdCBwb3BwaW5zRm9udFdlaWdodFZhbHVlcyA9IFtcclxuICAgIFwicmVndWxhclwiLFxyXG4gICAgXCJib2xkXCIsXHJcbiAgICBcImJsYWNrXCJcclxuXVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlR3VpZGVTZXR1cCgpIHtcclxuICAgIGJ1aWxkQmFja2dyb3VuZENvbG9yRWxlbWVudHMoc2l0ZUNvbG9yUGFsZXR0ZSwgXCJDb2xvclBhbGV0dGVXcmFwcGVyXCIpO1xyXG4gICAgYnVpbGRUeXBlRXhhbXBsZUVsZW1lbnRzKG9wZW5TYW5zRm9udFdlaWdodFZhbHVlcywgXCJUeXBlRXhhbXBsZVdyYXBwZXJcIiwgXCJPcGVuIFNhbnMgU2FtcGxlXCIsIFwib3Blbi1zYW5zXCIpO1xyXG4gICAgYnVpbGRUeXBlRXhhbXBsZUVsZW1lbnRzKHBvcHBpbnNGb250V2VpZ2h0VmFsdWVzLCBcIlR5cGVFeGFtcGxlV3JhcHBlclwiLCBcIlBvcHBpbnMgU2FtcGxlXCIsIFwicG9wcGluc1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhmb250V2VpZ2h0VmFsdWVzOiBBcnJheTxzdHJpbmc+LCBwYXJlbnRFbDogc3RyaW5nLCBleFRleHQ6IHN0cmluZywgdGFyZ2V0Rm9udEZhbWlseTogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKHRhcmdldEZvbnRGYW1pbHkgPT0gXCJvcGVuLXNhbnNcIikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb250V2VpZ2h0VmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgJHR5cGVFeEVscyA9ICQoXCI8ZGl2IGNsYXNzPSdcIiArIHRhcmdldEZvbnRGYW1pbHkgKyBcIi1cIiArIGZvbnRXZWlnaHRWYWx1ZXNbaW5kZXhdICsgXCInPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgJHR5cGVFeEVscy50ZXh0KGV4VGV4dCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCR0eXBlRXhFbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0Rm9udEZhbWlseSA9PSBcInBvcHBpbnNcIikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb250V2VpZ2h0VmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsZXQgJHR5cGVFeEVscyA9ICQoXCI8ZGl2IGNsYXNzPSdcIiArIHRhcmdldEZvbnRGYW1pbHkgKyBcIi1cIiArIGZvbnRXZWlnaHRWYWx1ZXNbaW5kZXhdICsgXCInPjwvZGl2PlwiKTtcclxuICAgICAgICAgICAgJHR5cGVFeEVscy50ZXh0KGV4VGV4dCk7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBwYXJlbnRFbCkuYXBwZW5kKCR0eXBlRXhFbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHN0eWxlR3VpZGVTZXR1cCB9IGZyb20gXCIuL3N0eWxlZ3VpZGVcIjtcclxuaW1wb3J0IHsgRWNob1NsaWRlciB9IGZyb20gXCIuL292ZXJmbG93X3Bvc2l0aW9uXCI7XHJcblxyXG5FY2hvU2xpZGVyKCk7XHJcbnN0eWxlR3VpZGVTZXR1cCgpOyJdLCJzb3VyY2VSb290IjoiIn0=