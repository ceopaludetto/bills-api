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
/* harmony import */ var _modules_bill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/bill */ "./src/modules/bill/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










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
    inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService, nestjs_pino__WEBPACK_IMPORTED_MODULE_4__.PinoLogger],
    useFactory: async (configService, logger) => _objectSpread(_objectSpread({}, (0,_mikro_orm_config__WEBPACK_IMPORTED_MODULE_7__.getConfiguration)(configService)), {}, {
      debug:  true ? ["query", "query-params"] : 0,
      logger: message => logger.debug(message)
    })
  }), _modules__WEBPACK_IMPORTED_MODULE_5__.AuthenticationModule, _modules__WEBPACK_IMPORTED_MODULE_5__.UserModule, _modules_bill__WEBPACK_IMPORTED_MODULE_8__.BillModule]
})], ApplicationModule);


/***/ }),

/***/ "./src/modules/bill/bill.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/bill/bill.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillModule": () => (/* binding */ BillModule)
/* harmony export */ });
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bill_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts");


let BillModule = class BillModule {};
BillModule = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
  providers: [_bill_resolver__WEBPACK_IMPORTED_MODULE_1__.BillResolver]
})], BillModule);


/***/ }),

/***/ "./src/modules/bill/bill.resolver.ts":
/*!*******************************************!*\
  !*** ./src/modules/bill/bill.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillResolver": () => (/* binding */ BillResolver)
/* harmony export */ });
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models */ "./src/models/index.ts");


let BillResolver = class BillResolver {
  async saveBill(input) {}

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => _models__WEBPACK_IMPORTED_MODULE_1__.Bill), __param(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Args)("input")), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "saveBill", null);

BillResolver = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)(() => _models__WEBPACK_IMPORTED_MODULE_1__.Bill)], BillResolver);


/***/ }),

/***/ "./src/modules/bill/bill.service.ts":
/*!******************************************!*\
  !*** ./src/modules/bill/bill.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillService": () => (/* binding */ BillService)
/* harmony export */ });
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models */ "./src/models/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let BillService = class BillService {
  constructor(billRepository) {
    _defineProperty(this, "billRepository", void 0);

    this.billRepository = billRepository;
  }

};
BillService = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(), __param(0, (0,_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__.InjectRepository)(_models__WEBPACK_IMPORTED_MODULE_2__.Bill)), __metadata("design:paramtypes", [Object])], BillService);


/***/ }),

/***/ "./src/modules/bill/index.ts":
/*!***********************************!*\
  !*** ./src/modules/bill/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillModule": () => (/* reexport safe */ _bill_module__WEBPACK_IMPORTED_MODULE_0__.BillModule),
/* harmony export */   "BillService": () => (/* reexport safe */ _bill_service__WEBPACK_IMPORTED_MODULE_1__.BillService),
/* harmony export */   "BillResolver": () => (/* reexport safe */ _bill_resolver__WEBPACK_IMPORTED_MODULE_2__.BillResolver)
/* harmony export */ });
/* harmony import */ var _bill_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bill.module */ "./src/modules/bill/bill.module.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");
/* harmony import */ var _bill_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts");




/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("a340168da15352f7c872")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.e57f79291879ef1b5981.hot-update.js.map