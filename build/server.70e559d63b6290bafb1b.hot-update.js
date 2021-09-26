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
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bill_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");



let BillModule = class BillModule {};
BillModule = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Module)({
  providers: [_bill_resolver__WEBPACK_IMPORTED_MODULE_1__.BillResolver, _bill_service__WEBPACK_IMPORTED_MODULE_2__.BillService],
  exports: [_bill_service__WEBPACK_IMPORTED_MODULE_2__.BillService]
})], BillModule);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0097c9b13064918cce94")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.70e559d63b6290bafb1b.hot-update.js.map