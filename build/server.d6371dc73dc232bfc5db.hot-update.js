exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/bill/bill.resolver.ts":
/*!*******************************************!*\
  !*** ./src/modules/bill/bill.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b, _c, _d, _e;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillResolver = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const authentication_1 = __webpack_require__(/*! @/modules/authentication */ "./src/modules/authentication/index.ts");

const bill_dto_1 = __webpack_require__(/*! ./bill.dto */ "./src/modules/bill/bill.dto.ts");

const bill_service_1 = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");

let BillResolver = class BillResolver {
  constructor(billService) {
    _defineProperty(this, "billService", void 0);

    this.billService = billService;
  }

  async getBills(user, args) {
    return this.billService.find(user.id);
  }

  async saveBill(user, input) {
    return this.billService.create(input, user.id);
  }

};

__decorate([(0, common_1.UseGuards)(authentication_1.GqlAuthenticationGuard), (0, graphql_1.Query)(() => [models_1.Bill]), __param(0, (0, authentication_1.CurrentUser)()), __param(1, (0, graphql_1.Args)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object, typeof (_b = typeof bill_dto_1.BillGetArgs !== "undefined" && bill_dto_1.BillGetArgs) === "function" ? _b : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "getBills", null);

__decorate([(0, common_1.UseGuards)(authentication_1.GqlAuthenticationGuard), (0, graphql_1.Mutation)(() => models_1.Bill), __param(0, (0, authentication_1.CurrentUser)()), __param(1, (0, graphql_1.Args)("input")), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_c = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _c : Object, typeof (_d = typeof bill_dto_1.BillInsertInput !== "undefined" && bill_dto_1.BillInsertInput) === "function" ? _d : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "saveBill", null);

BillResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.Bill), __metadata("design:paramtypes", [typeof (_e = typeof bill_service_1.BillService !== "undefined" && bill_service_1.BillService) === "function" ? _e : Object])], BillResolver);
exports.BillResolver = BillResolver;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("cfda0eb16bf5d3ecbb2a")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.d6371dc73dc232bfc5db.hot-update.js.map