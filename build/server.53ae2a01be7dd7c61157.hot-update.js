exports.id = "server";
exports.ids = null;
exports.modules = {

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

  async create(data) {
    const bill = this.billRepository.create(data);
    await this.billRepository.persistAndFlush(bill);
    return bill;
  }

};
BillService = __decorate([(0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(), __param(0, (0,_mikro_orm_nestjs__WEBPACK_IMPORTED_MODULE_0__.InjectRepository)(_models__WEBPACK_IMPORTED_MODULE_2__.Bill)), __metadata("design:paramtypes", [Object])], BillService);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b5b66dccc4e1c1e31331")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.53ae2a01be7dd7c61157.hot-update.js.map