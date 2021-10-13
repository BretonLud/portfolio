/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reveal */ \"./src/reveal.js\");\n/* harmony import */ var _reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reveal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n //get id\n\nvar logo = document.getElementById(\"logo\");\nvar menu = document.getElementById(\"menu\");\nvar mobile = document.getElementById(\"mobile\");\nvar presentation = document.getElementById(\"1\");\nvar skills = document.getElementById(\"2\");\nvar project = document.getElementById(\"3\");\nvar contact = document.getElementById(\"4\");\nvar check = document.getElementById(\"check\");\nvar smallScreen = window.matchMedia(\"(max-width: 768px)\").matches;\nvar screen = window.innerWidth;\n\nif (smallScreen) {\n  check.addEventListener('click', function () {\n    if (check.checked == true) {\n      var reportWindowSize = function reportWindowSize() {\n        var screenObj = window.innerWidth;\n\n        if (screenObj > 768) {\n          menu.style.flexDirection = \"row\";\n          menu.style.opacity = \"1\";\n        } else {\n          check.checked = false;\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"0s\";\n          menu.style.flexDirection = \"column\";\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        }\n      };\n\n      menu.style.opacity = \"1\";\n      menu.style.transitionDuration = \"1s\";\n      logo.style.borderBottomLeftRadius = \"0\";\n      logo.style.borderBottomRightRadius = \"0\";\n      logo.style.transitionDuration = \"1s\";\n      mobile.style.backgroundColor = \"white\";\n      mobile.style.transitionDuration = \"1s\";\n      window.onresize = reportWindowSize;\n    } else if (check.checked == false) {\n      var _reportWindowSize = function _reportWindowSize() {\n        var screenObj = window.innerWidth;\n\n        if (screenObj > 768) {\n          menu.style.opacity = \"1\";\n          menu.style.flexDirection = \"row\";\n        } else {\n          menu.style.flexDirection = \"column\";\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"0s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        }\n      };\n\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      mobile.style.backgroundColor = \"#0D1277\";\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"1s\";\n      window.onresize = _reportWindowSize;\n    }\n\n    presentation.onclick = function () {\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"1s\";\n      check.checked = false;\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      mobile.style.backgroundColor = \"#0D1277\";\n    };\n\n    skills.onclick = function () {\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"1s\";\n      check.checked = false;\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      mobile.style.backgroundColor = \"#0D1277\";\n    };\n\n    project.onclick = function () {\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"1s\";\n      check.checked = false;\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      mobile.style.backgroundColor = \"#0D1277\";\n    };\n\n    contact.onclick = function () {\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"1s\";\n      check.checked = false;\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      mobile.style.backgroundColor = \"#0D1277\";\n    };\n  });\n} else {\n  var reportWindowSize = function reportWindowSize() {\n    var screenObj = window.innerWidth;\n\n    if (screenObj <= 768) {\n      menu.style.opacity = \"0\";\n      menu.style.transitionDuration = \"0s\";\n      logo.style.borderBottomLeftRadius = \"1em\";\n      logo.style.borderBottomRightRadius = \"1em\";\n      logo.style.transitionDuration = \"0s\";\n      mobile.style.backgroundColor = \"#0D1277\";\n      mobile.style.transitionDuration = \"0s\";\n      check.addEventListener('click', function () {\n        if (check.checked == true) {\n          menu.style.background = \"white\";\n          menu.style.flexDirection = \"column\";\n          menu.style.borderBottomLeftRadius = \"1em\";\n          menu.style.borderBottomRightRadius = \"1em\";\n          menu.style.opacity = \"1\";\n          menu.style.transitionDuration = \"1s\";\n          logo.style.borderBottomLeftRadius = \"0\";\n          logo.style.borderBottomRightRadius = \"0\";\n          logo.style.transitionDuration = \"1s\";\n          mobile.style.backgroundColor = \"white\";\n          mobile.style.transitionDuration = \"1s\";\n        } else if (check.checked == false) {\n          menu.style.flexDirection = \"column\";\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"1s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        }\n\n        presentation.onclick = function () {\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"1s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        };\n\n        skills.onclick = function () {\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"1s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        };\n\n        project.onclick = function () {\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"1s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        };\n\n        contact.onclick = function () {\n          menu.style.opacity = \"0\";\n          menu.style.transitionDuration = \"1s\";\n          check.checked = false;\n          logo.style.borderBottomLeftRadius = \"1em\";\n          logo.style.borderBottomRightRadius = \"1em\";\n          mobile.style.backgroundColor = \"#0D1277\";\n        };\n      });\n    } else {\n      check.checked = false;\n      menu.style.flexDirection = \"row\";\n      menu.style.opacity = \"1\";\n    }\n  };\n\n  window.onresize = reportWindowSize;\n}\n\n//# sourceURL=webpack://portfolio/./src/menu.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n // Get the modal\n\nvar modals1 = document.getElementById(\"modals\");\nvar modals2 = document.getElementById(\"modals1\");\nvar modals3 = document.getElementById(\"modals2\"); // Get the button that opens the modal\n\nvar btn = document.getElementById(\"projet1\");\nvar btn2 = document.getElementById(\"projet2\"); //var btn3 = document.getElementById(\"projet3\");\n// Get the <span> element that closes the modal\n\nvar span = document.getElementsByClassName(\"close\")[0];\nvar span2 = document.getElementsByClassName(\"close\")[1]; //var span3 = document.getElementsByClassName(\"close\")[2];\n// When the user clicks on the button, open the modal\n\nbtn.onclick = function () {\n  modals1.style.display = \"block\";\n};\n\nbtn2.onclick = function () {\n  modals2.style.display = \"block\";\n};\n/*btn3.onclick= function() {\n  modals.style.display = \"block\";\n}*/\n// When the user clicks on <span> (x), close the modal\n\n\nspan.onclick = function () {\n  modals1.style.display = \"none\";\n};\n\nspan2.onclick = function () {\n  modals2.style.display = \"none\";\n}; // When the user clicks anywhere outside of the modal, close it\n\n\nwindow.onclick = function (event) {\n  if (event.target == modals1) {\n    modals1.style.display = \"none\";\n  } else if (event.target == modals2) {\n    modals2.style.display = \"none\";\n  } else if (event.target == modals3) {\n    modals3.style.dispaly = \"none\";\n  }\n};\n\n//# sourceURL=webpack://portfolio/./src/modal.js?");

/***/ }),

/***/ "./src/reveal.js":
/*!***********************!*\
  !*** ./src/reveal.js ***!
  \***********************/
/***/ (() => {

eval("//export * from './reveal';\nvar ratio = .4;\nvar options = {\n  root: null,\n  rootMargin: '0px',\n  threshold: ratio\n};\n\nvar handleIntersect = function handleIntersect(entries, observer) {\n  entries.forEach(function (entry) {\n    if (entry.intersectionRatio > ratio) {\n      entry.target.classList.remove('reveal');\n      observer.unobserve(entry.target);\n    }\n  });\n};\n\ndocument.documentElement.classList.add('reveal-loaded');\nwindow.addEventListener('DOMContentLoaded', function () {\n  var observer = new IntersectionObserver(handleIntersect, options);\n  document.querySelectorAll('.reveal').forEach(function (r) {\n    observer.observe(r);\n  });\n});\n\n//# sourceURL=webpack://portfolio/./src/reveal.js?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./css/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;