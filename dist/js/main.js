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
let ExampleDataObject = {
    "Tenant_Key": "40",
    "Tiles": {
        "PortalInfoTile": {
            "TileTitle": "Portal Information",
            "TemplateID": "PortalInformationTile",
            "TemplatePath": "/Templates/PortalInformation.tmpl.htm",
            "ColSpan": 5,
            "RowSpan": 5
        },
        "MapTile": {
            "TileTitle": "Road Information System Map",
            "TemplateID": "MapTile",
            "TemplatePath": "/Templates/MapTemplate.tmpl.htm",
            "ColSpan": 7,
            "RowSpan": 5
        }
    },
    "Controls": {
        "DashboardPortalInfo": "DashboardPortalInfo",
        "DashboardMap": "DashboardMap"
    }
};
console.log(ExampleDataObject);
for (let key in ExampleDataObject.Tiles) {
    console.log(ExampleDataObject.Tiles[key].TemplateID);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2xvcl9nZW4udHMiLCJ3ZWJwYWNrOi8vLy4vb3ZlcmZsb3dfcG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVndWlkZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBZ0IsaUJBQWlCLENBQUMsZUFBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCO0lBRW5HLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBQ0wsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0IsNEJBQTRCLENBQUMsZUFBOEIsRUFBRSxRQUFnQjtJQUV6RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM1RixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUM7QUFORCxvRUFNQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdEIsTUFBTSxT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QUFDO0FBbEJELDREQWtCQzs7Ozs7OztVQ2xERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsZ0ZBQStDO0FBQy9DLHFHQUFxRTtBQUVyRSw4QkFBVSxFQUFFLENBQUM7QUFDYixzQ0FBa0IsRUFBRSxDQUFDO0FBQ3JCLDRCQUFlLEVBQUUsQ0FBQztBQUVsQixJQUFJLGlCQUFpQixHQUFHO0lBQ3BCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLE9BQU8sRUFBRTtRQUNQLGdCQUFnQixFQUFFO1lBQ2hCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsWUFBWSxFQUFFLHVCQUF1QjtZQUNyQyxjQUFjLEVBQUUsdUNBQXVDO1lBQ3ZELFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7U0FDYjtRQUNELFNBQVMsRUFBRTtZQUNULFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsWUFBWSxFQUFFLFNBQVM7WUFDdkIsY0FBYyxFQUFFLGlDQUFpQztZQUNqRCxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRjtJQUNELFVBQVUsRUFBRTtRQUNWLHFCQUFxQixFQUFFLHFCQUFxQjtRQUM1QyxjQUFjLEVBQUUsY0FBYztLQUMvQjtDQUNGO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9CLEtBQUssSUFBSSxHQUFHLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0NBQ3hEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwTmFtZXMoY29sb3JOYW1lc0FycmF5OiBBcnJheTxzdHJpbmc+LCBudW1PZlN0ZXBzOiBudW1iZXIsIGJhc2VDb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKG51bU9mU3RlcHMgPCAwIHx8IG51bU9mU3RlcHMgPiAxMCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkludmFsaWQgY29sb3Igc3RlcCByYW5nZSBwcm92aWRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bU9mU3RlcHM7IGluZGV4KyspIHtcclxuICAgICAgICBjb2xvck5hbWVzQXJyYXkucHVzaChcImZlLVwiICsgYmFzZUNvbG9yICsgXCItMFwiICsgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzKGNvbG9yTmFtZXNBcnJheTogQXJyYXk8c3RyaW5nPiwgcGFyZW50RWw6IHN0cmluZykge1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2xvck5hbWVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0ICRjb2xvckVscyA9ICQoXCI8ZGl2IGNsYXNzPSdjb2xvci1kZW1vLWJveCBmZS1cIiArIGNvbG9yTmFtZXNBcnJheVtpbmRleF0gKyBcIi1iZyc+PC9kaXY+XCIpXHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudEVsKS5hcHBlbmQoJGNvbG9yRWxzKTtcclxuICAgIH1cclxufSIsImNvbnN0IE1BWF9MRUZUID0gLTI1NjtcclxuY29uc3QgTUFYX1JJR0hUID0gMjU2O1xyXG5cclxuLy8gUmFuZ2UgaW5wdXQgc2Nyb2xsaW5nIG9mIGVsZW1lbnRzIHdpdGggb3ZlcmZsb3cgaGlkZGVuXHJcbmV4cG9ydCBmdW5jdGlvbiBFY2hvU2xpZGVyKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uU2xpZGVyID0gJChcIiNQb3NpdGlvblJhbmdlXCIpO1xyXG4gICAgbGV0IHRleHRFbGVtZW50VG9Nb3ZlID0gJChcIiNUZXh0VG9Nb3ZlXCIpO1xyXG4gICAgbGV0IGN1cnJlbnRTbGlkZXJWYWx1ZTtcclxuICAgIFxyXG4gICAgcG9zaXRpb25TbGlkZXIub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlclZhbHVlID0gcG9zaXRpb25TbGlkZXIudmFsKCkudG9TdHJpbmcoKSArIFwicHhcIjtcclxuICAgICAgICB0ZXh0RWxlbWVudFRvTW92ZS5jc3MoXCJsZWZ0XCIsIGN1cnJlbnRTbGlkZXJWYWx1ZSlcclxuICAgICAgICAkKFwiI1NsaWRlclZhbHVlXCIpLnRleHQoXCJDdXJyZW50IGRlbHRhWTogXCIgKyBjdXJyZW50U2xpZGVyVmFsdWUpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIE1vdXNlIHdoZWVsIHNjcm9sbGluZyBvZiBlbGVtZW50cyB3aXRoIG92ZXJmbG93IGhpZGRlblxyXG5leHBvcnQgZnVuY3Rpb24gU2Nyb2xsRXZlbnRFeGFtcGxlKCkge1xyXG4gICAgbGV0IG1vdXNlV2hlZWxTY3JvbGxCb3ggPSAkKFwiI01vdXNlV2hlZWxTY3JvbGxCb3hcIik7XHJcbiAgICBsZXQgdGV4dEVsZW1lbnRUb01vdmUwMSA9ICQoXCIjVGV4dFRvTW92ZTAxXCIpO1xyXG4gICAgbGV0IHNjcm9sbE5vdGljZSA9ICQoXCIjU2Nyb2xsTm90aWNlXCIpO1xyXG4gICAgbGV0IGN1cnJlbnREZWx0YVkgPSAwO1xyXG5cclxuICAgIG1vdXNlV2hlZWxTY3JvbGxCb3gub24oXCJtb3VzZXdoZWVsXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgLy8gQ2FzdCB0aGUgZXZlbnQgYXMgYSBXaGVlbEV2ZW50IHRvIGV4cG9zZSBkZWx0YVkgcHJvcGVydHlcclxuICAgICAgICBsZXQgd2hlZWxFdmVudCA9IGUub3JpZ2luYWxFdmVudCBhcyBXaGVlbEV2ZW50O1xyXG5cclxuICAgICAgICBpZiAod2hlZWxFdmVudC5kZWx0YVkgPT0gMTAwICYmIGN1cnJlbnREZWx0YVkgPiBNQVhfTEVGVCkge1xyXG4gICAgICAgICAgICBjdXJyZW50RGVsdGFZLS1cclxuICAgICAgICAgICAgdGV4dEVsZW1lbnRUb01vdmUwMS5jc3MoXCJsZWZ0XCIsIGN1cnJlbnREZWx0YVkpO1xyXG4gICAgICAgICAgICBzY3JvbGxOb3RpY2UudGV4dChcIkVsZW1lbnQgbW92ZWQ6IFwiICsgY3VycmVudERlbHRhWSArIFwicHggdG8gdGhlIGxlZnQuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdoZWVsRXZlbnQuZGVsdGFZID09IC0xMDAgJiYgY3VycmVudERlbHRhWSA8IE1BWF9SSUdIVCkge1xyXG4gICAgICAgICAgICBjdXJyZW50RGVsdGFZKytcclxuICAgICAgICAgICAgdGV4dEVsZW1lbnRUb01vdmUwMS5jc3MoXCJsZWZ0XCIsIGN1cnJlbnREZWx0YVkpO1xyXG4gICAgICAgICAgICBzY3JvbGxOb3RpY2UudGV4dChcIkVsZW1lbnQgbW92ZWQ6IFwiICsgY3VycmVudERlbHRhWSArIFwicHggdG8gdGhlIHJpZ2h0LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERyYWdFdmVudEV4YW1wbGUoKSB7XHJcbiAgICBsZXQgZHJhZ1BhcmFFbCA9ICQoXCIjRHJhZ1BhcmFFbFwiKTtcclxuICAgIGxldCBkcmFnTm90aWNlID0gJChcIiNEcmFnTm90aWNlXCIpO1xyXG4gICAgbGV0IGRyYWdDb3VudCA9IDA7XHJcblxyXG4gICAgZHJhZ1BhcmFFbC5vbihcImRyYWdcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZHJhZ0NvdW50Kys7XHJcbiAgICAgICAgZHJhZ05vdGljZS50ZXh0KFwiRHJhZyBldmVudCBmaXJlZDogXCIgKyBkcmFnQ291bnQgKyBcIiB0aW1lcy5cIik7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IGdlbmVyYXRlU3RlcE5hbWVzLCBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzIH0gZnJvbSBcIi4vY29sb3JfZ2VuXCI7XHJcblxyXG5jb25zdCBzaXRlQ29sb3JQYWxldHRlID0gW1xyXG4gICAgXCJsaWdodC1ncmVlblwiLFxyXG4gICAgXCJsaWdodC1ibHVlXCIsXHJcbiAgICBcImxpZ2h0LXllbGxvd1wiLFxyXG4gICAgXCJibHVlZ3JheS1kYXJrXCIsXHJcbiAgICBcImJsdWVncmV5LW1lZGl1bVwiLFxyXG4gICAgXCJibHVlZ3JleS1saWdodFwiLFxyXG4gICAgXCJibHVlZ3JleS1saWdodGVzdFwiLFxyXG5dO1xyXG5cclxuY29uc3Qgb3BlblNhbnNGb250V2VpZ2h0VmFsdWVzID0gW1xyXG4gICAgXCJsaWdodFwiLFxyXG4gICAgXCJyZWd1bGFyLWl0YWxpY1wiLFxyXG4gICAgXCJyZWd1bGFyXCIsXHJcbiAgICBcImJvbGRcIixcclxuICAgIFwiZXh0cmFib2xkXCJcclxuXVxyXG5cclxuY29uc3QgcG9wcGluc0ZvbnRXZWlnaHRWYWx1ZXMgPSBbXHJcbiAgICBcInJlZ3VsYXJcIixcclxuICAgIFwiYm9sZFwiLFxyXG4gICAgXCJibGFja1wiXHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUd1aWRlU2V0dXAoKSB7XHJcbiAgICBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzKHNpdGVDb2xvclBhbGV0dGUsIFwiQ29sb3JQYWxldHRlV3JhcHBlclwiKTtcclxuICAgIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhvcGVuU2Fuc0ZvbnRXZWlnaHRWYWx1ZXMsIFwiVHlwZUV4YW1wbGVXcmFwcGVyXCIsIFwiT3BlbiBTYW5zIFNhbXBsZVwiLCBcIm9wZW4tc2Fuc1wiKTtcclxuICAgIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhwb3BwaW5zRm9udFdlaWdodFZhbHVlcywgXCJUeXBlRXhhbXBsZVdyYXBwZXJcIiwgXCJQb3BwaW5zIFNhbXBsZVwiLCBcInBvcHBpbnNcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVFeGFtcGxlRWxlbWVudHMoZm9udFdlaWdodFZhbHVlczogQXJyYXk8c3RyaW5nPiwgcGFyZW50RWw6IHN0cmluZywgZXhUZXh0OiBzdHJpbmcsIHRhcmdldEZvbnRGYW1pbHk6IHN0cmluZykge1xyXG5cclxuICAgIGlmICh0YXJnZXRGb250RmFtaWx5ID09IFwib3Blbi1zYW5zXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9udFdlaWdodFZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0ICR0eXBlRXhFbHMgPSAkKFwiPGRpdiBjbGFzcz0nXCIgKyB0YXJnZXRGb250RmFtaWx5ICsgXCItXCIgKyBmb250V2VpZ2h0VmFsdWVzW2luZGV4XSArIFwiJz48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICR0eXBlRXhFbHMudGV4dChleFRleHQpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgcGFyZW50RWwpLmFwcGVuZCgkdHlwZUV4RWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldEZvbnRGYW1pbHkgPT0gXCJwb3BwaW5zXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9udFdlaWdodFZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0ICR0eXBlRXhFbHMgPSAkKFwiPGRpdiBjbGFzcz0nXCIgKyB0YXJnZXRGb250RmFtaWx5ICsgXCItXCIgKyBmb250V2VpZ2h0VmFsdWVzW2luZGV4XSArIFwiJz48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICR0eXBlRXhFbHMudGV4dChleFRleHQpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgcGFyZW50RWwpLmFwcGVuZCgkdHlwZUV4RWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBzdHlsZUd1aWRlU2V0dXAgfSBmcm9tIFwiLi9zdHlsZWd1aWRlXCI7XHJcbmltcG9ydCB7IEVjaG9TbGlkZXIsIFNjcm9sbEV2ZW50RXhhbXBsZSB9IGZyb20gXCIuL292ZXJmbG93X3Bvc2l0aW9uXCI7XHJcblxyXG5FY2hvU2xpZGVyKCk7XHJcblNjcm9sbEV2ZW50RXhhbXBsZSgpO1xyXG5zdHlsZUd1aWRlU2V0dXAoKTtcclxuXHJcbmxldCBFeGFtcGxlRGF0YU9iamVjdCA9IHtcclxuICAgIFwiVGVuYW50X0tleVwiOiBcIjQwXCIsXHJcbiAgICBcIlRpbGVzXCI6IHtcclxuICAgICAgXCJQb3J0YWxJbmZvVGlsZVwiOiB7XHJcbiAgICAgICAgXCJUaWxlVGl0bGVcIjogXCJQb3J0YWwgSW5mb3JtYXRpb25cIixcclxuICAgICAgICBcIlRlbXBsYXRlSURcIjogXCJQb3J0YWxJbmZvcm1hdGlvblRpbGVcIixcclxuICAgICAgICBcIlRlbXBsYXRlUGF0aFwiOiBcIi9UZW1wbGF0ZXMvUG9ydGFsSW5mb3JtYXRpb24udG1wbC5odG1cIixcclxuICAgICAgICBcIkNvbFNwYW5cIjogNSxcclxuICAgICAgICBcIlJvd1NwYW5cIjogNVxyXG4gICAgICB9LFxyXG4gICAgICBcIk1hcFRpbGVcIjoge1xyXG4gICAgICAgIFwiVGlsZVRpdGxlXCI6IFwiUm9hZCBJbmZvcm1hdGlvbiBTeXN0ZW0gTWFwXCIsXHJcbiAgICAgICAgXCJUZW1wbGF0ZUlEXCI6IFwiTWFwVGlsZVwiLFxyXG4gICAgICAgIFwiVGVtcGxhdGVQYXRoXCI6IFwiL1RlbXBsYXRlcy9NYXBUZW1wbGF0ZS50bXBsLmh0bVwiLFxyXG4gICAgICAgIFwiQ29sU3BhblwiOiA3LFxyXG4gICAgICAgIFwiUm93U3BhblwiOiA1XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcIkNvbnRyb2xzXCI6IHtcclxuICAgICAgXCJEYXNoYm9hcmRQb3J0YWxJbmZvXCI6IFwiRGFzaGJvYXJkUG9ydGFsSW5mb1wiLFxyXG4gICAgICBcIkRhc2hib2FyZE1hcFwiOiBcIkRhc2hib2FyZE1hcFwiXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhFeGFtcGxlRGF0YU9iamVjdCk7XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBFeGFtcGxlRGF0YU9iamVjdC5UaWxlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyhFeGFtcGxlRGF0YU9iamVjdC5UaWxlc1trZXldLlRlbXBsYXRlSUQpO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9