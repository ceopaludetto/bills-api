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
    var _a;

    let Edge = class Edge {
      constructor() {
        _defineProperty(this, "node", void 0);

        _defineProperty(this, "cursor", void 0);
      }

    };

    __decorate([(0, graphql_1.Field)(() => Model), __metadata("design:type", Object)], Edge.prototype, "node", void 0);

    __decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_a = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _a : Object)], Edge.prototype, "cursor", void 0);

    Edge = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Edge`)], Edge);
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7638d4a08ec0d45f5051")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.caf6ebee1d2157461569.hot-update.js.map