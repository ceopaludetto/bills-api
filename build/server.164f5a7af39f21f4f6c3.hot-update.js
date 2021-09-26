exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/bill/bill.dto.ts":
/*!**************************************!*\
  !*** ./src/modules/bill/bill.dto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillGetArgs = exports.BillInsertInput = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const enums_1 = __webpack_require__(/*! @/utils/enums */ "./src/utils/enums.ts");

const transforms_1 = __webpack_require__(/*! @/utils/transforms */ "./src/utils/transforms.ts");

let BillInsertInput = class BillInsertInput {
  constructor() {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "type", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], BillInsertInput.prototype, "name", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, transforms_1.ToInt)(), __metadata("design:type", Number)], BillInsertInput.prototype, "value", void 0);

__decorate([(0, graphql_1.Field)(() => enums_1.BillType), (0, class_validator_1.IsString)(), (0, class_validator_1.IsEnum)(enums_1.BillType), __metadata("design:type", typeof (_a = typeof enums_1.BillType !== "undefined" && enums_1.BillType) === "function" ? _a : Object)], BillInsertInput.prototype, "type", void 0);

BillInsertInput = __decorate([(0, graphql_1.InputType)()], BillInsertInput);
exports.BillInsertInput = BillInsertInput;
let BillGetArgs = class BillGetArgs {
  constructor() {
    _defineProperty(this, "date", void 0);
  }

};

__decorate([(0, graphql_1.Field)(() => Date, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDate)(), __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)], BillGetArgs.prototype, "date", void 0);

BillGetArgs = __decorate([(0, graphql_1.ArgsType)()], BillGetArgs);
exports.BillGetArgs = BillGetArgs;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7966685a5f9bddae36f9")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.164f5a7af39f21f4f6c3.hot-update.js.map