exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.decorator.ts":
/*!****************************************************************!*\
  !*** ./src/modules/authentication/authentication.decorator.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CurrentUser = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
  const {
    req
  } = graphql_1.GqlExecutionContext.create(context).getContext();
  return req.user;
});

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b19d2459a0491b51eb2f")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.7a441eb044e55af6d7c2.hot-update.js.map