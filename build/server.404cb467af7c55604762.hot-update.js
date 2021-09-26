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

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsEmail)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), (0,_utils_transforms__WEBPACK_IMPORTED_MODULE_2__.Email)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "email", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Field)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsString)(), (0,class_validator__WEBPACK_IMPORTED_MODULE_1__.IsNotEmpty)(), (0,_utils_transforms__WEBPACK_IMPORTED_MODULE_2__.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "password", void 0);

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


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("635fe2153c080b0934bd")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.404cb467af7c55604762.hot-update.js.map