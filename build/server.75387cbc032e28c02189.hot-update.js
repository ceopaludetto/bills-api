exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.User = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ "bcryptjs"));

const base_model_1 = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");

let User = class User extends base_model_1.BaseModel {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

  async comparePassword(hash) {
    return bcryptjs_1.default.compare(this.password, hash);
  }

};

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)(), __metadata("design:type", String)], User.prototype, "firstName", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)(), __metadata("design:type", String)], User.prototype, "lastName", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  unique: true
}), __metadata("design:type", String)], User.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  hidden: true
}), __metadata("design:type", String)], User.prototype, "password", void 0);

User = __decorate([(0, graphql_1.ObjectType)(), (0, core_1.Entity)({
  tableName: "User"
})], User);
exports.User = User;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("36abd756167c58f5a998")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.75387cbc032e28c02189.hot-update.js.map