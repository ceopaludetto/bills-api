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

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Paginate = exports.PageInfo = exports.Pagination = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

__webpack_require__(/*! class-validator */ "class-validator");

const Relay = __importStar(__webpack_require__(/*! graphql-relay */ "graphql-relay"));

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

    __decorate([(0, graphql_1.Field)(() => graphql_1.Int), __metadata("design:type", Number)], PaginationType.prototype, "total", void 0);

    __decorate([(0, graphql_1.Field)(() => graphql_1.Int), __metadata("design:type", Number)], PaginationType.prototype, "page", void 0);

    __decorate([(0, graphql_1.Field)(() => graphql_1.Int), __metadata("design:type", Number)], PaginationType.prototype, "pages", void 0);

    __decorate([(0, graphql_1.Field)(() => [Model]), __metadata("design:type", Array)], PaginationType.prototype, "items", void 0);

    PaginationType = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Pagination`)], PaginationType);
    return (0, graphql_1.Query)(() => PaginationType)(target, key, descriptor);
  };
}

exports.Pagination = Pagination;
let PageInfo = class PageInfo {
  constructor() {
    _defineProperty(this, "hasNextPage", void 0);

    _defineProperty(this, "hasPreviousPage", void 0);

    _defineProperty(this, "startCursor", void 0);

    _defineProperty(this, "endCursor", void 0);
  }

};

__decorate([(0, graphql_1.Field)(() => Boolean), __metadata("design:type", Boolean)], PageInfo.prototype, "hasNextPage", void 0);

__decorate([(0, graphql_1.Field)(() => Boolean), __metadata("design:type", Boolean)], PageInfo.prototype, "hasPreviousPage", void 0);

__decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_a = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _a : Object)], PageInfo.prototype, "startCursor", void 0);

__decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_b = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _b : Object)], PageInfo.prototype, "endCursor", void 0);

PageInfo = __decorate([(0, graphql_1.ObjectType)()], PageInfo);
exports.PageInfo = PageInfo;

function Paginate(items, count, {
  limit,
  offset
}) {
  return {
    total: count,
    page: Math.floor(offset / limit),
    pages: Math.ceil(count / limit),
    items
  };
}

exports.Paginate = Paginate;

/***/ }),

/***/ "graphql-relay":
/*!********************************!*\
  !*** external "graphql-relay" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-relay");;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f35a595b5246e3c7706f")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.57f2f981c9e701412727.hot-update.js.map