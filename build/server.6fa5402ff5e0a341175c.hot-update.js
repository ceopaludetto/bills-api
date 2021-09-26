exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/user/user.service.ts":
/*!******************************************!*\
  !*** ./src/modules/user/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["password"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserService = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

__webpack_require__(/*! bcryptjs */ "bcryptjs");

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

  async create(_ref) {
    let {
      password
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    const user = this.userRepository.create(data);
    await this.userRepository.persistAndFlush(user);
    return user;
  }

};
UserService = __decorate([(0, common_1.Injectable)(), __param(0, (0, nestjs_1.InjectRepository)(models_1.User)), __metadata("design:paramtypes", [Object])], UserService);
exports.UserService = UserService;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b310ef550159e29f3f38")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.6fa5402ff5e0a341175c.hot-update.js.map