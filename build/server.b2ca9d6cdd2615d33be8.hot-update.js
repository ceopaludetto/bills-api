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

var _a, _b, _c, _d;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectionArgs = exports.Pagination = exports.PageInfo = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const Relay = __importStar(__webpack_require__(/*! graphql-relay */ "graphql-relay"));

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
const cache = new Map();

function Pagination(modelFunc) {
  var _a, _b;

  const Model = modelFunc();

  if (cache.has(Model.name)) {
    return (target, key, descriptor) => (0, graphql_1.Query)(() => cache.get(Model.name))(target, key, descriptor);
  }

  let Edge = class Edge {
    constructor() {
      _defineProperty(this, "node", void 0);

      _defineProperty(this, "cursor", void 0);
    }

  };

  __decorate([(0, graphql_1.Field)(() => Model, {
    nullable: true
  }), __metadata("design:type", Object)], Edge.prototype, "node", void 0);

  __decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_a = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _a : Object)], Edge.prototype, "cursor", void 0);

  Edge = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Edge`)], Edge);
  let Connection = class Connection {
    constructor() {
      _defineProperty(this, "edges", void 0);

      _defineProperty(this, "pageInfo", void 0);
    }

  };

  __decorate([(0, graphql_1.Field)(() => [Edge], {
    nullable: "itemsAndList"
  }), __metadata("design:type", Array)], Connection.prototype, "edges", void 0);

  __decorate([(0, graphql_1.Field)(() => PageInfo), __metadata("design:type", typeof (_b = typeof Relay !== "undefined" && Relay.PageInfo) === "function" ? _b : Object)], Connection.prototype, "pageInfo", void 0);

  Connection = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Connection`)], Connection);
  cache.set(Model.name, Connection);
  return (target, key, descriptor) => (0, graphql_1.Query)(() => Connection)(target, key, descriptor);
}

exports.Pagination = Pagination;
let ConnectionArgs = class ConnectionArgs {
  constructor() {
    _defineProperty(this, "before", void 0);

    _defineProperty(this, "after", void 0);

    _defineProperty(this, "first", void 0);

    _defineProperty(this, "last", void 0);
  }

};

__decorate([(0, graphql_1.Field)(() => String, {
  nullable: true
}), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", typeof (_c = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _c : Object)], ConnectionArgs.prototype, "before", void 0);

__decorate([(0, graphql_1.Field)(() => String, {
  nullable: true
}), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", typeof (_d = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _d : Object)], ConnectionArgs.prototype, "after", void 0);

__decorate([(0, graphql_1.Field)(() => graphql_1.Int, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Number)], ConnectionArgs.prototype, "first", void 0);

__decorate([(0, graphql_1.Field)(() => graphql_1.Int, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Number)], ConnectionArgs.prototype, "last", void 0);

ConnectionArgs = __decorate([(0, graphql_1.ArgsType)()], ConnectionArgs);
exports.ConnectionArgs = ConnectionArgs;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b4f630faa60698616b6a")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b2ca9d6cdd2615d33be8.hot-update.js.map