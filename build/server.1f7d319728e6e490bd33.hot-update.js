exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/authentication.resolver.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationResolver = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const authentication_decorator_1 = __webpack_require__(/*! ./authentication.decorator */ "./src/modules/authentication/authentication.decorator.ts");

let AuthenticationResolver = class AuthenticationResolver {
  constructor(authenticationService, userService) {
    _defineProperty(this, "authenticationService", void 0);

    _defineProperty(this, "userService", void 0);

    this.authenticationService = authenticationService;
    this.userService = userService;
  }

  async profile(user) {
    return this.userService.findByID(user.id);
  }

};

__decorate([(0, graphql_1.Query)(() => models_1.User), __param(0, (0, authentication_decorator_1.CurrentUser)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "profile", null);

AuthenticationResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.User), __metadata("design:paramtypes", [Object, Object])], AuthenticationResolver);
exports.AuthenticationResolver = AuthenticationResolver;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("71ed2ab708e5ff281415")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.1f7d319728e6e490bd33.hot-update.js.map