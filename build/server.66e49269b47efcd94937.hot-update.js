exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/authentication/authentication.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;




let AuthenticationService = class AuthenticationService {
  constructor(userService, jwtService) {
    _defineProperty(this, "userService", void 0);

    _defineProperty(this, "jwtService", void 0);

    this.userService = userService;
    this.jwtService = jwtService;
  }

  async genToken(user) {
    return this.jwtService.signAsync({
      id: user.id,
      email: user.email
    });
  }

  async validatePayload(payload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.NotFoundException("user-not-found");
    if (user.email !== payload.email) throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.UnprocessableEntityException("email-mismatch");
    return user;
  }

  async login({
    email,
    password
  }, res) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.BadRequestException("incorrect-password");
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

};
AuthenticationService = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof _modules_user__WEBPACK_IMPORTED_MODULE_2__.UserService !== "undefined" && _modules_user__WEBPACK_IMPORTED_MODULE_2__.UserService) === "function" ? _a : Object, typeof (_b = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtService !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtService) === "function" ? _b : Object])], AuthenticationService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b8ad4fada955afb05179")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.66e49269b47efcd94937.hot-update.js.map