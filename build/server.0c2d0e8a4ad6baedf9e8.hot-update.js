exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/models/base.model.ts":
/*!**********************************!*\
  !*** ./src/models/base.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModel": () => (/* binding */ BaseModel)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;




let BaseModel = class BaseModel {
  constructor() {
    _defineProperty(this, "id", (0,shortid__WEBPACK_IMPORTED_MODULE_2__.generate)());

    _defineProperty(this, "createdAt", new Date());

    _defineProperty(this, "updatedAt", new Date());
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.PrimaryKey)(), __metadata("design:type", String)], BaseModel.prototype, "id", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({
  onCreate: () => new Date()
}), __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)], BaseModel.prototype, "createdAt", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({
  onUpdate: () => new Date()
}), __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)], BaseModel.prototype, "updatedAt", void 0);

BaseModel = __decorate([(0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)({
  abstract: true
}), (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)({
  isAbstract: true
})], BaseModel);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("49c31799e058122ef6df")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.0c2d0e8a4ad6baedf9e8.hot-update.js.map