exports.id = "server";
exports.ids = null;
exports.modules = {

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
/* harmony import */ var _bill_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.dto */ "./src/modules/bill/bill.dto.ts");
/* harmony import */ var _bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;





let BillResolver = class BillResolver {
  constructor(billService) {
    _defineProperty(this, "billService", void 0);

    this.billService = billService;
  }

  async saveBill(input) {
    return this.billService.create(input);
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Mutation)(() => _models__WEBPACK_IMPORTED_MODULE_1__.Bill), __param(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Args)("input")), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof _bill_dto__WEBPACK_IMPORTED_MODULE_2__.BillInsertInput !== "undefined" && _bill_dto__WEBPACK_IMPORTED_MODULE_2__.BillInsertInput) === "function" ? _a : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "saveBill", null);

BillResolver = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_0__.Resolver)(() => _models__WEBPACK_IMPORTED_MODULE_1__.Bill), __metadata("design:paramtypes", [typeof (_b = typeof _bill_service__WEBPACK_IMPORTED_MODULE_3__.BillService !== "undefined" && _bill_service__WEBPACK_IMPORTED_MODULE_3__.BillService) === "function" ? _b : Object])], BillResolver);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("85a4459511c0dec09741")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.0097c9b13064918cce94.hot-update.js.map