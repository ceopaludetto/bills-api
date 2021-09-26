exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/user/user.service.ts":
/*!******************************************!*\
  !*** ./src/modules/user/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserService = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

let UserService = class UserService {
  constructor(userRepository) {
    _defineProperty(this, "userRepository", void 0);

    this.userRepository = userRepository;
  }

  async findByID(id) {
    return this.userRepository.findOne({
      id
    });
  }

  async create(data) {
    const user = this.userRepository.create(data);
    await this.userRepository.persistAndFlush(user);
    return user;
  }

};
UserService = __decorate([(0, common_1.Injectable)(), __param(0, (0, nestjs_1.InjectRepository)(models_1.User)), __metadata("design:paramtypes", [Object])], UserService);
exports.UserService = UserService;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("525b33081f4e1ee39f3c")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.d6d0905566ee27496b78.hot-update.js.map