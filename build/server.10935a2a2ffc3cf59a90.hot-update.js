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

const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts");

const extract_1 = __webpack_require__(/*! ./strategies/extract */ "./src/modules/authentication/strategies/extract.ts");

let GqlAuthenticationGuard = class GqlAuthenticationGuard extends (0, passport_1.AuthGuard)("jwt") {
  constructor(jwtService, configService, authenticationService) {
    super();

    _defineProperty(this, "jwtService", void 0);

    _defineProperty(this, "configService", void 0);

    _defineProperty(this, "authenticationService", void 0);

    this.jwtService = jwtService;
    this.configService = configService;
    this.authenticationService = authenticationService;
  }

  getRequest(context) {
    const {
      req
    } = graphql_1.GqlExecutionContext.create(context).getContext();
    return req;
  }

  async canActivate(context) {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const {
      req,
      res
    } = ctx.getContext();
    const token = extract_1.Extract.accessToken(req);
    if (!token) return super.canActivate(context);
    let userID;

    try {
      const payload = this.jwtService.decode(token);
      userID = payload.id;
      await this.jwtService.verifyAsync(token);
    } catch (verifyError) {
      if (verifyError instanceof Error) {
        if (verifyError.name === "TokenExpiredError") {
          const refreshToken = extract_1.Extract.refreshToken(req);
          if (!refreshToken) return super.canActivate(context);
          if (!userID) return super.canActivate(context);
          const user = await this.authenticationService.findUserByTokenID(userID);
          if (!user) return super.canActivate(context);

          try {
            await this.jwtService.verifyAsync(refreshToken, {
              secret: this.configService.get("AUTH_SECRET") + (user === null || user === void 0 ? void 0 : user.password)
            });
            const [newAccessToken, newRefreshToken] = await this.authenticationService.genTokens(user);
            this.authenticationService.setTokensInResponse(res, [newAccessToken, newRefreshToken]);
            req.headers.accesstoken = newAccessToken;
            req.headers.refreshtoken = newRefreshToken;
            return super.canActivate(context);
          } catch (error) {
            return super.canActivate(context);
          }
        }

        return super.canActivate(context);
      }

      return super.canActivate(context);
    }

    return super.canActivate(context);
  }

};
GqlAuthenticationGuard = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _c : Object])], GqlAuthenticationGuard);
exports.GqlAuthenticationGuard = GqlAuthenticationGuard;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b00c84cbf3bc98ccc2b3")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.10935a2a2ffc3cf59a90.hot-update.js.map