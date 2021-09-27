exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/authentication/authentication.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b, _c;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationService = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

let AuthenticationService = class AuthenticationService {
  constructor(userService, jwtService, configService) {
    _defineProperty(this, "userService", void 0);

    _defineProperty(this, "jwtService", void 0);

    _defineProperty(this, "configService", void 0);

    this.userService = userService;
    this.jwtService = jwtService;
    this.configService = configService;
  }

  async genTokens(user) {
    const secret = this.configService.get("AUTH_SECRET");
    const accessExpiration = this.configService.get("AUTH_ACCESS_TOKEN_EXPIRES");
    const refreshExpiration = this.configService.get("AUTH_REFRESH_TOKEN_EXPIRES");
    const accessToken = await this.jwtService.signAsync({
      id: user.id
    }, {
      secret,
      expiresIn: accessExpiration
    });
    const refreshToken = await this.jwtService.signAsync({
      id: user.id
    }, {
      secret: secret + user.password,
      expiresIn: refreshExpiration
    });
    return [accessToken, refreshToken];
  }

  async validatePayload(payload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    return user;
  }

  async login({
    email,
    password
  }, res) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new common_1.BadRequestException("incorrect-password");
    this.setTokensInResponse(res, await this.genTokens(user));
    return user;
  }

  async register(data, res) {
    const user = await this.userService.create(data);
    this.setTokensInResponse(res, await this.genTokens(user));
    return user;
  }

  async findUserByTokenID(id) {
    const user = await this.userService.findByID(id);
    return user;
  }

  setTokensInResponse(res, [accessToken, refreshToken]) {
    res.header("Authorization", accessToken);
    res.header("RefreshToken", refreshToken);
  }

};
AuthenticationService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])], AuthenticationService);
exports.AuthenticationService = AuthenticationService;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("97935328fa39b7840904")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.933d4cf4bd1dfe3ea452.hot-update.js.map