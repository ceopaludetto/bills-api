exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/strategies/extract.ts":
/*!**********************************************************!*\
  !*** ./src/modules/authentication/strategies/extract.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Extract = void 0;

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

exports.Extract = {
  accessToken: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken,
  refreshToken: request => {
    const header = request.header("Refresh-Token");
    if (!header) return undefined;
    if (!/Bearer/.test(header)) return undefined;
    const [, token] = header.split("");
    if (!token) return undefined;
    return token;
  }
};

/***/ }),

/***/ "./src/modules/authentication/strategies/jwt.strategy.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/strategies/jwt.strategy.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JwtStrategy = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

const authentication_service_1 = __webpack_require__(/*! ../authentication.service */ "./src/modules/authentication/authentication.service.ts");

const extract_1 = __webpack_require__(/*! ./extract */ "./src/modules/authentication/strategies/extract.ts");

let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
  constructor(configService, authenticationService) {
    super({
      jwtFromRequest: extract_1.Extract.accessToken,
      ignoreExpiration: false,
      secretOrKey: configService.get("AUTH_SECRET")
    });

    _defineProperty(this, "authenticationService", void 0);

    this.authenticationService = authenticationService;
  }

  async validate(payload) {
    return this.authenticationService.validatePayload(payload);
  }

};
JwtStrategy = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _b : Object])], JwtStrategy);
exports.JwtStrategy = JwtStrategy;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("770ba1efe9d221b3cd7f")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.5aee342010f2e5b0a99c.hot-update.js.map