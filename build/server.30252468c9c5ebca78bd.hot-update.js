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

var _a, _b, _c;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GqlAuthenticationGuard = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const user_1 = __webpack_require__(/*! ../user */ "./src/modules/user/index.ts");

const extract_1 = __webpack_require__(/*! ./strategies/extract */ "./src/modules/authentication/strategies/extract.ts");

let GqlAuthenticationGuard = class GqlAuthenticationGuard extends (0, passport_1.AuthGuard)("jwt") {
  constructor(jwtService, configService, userService) {
    super();

    _defineProperty(this, "jwtService", void 0);

    _defineProperty(this, "configService", void 0);

    _defineProperty(this, "userService", void 0);

    this.jwtService = jwtService;
    this.configService = configService;
    this.userService = userService;
  }

  getRequest(context) {
    const {
      req
    } = graphql_1.GqlExecutionContext.create(context).getContext();
    return req;
  }

  async canActivate(context) {
    const request = this.getRequest(context);
    const token = extract_1.Extract.accessToken(request);
    if (!token) return super.canActivate(context);
    let userID;

    try {
      const {
        id
      } = this.jwtService.decode(token);
      userID = id;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "TokenExpiredError") {
          const refreshToken = extract_1.Extract.refreshToken(request);
          if (!refreshToken) return super.canActivate(context);
          if (!userID) return super.canActivate(context);
          const user = await this.userService.findByID(userID);
          if (!user) return super.canActivate(context);

          try {
            const {} = await this.jwtService.verifyAsync(refreshToken, {
              secret: this.configService.get("AUTH_SECRET") + (user === null || user === void 0 ? void 0 : user.password)
            });
          } catch (error) {
            return super.canActivate(context);
          }
        }

        return super.canActivate(context);
      }

      return super.canActivate(context);
    }
  }

};
GqlAuthenticationGuard = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _c : Object])], GqlAuthenticationGuard);
exports.GqlAuthenticationGuard = GqlAuthenticationGuard;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("2d53c95c5bd6a6e90cef")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.30252468c9c5ebca78bd.hot-update.js.map