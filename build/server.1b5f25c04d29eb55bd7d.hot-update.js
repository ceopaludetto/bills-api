exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/user/user.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/user/user.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserModule = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./src/modules/user/user.resolver.ts");

const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");

let UserModule = class UserModule {};
UserModule = __decorate([(0, common_1.Module)({
  imports: [nestjs_1.MikroOrmModule.forFeature([models_1.User])],
  providers: [user_resolver_1.UserResolver, user_service_1.UserService],
  exports: [user_service_1.UserService]
})], UserModule);
exports.UserModule = UserModule;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("c72e675a685fd0e0a5a9")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.1b5f25c04d29eb55bd7d.hot-update.js.map