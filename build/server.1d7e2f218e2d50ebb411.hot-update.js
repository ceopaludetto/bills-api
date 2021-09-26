exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/application.module.ts":
/*!***********************************!*\
  !*** ./src/application.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationModule": () => (/* binding */ ApplicationModule)
/* harmony export */ });
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
/* harmony import */ var nestjs_pino__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nestjs_pino__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/modules */ "./src/modules/index.ts");
/* harmony import */ var _utils_env_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/env.schema */ "./src/utils/env.schema.ts");
/* harmony import */ var _mikro_orm_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mikro-orm.config */ "./src/mikro-orm.config.ts");








let ApplicationModule = class ApplicationModule {};
ApplicationModule = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
  imports: [nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.LoggerModule.forRoot({
    pinoHttp: {
      base: {
        name: "Billz"
      },
      messageKey: "message",
      autoLogging: false,
      level:  true ? "debug" : 0,
      prettyPrint:  true ? {
        translateTime: "dd/mm/yyyy, hh:MM:ss:l",
        ignore: "context,pid,req",
        levelFirst: true
      } : 0
    }
  }), _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: _utils_env_schema__WEBPACK_IMPORTED_MODULE_6__.envSchema
  }), _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__.GraphQLModule.forRootAsync({
    inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService],
    useFactory: async configService => ({
      autoSchemaFile: configService.get("GRAPHQL_FILE"),
      sortSchema: true,
      cors: true,
      context: ({
        req,
        res
      }) => ({
        req,
        res
      })
    })
  }), _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__.MikroOrmModule.forRootAsync({
    inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService],
    useFactory: async configService => (0,_mikro_orm_config__WEBPACK_IMPORTED_MODULE_7__.getConfiguration)(configService)
  }), _modules__WEBPACK_IMPORTED_MODULE_5__.AuthenticationModule, _modules__WEBPACK_IMPORTED_MODULE_5__.UserModule]
})], ApplicationModule);


/***/ }),

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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models */ "./src/models/index.ts");


function getConfiguration(configService) {
  var _configService$get, _configService$get2, _configService$get3, _configService$get4, _configService$get5, _configService$get6;

  return {
    type: (_configService$get = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_TYPE")) !== null && _configService$get !== void 0 ? _configService$get : process.env.DATABASE_TYPE,
    dbName: (_configService$get2 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_NAME")) !== null && _configService$get2 !== void 0 ? _configService$get2 : process.env.DATABASE_NAME,
    host: (_configService$get3 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_HOST")) !== null && _configService$get3 !== void 0 ? _configService$get3 : process.env.DATABASE_HOST,
    port: (_configService$get4 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PORT")) !== null && _configService$get4 !== void 0 ? _configService$get4 : Number(process.env.DATABASE_PORT),
    user: (_configService$get5 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_USER")) !== null && _configService$get5 !== void 0 ? _configService$get5 : process.env.DATABASE_USER,
    password: (_configService$get6 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PASS")) !== null && _configService$get6 !== void 0 ? _configService$get6 : process.env.DATABASE_PASS,
    entities: Object.values(_models__WEBPACK_IMPORTED_MODULE_1__),
    migrations: {
      path: path__WEBPACK_IMPORTED_MODULE_0___default().resolve("src/database/migrations"),
      allOrNothing: true,
      transactional: true,
      tableName: "Migrations"
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getConfiguration());

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5664a42b5c5314e3f0d7")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.1d7e2f218e2d50ebb411.hot-update.js.map