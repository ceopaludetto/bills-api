exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/utils/plugins/pagination.ts":
/*!*****************************************!*\
  !*** ./src/utils/plugins/pagination.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.paginate = exports.PaginationArgs = exports.Pagination = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

function Pagination(modelFunc) {
  const Model = modelFunc();
  return (target, key, descriptor) => {
    let PaginationType = class PaginationType {
      constructor() {
        _defineProperty(this, "total", void 0);

        _defineProperty(this, "page", void 0);

        _defineProperty(this, "pages", void 0);

        _defineProperty(this, "items", void 0);
      }

    };

    __decorate([(0, graphql_1.Field)(), __metadata("design:type", Number)], PaginationType.prototype, "total", void 0);

    __decorate([(0, graphql_1.Field)(), __metadata("design:type", Number)], PaginationType.prototype, "page", void 0);

    __decorate([(0, graphql_1.Field)(), __metadata("design:type", Number)], PaginationType.prototype, "pages", void 0);

    __decorate([(0, graphql_1.Field)(() => [Model]), __metadata("design:type", Array)], PaginationType.prototype, "items", void 0);

    PaginationType = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Pagination`)], PaginationType);
    return (0, graphql_1.Query)(() => PaginationType)(target, key, descriptor);
  };
}

exports.Pagination = Pagination;
let PaginationArgs = class PaginationArgs {
  constructor() {
    _defineProperty(this, "page", void 0);

    _defineProperty(this, "limit", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)(), (0, class_transformer_1.Transform)(({
  value
}) => value * 10), __metadata("design:type", Number)], PaginationArgs.prototype, "page", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)(), __metadata("design:type", Number)], PaginationArgs.prototype, "limit", void 0);

PaginationArgs = __decorate([(0, graphql_1.ArgsType)()], PaginationArgs);
exports.PaginationArgs = PaginationArgs;

function paginate(items, count, limit, page) {
  return {
    total: count
  };
}

exports.paginate = paginate;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1ea34c030311b5479f02")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.9f214a8ab7f6f9f1590b.hot-update.js.map