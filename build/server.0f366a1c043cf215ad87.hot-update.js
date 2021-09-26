exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/models/bill.model.ts":
/*!**********************************!*\
  !*** ./src/models/bill.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bill": () => (/* binding */ Bill)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/enums */ "./src/utils/enums.ts");
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a;





let Bill = class Bill extends _base_model__WEBPACK_IMPORTED_MODULE_3__.BaseModel {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "type", void 0);
  }

  get isPositive() {
    return this.value >= 0;
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)(), __metadata("design:type", String)], Bill.prototype, "name", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Int), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)(), __metadata("design:type", Number)], Bill.prototype, "value", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => _utils_enums__WEBPACK_IMPORTED_MODULE_2__.BillType), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Enum)(() => _utils_enums__WEBPACK_IMPORTED_MODULE_2__.BillType), __metadata("design:type", typeof (_a = typeof _utils_enums__WEBPACK_IMPORTED_MODULE_2__.BillType !== "undefined" && _utils_enums__WEBPACK_IMPORTED_MODULE_2__.BillType) === "function" ? _a : Object)], Bill.prototype, "type", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => Boolean), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({
  persist: false
}), __metadata("design:type", Object), __metadata("design:paramtypes", [])], Bill.prototype, "isPositive", null);

Bill = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)({
  tableName: "Bill"
})], Bill);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ff2faa731a9b3eb6f77e")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.0f366a1c043cf215ad87.hot-update.js.map