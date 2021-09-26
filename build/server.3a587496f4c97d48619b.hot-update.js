exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
/* harmony import */ var _mikro_orm_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let User = class User extends _base_model__WEBPACK_IMPORTED_MODULE_3__.BaseModel {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

  async comparePassword(password) {
    return bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, this.password);
  }

};

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)(), __metadata("design:type", String)], User.prototype, "firstName", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)(), __metadata("design:type", String)], User.prototype, "lastName", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({
  unique: true
}), __metadata("design:type", String)], User.prototype, "email", void 0);

__decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Property)({
  hidden: true
}), __metadata("design:type", String)], User.prototype, "password", void 0);

User = __decorate([(0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(), (0,_mikro_orm_core__WEBPACK_IMPORTED_MODULE_0__.Entity)({
  tableName: "User"
})], User);


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("66e49269b47efcd94937")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.3a587496f4c97d48619b.hot-update.js.map