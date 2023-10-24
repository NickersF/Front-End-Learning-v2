/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./animejs_test.exports.ts":
/*!*********************************!*\
  !*** ./animejs_test.exports.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./animejs_test */ "./animejs_test.ts"), exports);


/***/ }),

/***/ "./animejs_test.ts":
/*!*************************!*\
  !*** ./animejs_test.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testAnime = void 0;
function testAnime() {
    let element = document.querySelector(".ajs-box");
    console.log(element);
}
exports.testAnime = testAnime;
jQuery(() => {
    testAnime();
});


/***/ }),

/***/ "./dragdrop.exports.ts":
/*!*****************************!*\
  !*** ./dragdrop.exports.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./dragdrop */ "./dragdrop.ts"), exports);


/***/ }),

/***/ "./dragdrop.ts":
/*!*********************!*\
  !*** ./dragdrop.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class DragDrop {
    static getInstance() {
        if (!this._instance) {
            this._instance = new DragDrop();
        }
        return this._instance;
    }
    setup() {
        this.setDragElement("DraggableElement");
        this.setDropZone("DropZone0");
        this.setDropZone("DropZone1");
        this.setDropZone("DropZone2");
    }
    setDragElement(elementId) {
        const element = document.getElementById(elementId);
        element.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/html", e.target.id);
            e.dataTransfer.effectAllowed = "move";
        });
    }
    setDropZone(elementId) {
        const element = document.getElementById(elementId);
        element.addEventListener("dragover", (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
        });
        element.addEventListener("drop", (e) => {
            e.preventDefault();
            const data = e.dataTransfer.getData("text/html");
            e.target.appendChild(document.getElementById(data));
        });
    }
}
exports["default"] = DragDrop;
jQuery(() => {
    try {
        if (DRAGDROP) {
            DragDrop.getInstance().setup();
        }
    }
    catch (error) {
    }
});


/***/ }),

/***/ "./radialmenu.exports.ts":
/*!*******************************!*\
  !*** ./radialmenu.exports.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./radialmenu */ "./radialmenu.ts"), exports);


/***/ }),

/***/ "./radialmenu.ts":
/*!***********************!*\
  !*** ./radialmenu.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class RadialMenuComponent {
    static getInstance() {
        if (!this._instance) {
            this._instance = new RadialMenuComponent();
        }
        return this._instance;
    }
    setup() {
        console.log("test");
        this.testPathClick();
    }
    testPathClick() {
        $("#TestSVGPath").on("click", (e) => {
            console.log(e);
        });
    }
}
exports["default"] = RadialMenuComponent;
jQuery(() => {
    try {
        if (RADIALMENU) {
            RadialMenuComponent.getInstance().setup();
        }
    }
    catch (error) {
    }
});


/***/ }),

/***/ "./zindex.exports.ts":
/*!***************************!*\
  !*** ./zindex.exports.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./zindex */ "./zindex.ts"), exports);


/***/ }),

/***/ "./zindex.ts":
/*!*******************!*\
  !*** ./zindex.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class ZindexSandbox {
    constructor() {
        this.blueBoxEl = $("#BlueBox");
        this.orangeBoxEl = $("#OrangeBox");
        this.purpleBoxEl = $("#PurpleBox");
        this.blueBoxZindexNumericInput = $("#BlueBoxZindex_InputNumber");
        this.blueBoxOpacityRangeInput = $("#BlueBoxOpacity_Range");
        this.orangeBoxZindexNumericInput = $("#OrangeBoxZindex_InputNumber");
        this.orangeBoxOpacityRangeInput = $("#OrangeBoxOpacity_Range");
        this.purpleBoxZindexNumericInput = $("#PurpleBoxZindex_InputNumber");
        this.purpleBoxOpacityRangeInput = $("#PurpleBoxOpacity_Range");
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ZindexSandbox();
        }
        return this._instance;
    }
    setup() {
        let self = this;
        self.changeZindexEvent(self.blueBoxZindexNumericInput, self.blueBoxEl);
        self.changeOpacityEvent(self.blueBoxOpacityRangeInput, self.blueBoxEl);
        self.changeZindexEvent(self.orangeBoxZindexNumericInput, self.orangeBoxEl);
        self.changeOpacityEvent(self.orangeBoxOpacityRangeInput, self.orangeBoxEl);
        self.changeZindexEvent(self.purpleBoxZindexNumericInput, self.purpleBoxEl);
        self.changeOpacityEvent(self.purpleBoxOpacityRangeInput, self.purpleBoxEl);
    }
    changeZindexEvent(numericInputEl, cssTargetEl) {
        numericInputEl.on("change", (e) => {
            cssTargetEl.css("z-index", $(e.target).val());
        });
    }
    changeOpacityEvent(rangeSliderInputEl, cssTargetEl) {
        rangeSliderInputEl.on("input", (e) => {
            cssTargetEl.css("opacity", $(e.target).val());
        });
    }
}
exports["default"] = ZindexSandbox;
jQuery(() => {
    try {
        if (ZINDEX) {
            ZindexSandbox.getInstance().setup();
        }
    }
    catch (error) {
    }
});


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
__webpack_require__(/*! ./dragdrop.exports */ "./dragdrop.exports.ts");
__webpack_require__(/*! ./zindex.exports */ "./zindex.exports.ts");
__webpack_require__(/*! ./radialmenu.exports */ "./radialmenu.exports.ts");
__webpack_require__(/*! ./animejs_test.exports */ "./animejs_test.exports.ts");
let currentPage = window.location.pathname;
console.log(currentPage);
if (currentPage.includes("animation")) {
    console.log("animation page active");
}

})();

/******/ })()
;
//# sourceMappingURL=main.js.map