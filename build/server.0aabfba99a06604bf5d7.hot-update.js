exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/authentication/authentication.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationRegisterInput": () => (/* binding */ AuthenticationRegisterInput),
/* harmony export */   "AuthenticationLoginInput": () => (/* binding */ AuthenticationLoginInput)
/* harmony export */ });
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_transforms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/transforms */ "./src/utils/transforms.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let AuthenticationRegisterInput = class AuthenticationRegisterInput {
  constructor() {
    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "firstName", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "lastName", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsEmail)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "email", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "password", void 0);

AuthenticationRegisterInput = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.InputType)()], AuthenticationRegisterInput);

let AuthenticationLoginInput = class AuthenticationLoginInput {
  constructor() {
    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsEmail)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), (0,_utils_transforms__WEBPACK_IMPORTED_MODULE_2__.Email)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "email", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), (0,_utils_transforms__WEBPACK_IMPORTED_MODULE_2__.Trim)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "password", void 0);

AuthenticationLoginInput = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.InputType)()], AuthenticationLoginInput);


/***/ }),

/***/ "./src/utils/string.ts":
/*!*****************************!*\
  !*** ./src/utils/string.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeMask": () => (/* binding */ removeMask)
/* harmony export */ });
function removeMask(value) {
  return value.replace(/[^\d]+/g, "");
}

/***/ }),

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
/* harmony export */   "RemoveMask": () => (/* binding */ RemoveMask)
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

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-transformer");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("9f6b5d2e4e137f42153e")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.0aabfba99a06604bf5d7.hot-update.js.map