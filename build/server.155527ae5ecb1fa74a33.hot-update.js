exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");

const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");

const application_module_1 = __webpack_require__(/*! ./application.module */ "./src/application.module.ts");

async function bootstrap() {
  const app = await core_1.NestFactory.create(application_module_1.ApplicationModule, {
    bufferLogs: true
  });
  const logger = app.get(nestjs_pino_1.Logger);
  app.useLogger(logger);
  app.useGlobalInterceptors();
  const port = "3000" || 0;
  await app.listen(port);
  logger.log(`Application running in ${await app.getUrl()}`);

  if (true) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d9a181a0243064f169ea")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.155527ae5ecb1fa74a33.hot-update.js.map