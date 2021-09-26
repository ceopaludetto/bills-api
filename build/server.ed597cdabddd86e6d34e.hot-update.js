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

function Pagination(modelFunc) {
  const Model = modelFunc();
  return (target, key, descriptor) => {
    let PaginationType = class PaginationType {
      constructor() {
        _defineProperty(this, "total", void 0);

        _defineProperty(this, "items", void 0);
      }

    };

    __decorate([(0, graphql_1.Field)(), __metadata("design:type", Number)], PaginationType.prototype, "total", void 0);

    __decorate([(0, graphql_1.Field)(() => [Model]), __metadata("design:type", Array)], PaginationType.prototype, "items", void 0);

    PaginationType = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Pagination`)], PaginationType);
    return (0, graphql_1.Query)(() => PaginationType)(target, key, descriptor);
  };
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
/******/ 		__webpack_require__.h = () => ("a973bd093d8699a63e76")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.ed597cdabddd86e6d34e.hot-update.js.map