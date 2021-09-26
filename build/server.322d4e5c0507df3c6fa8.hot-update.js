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
exports.Pagination = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

function Pagination(Model) {
  let PaginationType = class PaginationType {
    constructor() {
      _defineProperty(this, "total", void 0);

      _defineProperty(this, "items", void 0);
    }

  };

  __decorate([(0, graphql_1.Field)(), __metadata("design:type", Number)], PaginationType.prototype, "total", void 0);

  __decorate([(0, graphql_1.Field)(() => [Model]), __metadata("design:type", Array)], PaginationType.prototype, "items", void 0);

  PaginationType = __decorate([(0, graphql_1.ObjectType)()], PaginationType);
  return PaginationType;
}

exports.Pagination = Pagination;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b18308f232840919ad87")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.322d4e5c0507df3c6fa8.hot-update.js.map