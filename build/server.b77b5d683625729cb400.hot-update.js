exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/strategies/jwt.strategy.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/strategies/jwt.strategy.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JwtStrategy = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

const authentication_service_1 = __webpack_require__(/*! ../authentication.service */ "./src/modules/authentication/authentication.service.ts");

let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
  constructor(configService, authenticationService) {
    super({
      jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
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
JwtStrategy = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [Object, typeof (_a = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _a : Object])], JwtStrategy);
exports.JwtStrategy = JwtStrategy;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0826a254cdb2b78b814e")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b77b5d683625729cb400.hot-update.js.map