exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/modules/authentication/strategies/extract.ts":
/*!**********************************************************!*\
  !*** ./src/modules/authentication/strategies/extract.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Extract = void 0;

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

exports.Extract = {
  accessToken: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
  refreshToken: request => {
    const header = request.header("RefreshToken");
    if (!header) return undefined;
    if (!/Bearer/.test(header)) return undefined;
    const [, token] = header.split(" ");
    if (!token) return undefined;
    return token;
  }
};

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ee9651c0e6e0165e87f8")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.01e1acd0d42838a70a0a.hot-update.js.map