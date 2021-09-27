exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/utils/env.schema.ts":
/*!*********************************!*\
  !*** ./src/utils/env.schema.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.envSchema = void 0;

const Joi = __importStar(__webpack_require__(/*! joi */ "joi"));

exports.envSchema = Joi.object({
  DATABASE_TYPE: Joi.string().valid("postgresql", "sqlite", "mysql", "mariadb").default("postgresql"),
  DATABASE_HOST: Joi.string().default("localhost"),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASS: Joi.string().required(),
  GRAPHQL_FILE: Joi.string().default("./src/schema.graphql"),
  AUTH_SECRET: Joi.string().required(),
  AUTH_ACCESS_TOKEN_EXPIRES: Joi.string().required(),
  AUTH_REFRESH_TOKEN_EXPIRES: Joi.string().required()
});

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("10935a2a2ffc3cf59a90")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.2428f4905a077e8de949.hot-update.js.map