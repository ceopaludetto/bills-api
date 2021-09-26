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

var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationService = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

let AuthenticationService = class AuthenticationService {
  constructor(userService) {
    _defineProperty(this, "userService", void 0);

    this.userService = userService;
  }

  async validatePayload(payload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (user.email !== payload.email) throw new common_1.UnprocessableEntityException("email-mismatch");
    return user;
  }

  async register(data) {}

};
AuthenticationService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _a : Object])], AuthenticationService);
exports.AuthenticationService = AuthenticationService;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("71bb0cce781f6198c189")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.632eba6b4b71f4dcd034.hot-update.js.map