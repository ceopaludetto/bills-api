exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/models/base.model.ts":
/*!**********************************!*\
  !*** ./src/models/base.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseModel = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const shortid_1 = __webpack_require__(/*! shortid */ "shortid");

let Node = class Node {
  constructor() {
    _defineProperty(this, "id", (0, shortid_1.generate)());
  }

};

__decorate([(0, graphql_1.Field)(() => graphql_1.ID), (0, core_1.PrimaryKey)(), __metadata("design:type", String)], Node.prototype, "id", void 0);

Node = __decorate([(0, core_1.Entity)({
  abstract: true
}), (0, graphql_1.InterfaceType)("Node")], Node);
let BaseModel = class BaseModel extends Node {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "createdAt", new Date());

    _defineProperty(this, "updatedAt", new Date());
  }

};

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  onCreate: () => new Date()
}), __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)], BaseModel.prototype, "createdAt", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  onUpdate: () => new Date()
}), __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)], BaseModel.prototype, "updatedAt", void 0);

BaseModel = __decorate([(0, core_1.Entity)({
  abstract: true
}), (0, graphql_1.ObjectType)({
  isAbstract: true,
  implements: [Node]
})], BaseModel);
exports.BaseModel = BaseModel;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d765ca723e7630c6c5d3")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.4618847f08785c0f41ae.hot-update.js.map