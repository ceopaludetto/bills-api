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

var _a, _b, _c, _d, _e;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationResolver = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

const authentication_decorator_1 = __webpack_require__(/*! ./authentication.decorator */ "./src/modules/authentication/authentication.decorator.ts");

const authentication_dto_1 = __webpack_require__(/*! ./authentication.dto */ "./src/modules/authentication/authentication.dto.ts");

const authentication_guard_1 = __webpack_require__(/*! ./authentication.guard */ "./src/modules/authentication/authentication.guard.ts");

const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts");

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

  async login(data, {
    res
  }) {
    return this.authenticationService.login(data, res);
  }

  async register(data, {
    res
  }) {
    return this.authenticationService.register(data, res);
  }

};

__decorate([(0, common_1.UseGuards)(authentication_guard_1.GqlAuthenticationGuard), (0, graphql_1.Query)(() => models_1.User), __param(0, (0, authentication_decorator_1.CurrentUser)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "profile", null);

__decorate([(0, graphql_1.Mutation)(() => models_1.User), __param(0, (0, graphql_1.Args)("input")), __param(1, (0, graphql_1.Context)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_b = typeof authentication_dto_1.AuthenticationLoginInput !== "undefined" && authentication_dto_1.AuthenticationLoginInput) === "function" ? _b : Object, Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "login", null);

__decorate([(0, graphql_1.Mutation)(() => models_1.User), __param(0, (0, graphql_1.Args)("input")), __param(1, (0, graphql_1.Context)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_c = typeof authentication_dto_1.AuthenticationRegisterInput !== "undefined" && authentication_dto_1.AuthenticationRegisterInput) === "function" ? _c : Object, Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "register", null);

AuthenticationResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.User), __metadata("design:paramtypes", [typeof (_d = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _d : Object, typeof (_e = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _e : Object])], AuthenticationResolver);
exports.AuthenticationResolver = AuthenticationResolver;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e0e70af2f095f985db49")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.2b3ef40f94d68d7ff8a6.hot-update.js.map