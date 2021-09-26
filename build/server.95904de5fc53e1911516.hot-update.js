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

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");

const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");

const application_module_1 = __webpack_require__(/*! ./application.module */ "./src/application.module.ts");

async function bootstrap() {
  const app = await core_1.NestFactory.create(application_module_1.ApplicationModule, {
    bufferLogs: true
  });
  const logger = app.get(nestjs_pino_1.Logger);
  app.useLogger(logger);
  app.useGlobalPipes(new common_1.ValidationPipe({
    transform: true
  }));
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
/******/ 		__webpack_require__.h = () => ("32bf3efa09af9cbf12ce")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.95904de5fc53e1911516.hot-update.js.map