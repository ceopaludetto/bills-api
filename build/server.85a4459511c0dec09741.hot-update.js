exports.id = "server";
exports.ids = null;
exports.modules = {

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
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");
/* harmony import */ var _mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models */ "./src/models/index.ts");
/* harmony import */ var _bill_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");





let BillModule = class BillModule {};
BillModule = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
  imports: [_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__.MikroOrmModule.forFeature([_models__WEBPACK_IMPORTED_MODULE_2__.Bill])],
  providers: [_bill_resolver__WEBPACK_IMPORTED_MODULE_3__.BillResolver, _bill_service__WEBPACK_IMPORTED_MODULE_4__.BillService],
  exports: [_bill_service__WEBPACK_IMPORTED_MODULE_4__.BillService]
})], BillModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("faabcf6780aafbf2c312")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.85a4459511c0dec09741.hot-update.js.map