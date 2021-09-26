exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/authentication.guard.ts":
/*!************************************************************!*\
  !*** ./src/modules/authentication/authentication.guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GqlAuthenticationGuard = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

let GqlAuthenticationGuard = class GqlAuthenticationGuard extends (0, passport_1.AuthGuard)("jwt") {
  getRequest(context) {
    const {
      req
    } = graphql_1.GqlExecutionContext.create(context).getContext();
    return req;
  }

};
GqlAuthenticationGuard = __decorate([(0, common_1.Injectable)()], GqlAuthenticationGuard);
exports.GqlAuthenticationGuard = GqlAuthenticationGuard;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("9dfd94164e38876b9755")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.b19d2459a0491b51eb2f.hot-update.js.map