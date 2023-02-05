/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ajax-text.exports.ts":
/*!******************************!*\
  !*** ./ajax-text.exports.ts ***!
  \******************************/
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
__exportStar(__webpack_require__(/*! ./ajax-text */ "./ajax-text.ts"), exports);


/***/ }),

/***/ "./ajax-text.ts":
/*!**********************!*\
  !*** ./ajax-text.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class AjaxTest {
    constructor() {
        this.testString = "";
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new AjaxTest();
        }
        return this._instance;
    }
    setup() {
        console.log(this);
        this.getTextFileContents();
    }
    getTextFileContents() {
        $.ajax({
            url: "ajax_text.txt",
            dataType: "text"
        }).done((data) => {
            console.log(data);
            $("#AjaxResult").text(data);
        });
    }
}
exports["default"] = AjaxTest;
jQuery(() => {
    try {
        if (AJAX_TEXT) {
            AjaxTest.getInstance().setup();
        }
    }
    catch (error) {
    }
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

/***/ "./page1.exports.ts":
/*!**************************!*\
  !*** ./page1.exports.ts ***!
  \**************************/
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
__exportStar(__webpack_require__(/*! ./page1 */ "./page1.ts"), exports);


/***/ }),

/***/ "./page1.ts":
/*!******************!*\
  !*** ./page1.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Page1 {
    static getInstance() {
        if (!this._instance) {
            this._instance = new Page1();
        }
        return this._instance;
    }
    setup() {
        this.page1Click();
    }
    page1Click() {
        const buttonEl = document.getElementById("Page1_Btn");
        console.dir(buttonEl);
        buttonEl.addEventListener("click", (e) => {
            console.log(e);
            console.log(e.currentTarget);
        });
    }
}
exports["default"] = Page1;
jQuery(() => {
    try {
        if (PAGE_1) {
            Page1.getInstance().setup();
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
__webpack_require__(/*! ./page1.exports */ "./page1.exports.ts");
__webpack_require__(/*! ./ajax-text.exports */ "./ajax-text.exports.ts");
__webpack_require__(/*! ./dragdrop.exports */ "./dragdrop.exports.ts");
__webpack_require__(/*! ./zindex.exports */ "./zindex.exports.ts");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map