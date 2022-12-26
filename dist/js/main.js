/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    testFn() {
        console.log("Page 1 controller loaded.");
        console.log(document.URL);
    }
}
exports["default"] = Page1;
jQuery(() => {
    try {
        if (PAGE_1) {
            Page1.getInstance().testFn();
        }
    }
    catch (error) {
    }
});


/***/ }),

/***/ "./page2.exports.ts":
/*!**************************!*\
  !*** ./page2.exports.ts ***!
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
__exportStar(__webpack_require__(/*! ./page2 */ "./page2.ts"), exports);


/***/ }),

/***/ "./page2.ts":
/*!******************!*\
  !*** ./page2.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Page2 {
    static getInstance() {
        if (!this._instance) {
            this._instance = new Page2();
        }
        return this._instance;
    }
    testFn() {
        console.log("Page 2 controller loaded.");
        console.log(document.URL);
    }
}
exports["default"] = Page2;
jQuery(() => {
    try {
        if (PAGE_2) {
            Page2.getInstance().testFn();
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
__webpack_require__(/*! ./page2.exports */ "./page2.exports.ts");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map