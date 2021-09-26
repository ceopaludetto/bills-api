exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/authentication/authentication.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationRegisterInput = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

let AuthenticationRegisterInput = class AuthenticationRegisterInput {
  constructor() {
    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "firstName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "lastName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "password", void 0);

AuthenticationRegisterInput = __decorate([(0, graphql_1.InputType)()], AuthenticationRegisterInput);
exports.AuthenticationRegisterInput = AuthenticationRegisterInput;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("a686b1ab7632fab2d33f")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.71bb0cce781f6198c189.hot-update.js.map