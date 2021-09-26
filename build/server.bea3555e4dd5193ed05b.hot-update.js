exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/utils/transforms.ts":
/*!*********************************!*\
  !*** ./src/utils/transforms.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Trim": () => (/* binding */ Trim),
/* harmony export */   "Email": () => (/* binding */ Email),
/* harmony export */   "RemoveMask": () => (/* binding */ RemoveMask),
/* harmony export */   "ToInt": () => (/* binding */ ToInt)
/* harmony export */ });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./src/utils/string.ts");


function Trim() {
  return (0,class_transformer__WEBPACK_IMPORTED_MODULE_0__.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? item.trim() : item);
    return typeof value === "string" ? value.trim() : value;
  });
}
function Email() {
  return (0,class_transformer__WEBPACK_IMPORTED_MODULE_0__.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? item.trim().toLowerCase() : value);
    return typeof value === "string" ? value.trim().toLowerCase() : value;
  });
}
function RemoveMask() {
  return (0,class_transformer__WEBPACK_IMPORTED_MODULE_0__.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? (0,_string__WEBPACK_IMPORTED_MODULE_1__.removeMask)(item) : item);
    return typeof value === "string" ? (0,_string__WEBPACK_IMPORTED_MODULE_1__.removeMask)(value) : value;
  });
}
function ToInt() {
  return (0,class_transformer__WEBPACK_IMPORTED_MODULE_0__.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "number" ? Math.trunc(item * 100) : item);
    return typeof value === "number" ? Math.trunc(value * 100) : value;
  });
}

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e57f79291879ef1b5981")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.bea3555e4dd5193ed05b.hot-update.js.map