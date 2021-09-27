exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.guard.ts":
/*!************************************************************!*\
  !*** ./src/modules/authentication/authentication.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GqlAuthenticationGuard = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

let GqlAuthenticationGuard = class GqlAuthenticationGuard extends (0, passport_1.AuthGuard)("jwt") {
  constructor(jwtService) {
    super();

    _defineProperty(this, "jwtService", void 0);

    this.jwtService = jwtService;
  }

  getRequest(context) {
    const {
      req
    } = graphql_1.GqlExecutionContext.create(context).getContext();
    return req;
  }

  async canActivate(context) {
    const request = this.getRequest(context);
    const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(request);
    if (!token) return super.canActivate(context);

    try {
      return await super.canActivate(context);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "TokenExpiredError") {
          console.log("expirado");
        }

        return super.canActivate(context);
      }

      return super.canActivate(context);
    }
  }

};
GqlAuthenticationGuard = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])], GqlAuthenticationGuard);
exports.GqlAuthenticationGuard = GqlAuthenticationGuard;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ae65c8bb99e1b23948ed")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b8837c9e4bf3997c2119.hot-update.js.map