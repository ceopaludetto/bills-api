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

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationService = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

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
    const accessToken = await this.jwtService.signAsync({
      id: user.id
    });
    const refreshToken = await this.jwtService.signAsync({
      id: user.id
    }, {
      secret: this.configService.get("AUTH_SECRET") + user.password
    });
  }

  async validatePayload(payload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (user.email !== payload.email) throw new common_1.UnprocessableEntityException("email-mismatch");
    return user;
  }

  async login({
    email,
    password
  }, res) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new common_1.BadRequestException("incorrect-password");
    const token = await this.genToken(user);
    res.header("Authorization", token);
    return user;
  }

  async register(data, res) {
    const user = await this.userService.create(data);
    const token = await this.genToken(user);
    res.header("Authorization", token);
    return user;
  }

  async findUserByTokenID(id) {
    const user = await this.userService.findByID(id);
    return user;
  }

};
AuthenticationService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, Object])], AuthenticationService);
exports.AuthenticationService = AuthenticationService;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("fdafc3a8d7c826b28bb1")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.6cd2725e46499c837cd4.hot-update.js.map