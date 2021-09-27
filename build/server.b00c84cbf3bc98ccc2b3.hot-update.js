exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/authentication/authentication.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationModule = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

const authentication_resolver_1 = __webpack_require__(/*! ./authentication.resolver */ "./src/modules/authentication/authentication.resolver.ts");

const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts");

const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/authentication/strategies/jwt.strategy.ts");

let AuthenticationModule = class AuthenticationModule {};
AuthenticationModule = __decorate([(0, common_1.Global)(), (0, common_1.Module)({
  imports: [user_1.UserModule, passport_1.PassportModule, jwt_1.JwtModule.registerAsync({
    inject: [config_1.ConfigService],
    useFactory: configService => ({
      secret: configService.get("AUTH_SECRET")
    })
  })],
  providers: [authentication_resolver_1.AuthenticationResolver, authentication_service_1.AuthenticationService, jwt_strategy_1.JwtStrategy],
  exports: [authentication_service_1.AuthenticationService]
})], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1370649874b24d6b7a4c")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b00c84cbf3bc98ccc2b3.hot-update.js.map