exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/modules/authentication/authentication.decorator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CurrentUser = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
  const {
    request
  } = graphql_1.GqlExecutionContext.create(context).getContext();
  return request.user;
});

/***/ }),

/***/ "./src/modules/authentication/authentication.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/authentication.resolver.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationResolver = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const authentication_decorator_1 = __webpack_require__(/*! ./authentication.decorator */ "./src/modules/authentication/authentication.decorator.ts");

let AuthenticationResolver = class AuthenticationResolver {
  async profile(user) {}

};

__decorate([(0, graphql_1.Query)(() => models_1.User), __param(0, (0, authentication_decorator_1.CurrentUser)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "profile", null);

AuthenticationResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.User)], AuthenticationResolver);
exports.AuthenticationResolver = AuthenticationResolver;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("59c377804e951f578ea3")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.8066f046c587d7a6cfb6.hot-update.js.map