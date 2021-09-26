exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/application.module.ts":
/*!***********************************!*\
  !*** ./src/application.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ApplicationModule = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");

const entities = __importStar(__webpack_require__(/*! @/models */ "./src/models/index.ts"));

const modules_1 = __webpack_require__(/*! @/modules */ "./src/modules/index.ts");

const env_schema_1 = __webpack_require__(/*! @/utils/env.schema */ "./src/utils/env.schema.ts");

let ApplicationModule = class ApplicationModule {};
ApplicationModule = __decorate([(0, common_1.Module)({
  imports: [nestjs_pino_1.LoggerModule.forRoot({
    pinoHttp: {
      base: {
        name: "Billz"
      },
      messageKey: "message",
      autoLogging: false,
      level:  true ? "debug" : 0,
      prettyPrint:  true ? {
        translateTime: "dd/mm/yyyy, hh:MM:ss:l",
        ignore: "context,pid,req",
        levelFirst: true
      } : 0
    }
  }), config_1.ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: env_schema_1.envSchema
  }), graphql_1.GraphQLModule.forRootAsync({
    inject: [config_1.ConfigService],
    useFactory: async configService => ({
      autoSchemaFile: configService.get("GRAPHQL_FILE"),
      sortSchema: true,
      cors: true,
      context: (req, res) => {
        console.log(req, res);
        return {
          req,
          res
        };
      }
    })
  }), nestjs_1.MikroOrmModule.forRootAsync({
    inject: [config_1.ConfigService],
    useFactory: async configService => ({
      type: configService.get("DATABASE_TYPE"),
      dbName: configService.get("DATABASE_NAME"),
      host: configService.get("DATABASE_HOST"),
      port: configService.get("DATABASE_PORT"),
      user: configService.get("DATABASE_USER"),
      password: configService.get("DATABASE_PASS"),
      entities: Object.values(entities)
    })
  }), modules_1.AuthenticationModule, modules_1.UserModule]
})], ApplicationModule);
exports.ApplicationModule = ApplicationModule;

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("fde412ac06274ad01e18")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.5a9fd90e0fc6a47efeb6.hot-update.js.map