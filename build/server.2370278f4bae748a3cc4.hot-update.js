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
    console.log(header);
    if (!header) return undefined;
    if (!/Bearer/.test(header)) return undefined;
    const [, token] = header.split("");
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
/******/ 		__webpack_require__.h = () => ("74c0a4e0d45360b24815")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.2370278f4bae748a3cc4.hot-update.js.map