exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/utils/transforms.ts":
/*!*********************************!*\
  !*** ./src/utils/transforms.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RemoveBearer = exports.ToInt = exports.RemoveMask = exports.Email = exports.Trim = void 0;

const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");

const string_1 = __webpack_require__(/*! ./string */ "./src/utils/string.ts");

function Trim() {
  return (0, class_transformer_1.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? item.trim() : item);
    return typeof value === "string" ? value.trim() : value;
  });
}

exports.Trim = Trim;

function Email() {
  return (0, class_transformer_1.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? item.trim().toLowerCase() : value);
    return typeof value === "string" ? value.trim().toLowerCase() : value;
  });
}

exports.Email = Email;

function RemoveMask() {
  return (0, class_transformer_1.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "string" ? (0, string_1.removeMask)(item) : item);
    return typeof value === "string" ? (0, string_1.removeMask)(value) : value;
  });
}

exports.RemoveMask = RemoveMask;

function ToInt() {
  return (0, class_transformer_1.Transform)(({
    value
  }) => {
    if (Array.isArray(value)) return value.map(item => typeof item === "number" ? Math.trunc(item * 100) : item);
    return typeof value === "number" ? Math.trunc(value * 100) : value;
  });
}

exports.ToInt = ToInt;

function RemoveBearer() {
  return (0, class_transformer_1.Transform)(({
    value
  }) => {
    if (typeof value === "string") {
      value = value.trim();

      if (/\s/g.test(value)) {
        const [, token] = value.split(" ");
        return token;
      }

      return value;
    }

    return value;
  });
}

exports.RemoveBearer = RemoveBearer;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("9cc4a6470ef2032f697c")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.2df15786f35a7fa9d173.hot-update.js.map