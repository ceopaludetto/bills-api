exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/mikro-orm.config.ts":
/*!*********************************!*\
  !*** ./src/mikro-orm.config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getConfiguration": () => (/* binding */ getConfiguration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models */ "./src/models/index.ts");



function getConfiguration(configService) {
  var _configService$get, _configService$get2, _configService$get3, _configService$get4, _configService$get5, _configService$get6;

  return {
    type: (_configService$get = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_TYPE")) !== null && _configService$get !== void 0 ? _configService$get : process.env.DATABASE_TYPE,
    dbName: (_configService$get2 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_NAME")) !== null && _configService$get2 !== void 0 ? _configService$get2 : process.env.DATABASE_NAME,
    host: (_configService$get3 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_HOST")) !== null && _configService$get3 !== void 0 ? _configService$get3 : process.env.DATABASE_HOST,
    port: (_configService$get4 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PORT")) !== null && _configService$get4 !== void 0 ? _configService$get4 : Number(process.env.DATABASE_PORT),
    user: (_configService$get5 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_USER")) !== null && _configService$get5 !== void 0 ? _configService$get5 : process.env.DATABASE_USER,
    password: (_configService$get6 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PASS")) !== null && _configService$get6 !== void 0 ? _configService$get6 : process.env.DATABASE_PASS,
    entities: Object.values(_models__WEBPACK_IMPORTED_MODULE_2__),
    namingStrategy: _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.EntityCaseNamingStrategy,
    migrations: {
      path: path__WEBPACK_IMPORTED_MODULE_1___default().resolve("src/database/migrations"),
      allOrNothing: true,
      transactional: true,
      tableName: "Migrations"
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getConfiguration());

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0c2d0e8a4ad6baedf9e8")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.f7d7fae8edcddf7a34be.hot-update.js.map