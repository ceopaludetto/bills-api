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

__webpack_require__(/*! class-transformer */ "class-transformer");

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
    _defineProperty(this, "offset", void 0);

    _defineProperty(this, "limit", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)(), __metadata("design:type", Number)], PaginationArgs.prototype, "offset", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsPositive)(), __metadata("design:type", Number)], PaginationArgs.prototype, "limit", void 0);

PaginationArgs = __decorate([(0, graphql_1.ArgsType)()], PaginationArgs);
exports.PaginationArgs = PaginationArgs;

function paginate(items, count, {
  limit,
  offset
}) {
  return {
    total: count,
    page: offset / limit
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
/******/ 		__webpack_require__.h = () => ("2e3340ed17625def1eac")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.c9adad4438a356dd3489.hot-update.js.map