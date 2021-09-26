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
exports.AuthenticationCheckTokenArgs = exports.AuthenticationLoginInput = exports.AuthenticationRegisterInput = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const transforms_1 = __webpack_require__(/*! @/utils/transforms */ "./src/utils/transforms.ts");

let AuthenticationRegisterInput = class AuthenticationRegisterInput {
  constructor() {
    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "firstName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "lastName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Email)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "password", void 0);

AuthenticationRegisterInput = __decorate([(0, graphql_1.InputType)()], AuthenticationRegisterInput);
exports.AuthenticationRegisterInput = AuthenticationRegisterInput;
let AuthenticationLoginInput = class AuthenticationLoginInput {
  constructor() {
    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Email)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "password", void 0);

AuthenticationLoginInput = __decorate([(0, graphql_1.InputType)()], AuthenticationLoginInput);
exports.AuthenticationLoginInput = AuthenticationLoginInput;
let AuthenticationCheckTokenArgs = class AuthenticationCheckTokenArgs {
  constructor() {
    _defineProperty(this, "token", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsJWT)(), (0, class_validator_1.IsNotEmpty)(), __metadata("design:type", String)], AuthenticationCheckTokenArgs.prototype, "token", void 0);

AuthenticationCheckTokenArgs = __decorate([(0, graphql_1.ArgsType)()], AuthenticationCheckTokenArgs);
exports.AuthenticationCheckTokenArgs = AuthenticationCheckTokenArgs;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("06569c470bf0535eea45")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.c1faf22de279e77e85f9.hot-update.js.map