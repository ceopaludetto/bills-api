/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/razzle-dev-utils/prettyNodeErrors.js":
/*!***********************************************************!*\
  !*** ./node_modules/razzle-dev-utils/prettyNodeErrors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");
const {
  getTopFrame,
  getStackTraceLines,
  separateMessageFromStack,
} = __webpack_require__(/*! jest-message-util */ "jest-message-util");
const { codeFrameColumns } = __webpack_require__(/*! @babel/code-frame */ "@babel/code-frame");

function pretty(error) {
  const { message, stack } = error;
  const lines = getStackTraceLines(stack);
  const topFrame = getTopFrame(lines);
  const fallback = `${message}${stack}`;

  if (!topFrame) {
    return fallback;
  }

  const { file, line } = topFrame;
  try {
    const result = codeFrameColumns(
      fs.readFileSync(file, 'utf8'),
      { start: { line } },
      { highlightCode: true }
    );
    return `\n${message}\n\n${result}\n${stack}\n`;
  } catch (error) {
    return fallback;
  }
}

function usePrettyErrors(transform) {
  const { prepareStackTrace } = Error;

  Error.prepareStackTrace = (error, trace) => {
    const prepared = prepareStackTrace
      ? separateMessageFromStack(prepareStackTrace(error, trace))
      : error;
    const transformed = transform ? transform(prepared) : prepared;
    return pretty(transformed);
  };
}

// Clean up Webpack's sourcemap namespacing in error stacks
// @see https://github.com/facebook/create-react-app/blob/next/packages/react-dev-utils/formatWebpackMessages.js#L112
const stackTransform = ({ stack = '', ...rest }) => ({
  stack: stack.replace('/build/webpack:', ''),
  ...rest,
});

usePrettyErrors(stackTransform);


/***/ }),

/***/ "./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(() => {
  // Handle hot updates, copied with slight adjustments from webpack/hot/signal.js
  if (true) {
    const log = (type, msg) => console[type](`sswp> ${msg}`); // TODO don't show this when sending signal instead of message


    log('log', 'Handling Hot Module Reloading');

    var checkForUpdate = function checkForUpdate(fromUpdate) {
      module.hot.check().then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log('log', 'Update applied.');else log('warn', 'Cannot find update.');
          return;
        }

        return module.hot.apply({
          ignoreUnaccepted: true,
          // TODO probably restart
          onUnaccepted: function (data) {
            log('warn', '\u0007Ignored an update to unaccepted module ' + data.chain.join(' -> '));
          }
        }).then(function (renewedModules) {
          __webpack_require__(/*! webpack/hot/log-apply-result */ "webpack/hot/log-apply-result")(updatedModules, renewedModules);

          checkForUpdate(true);
        });
      }).catch(function (err) {
        var status = module.hot.status();

        if (['abort', 'fail'].indexOf(status) >= 0) {
          if (process.send) {
            process.send('SSWP_HMR_FAIL');
          }

          log('warn', 'Cannot apply update.');
          log('warn', '' + err.stack || err.message);
          log('error', 'Quitting process - will reload on next file change\u0007\n\u0007\n\u0007');
          process.exit(222);
        } else {
          log('warn', 'Update failed: ' + err.stack || 0);
        }
      });
    };

    process.on('message', function (message) {
      if (message !== 'SSWP_HMR') return;

      if (module.hot.status() !== 'idle') {
        log('warn', 'Got signal but currently in ' + module.hot.status() + ' state.');
        log('warn', 'Need to be in idle state to start hot update.');
        return;
      }

      checkForUpdate();
    });
  } // Tell our plugin we loaded all the code without initially crashing


  if (process.send) {
    process.send('SSWP_LOADED');
  }
})()

/***/ }),

/***/ "./src/application.module.ts":
/*!***********************************!*\
  !*** ./src/application.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ApplicationModule = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");

const modules_1 = __webpack_require__(/*! @/modules */ "./src/modules/index.ts");

const env_schema_1 = __webpack_require__(/*! @/utils/env.schema */ "./src/utils/env.schema.ts");

const mikro_orm_config_1 = __webpack_require__(/*! ./mikro-orm.config */ "./src/mikro-orm.config.ts");

const bill_1 = __webpack_require__(/*! ./modules/bill */ "./src/modules/bill/index.ts");

__webpack_require__(/*! @/utils/register.enums */ "./src/utils/register.enums.ts");

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
      context: ({
        req,
        res
      }) => ({
        req,
        res
      })
    })
  }), nestjs_1.MikroOrmModule.forRootAsync({
    inject: [config_1.ConfigService, nestjs_pino_1.PinoLogger],
    useFactory: async (configService, logger) => _objectSpread(_objectSpread({}, (0, mikro_orm_config_1.getConfiguration)(configService)), {}, {
      debug:  true ? ["query", "query-params"] : 0,
      logger: message => logger.debug(message)
    })
  }), modules_1.AuthenticationModule, modules_1.UserModule, bill_1.BillModule]
})], ApplicationModule);
exports.ApplicationModule = ApplicationModule;

/***/ }),

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

const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));

const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));

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
  app.use((0, cookie_parser_1.default)());
  app.use((0, helmet_1.default)({
    contentSecurityPolicy: false
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

/***/ }),

/***/ "./src/mikro-orm.config.ts":
/*!*********************************!*\
  !*** ./src/mikro-orm.config.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getConfiguration = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));

const entities = __importStar(__webpack_require__(/*! @/models */ "./src/models/index.ts"));

function getConfiguration(configService) {
  var _configService$get, _configService$get2, _configService$get3, _configService$get4, _configService$get5, _configService$get6;

  return {
    type: (_configService$get = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_TYPE")) !== null && _configService$get !== void 0 ? _configService$get : process.env.DATABASE_TYPE,
    dbName: (_configService$get2 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_NAME")) !== null && _configService$get2 !== void 0 ? _configService$get2 : process.env.DATABASE_NAME,
    host: (_configService$get3 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_HOST")) !== null && _configService$get3 !== void 0 ? _configService$get3 : process.env.DATABASE_HOST,
    port: (_configService$get4 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PORT")) !== null && _configService$get4 !== void 0 ? _configService$get4 : Number(process.env.DATABASE_PORT),
    user: (_configService$get5 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_USER")) !== null && _configService$get5 !== void 0 ? _configService$get5 : process.env.DATABASE_USER,
    password: (_configService$get6 = configService === null || configService === void 0 ? void 0 : configService.get("DATABASE_PASS")) !== null && _configService$get6 !== void 0 ? _configService$get6 : process.env.DATABASE_PASS,
    entities: Object.values(entities),
    namingStrategy: core_1.EntityCaseNamingStrategy,
    migrations: {
      path: path_1.default.resolve("src/database/migrations"),
      allOrNothing: true,
      transactional: true,
      tableName: "Migrations"
    }
  };
}

exports.getConfiguration = getConfiguration;
exports.default = getConfiguration();

/***/ }),

/***/ "./src/models/base.model.ts":
/*!**********************************!*\
  !*** ./src/models/base.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BaseModel = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const shortid_1 = __webpack_require__(/*! shortid */ "shortid");

let Node = class Node {
  constructor() {
    _defineProperty(this, "id", (0, shortid_1.generate)());
  }

};

__decorate([(0, graphql_1.Field)(() => graphql_1.ID), (0, core_1.PrimaryKey)(), __metadata("design:type", String)], Node.prototype, "id", void 0);

Node = __decorate([(0, core_1.Entity)({
  abstract: true
}), (0, graphql_1.InterfaceType)("Node")], Node);
let BaseModel = class BaseModel extends Node {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "createdAt", new Date());

    _defineProperty(this, "updatedAt", new Date());
  }

};

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  onCreate: () => new Date()
}), __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)], BaseModel.prototype, "createdAt", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  onUpdate: () => new Date()
}), __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)], BaseModel.prototype, "updatedAt", void 0);

BaseModel = __decorate([(0, core_1.Entity)({
  abstract: true
}), (0, graphql_1.ObjectType)({
  isAbstract: true,
  implements: [Node]
})], BaseModel);
exports.BaseModel = BaseModel;

/***/ }),

/***/ "./src/models/bill.model.ts":
/*!**********************************!*\
  !*** ./src/models/bill.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Bill = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const enums_1 = __webpack_require__(/*! @/utils/enums */ "./src/utils/enums.ts");

const base_model_1 = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");

const user_model_1 = __webpack_require__(/*! ./user.model */ "./src/models/user.model.ts");

let Bill = class Bill extends base_model_1.BaseModel {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "user", void 0);
  }

  get isPositive() {
    return this.value >= 0;
  }

};

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)(), __metadata("design:type", String)], Bill.prototype, "name", void 0);

__decorate([(0, graphql_1.Field)(() => graphql_1.Int), (0, core_1.Property)(), __metadata("design:type", Number)], Bill.prototype, "value", void 0);

__decorate([(0, graphql_1.Field)(() => enums_1.BillType), (0, core_1.Enum)(() => enums_1.BillType), __metadata("design:type", typeof (_a = typeof enums_1.BillType !== "undefined" && enums_1.BillType) === "function" ? _a : Object)], Bill.prototype, "type", void 0);

__decorate([(0, graphql_1.Field)(() => Boolean), (0, core_1.Property)({
  persist: false
}), __metadata("design:type", Object), __metadata("design:paramtypes", [])], Bill.prototype, "isPositive", null);

__decorate([(0, graphql_1.Field)(() => user_model_1.User), (0, core_1.ManyToOne)(() => user_model_1.User), __metadata("design:type", typeof (_b = typeof user_model_1.User !== "undefined" && user_model_1.User) === "function" ? _b : Object)], Bill.prototype, "user", void 0);

Bill = __decorate([(0, graphql_1.ObjectType)(), (0, core_1.Entity)({
  tableName: "Bill"
})], Bill);
exports.Bill = Bill;

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(/*! ./base.model */ "./src/models/base.model.ts"), exports);

__exportStar(__webpack_require__(/*! ./user.model */ "./src/models/user.model.ts"), exports);

__exportStar(__webpack_require__(/*! ./bill.model */ "./src/models/bill.model.ts"), exports);

/***/ }),

/***/ "./src/models/user.model.ts":
/*!**********************************!*\
  !*** ./src/models/user.model.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.User = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ "bcryptjs"));

const base_model_1 = __webpack_require__(/*! ./base.model */ "./src/models/base.model.ts");

const bill_model_1 = __webpack_require__(/*! ./bill.model */ "./src/models/bill.model.ts");

let User = class User extends base_model_1.BaseModel {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);

    _defineProperty(this, "bills", new core_1.Collection(this));
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  async comparePassword(password) {
    return bcryptjs_1.default.compare(password, this.password);
  }

};

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)(), __metadata("design:type", String)], User.prototype, "firstName", void 0);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)(), __metadata("design:type", String)], User.prototype, "lastName", void 0);

__decorate([(0, graphql_1.Field)(() => String), (0, core_1.Property)({
  persist: false
}), __metadata("design:type", Object), __metadata("design:paramtypes", [])], User.prototype, "fullName", null);

__decorate([(0, graphql_1.Field)(), (0, core_1.Property)({
  unique: true
}), __metadata("design:type", String)], User.prototype, "email", void 0);

__decorate([(0, core_1.Property)({
  hidden: true
}), __metadata("design:type", String)], User.prototype, "password", void 0);

__decorate([(0, graphql_1.Field)(() => [bill_model_1.Bill]), (0, core_1.OneToMany)(() => bill_model_1.Bill, bill => bill.user, {
  orphanRemoval: true
}), __metadata("design:type", typeof (_a = typeof core_1.Collection !== "undefined" && core_1.Collection) === "function" ? _a : Object)], User.prototype, "bills", void 0);

User = __decorate([(0, graphql_1.ObjectType)(), (0, core_1.Entity)({
  tableName: "User"
})], User);
exports.User = User;

/***/ }),

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

/***/ }),

/***/ "./src/modules/authentication/authentication.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/authentication/authentication.dto.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationCheckTokenArgs = exports.AuthenticationLoginInput = exports.AuthenticationRegisterInput = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const transforms_1 = __webpack_require__(/*! @/utils/transforms */ "./src/utils/transforms.ts");

let AuthenticationRegisterInput = class AuthenticationRegisterInput {
  constructor() {
    _defineProperty(this, "firstName", void 0);

    _defineProperty(this, "lastName", void 0);

    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "firstName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "lastName", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Email)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationRegisterInput.prototype, "password", void 0);

AuthenticationRegisterInput = __decorate([(0, graphql_1.InputType)()], AuthenticationRegisterInput);
exports.AuthenticationRegisterInput = AuthenticationRegisterInput;
let AuthenticationLoginInput = class AuthenticationLoginInput {
  constructor() {
    _defineProperty(this, "email", void 0);

    _defineProperty(this, "password", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsEmail)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Email)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "email", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], AuthenticationLoginInput.prototype, "password", void 0);

AuthenticationLoginInput = __decorate([(0, graphql_1.InputType)()], AuthenticationLoginInput);
exports.AuthenticationLoginInput = AuthenticationLoginInput;
let AuthenticationCheckTokenArgs = class AuthenticationCheckTokenArgs {
  constructor() {
    _defineProperty(this, "token", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsJWT)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.RemoveBearer)(), __metadata("design:type", String)], AuthenticationCheckTokenArgs.prototype, "token", void 0);

AuthenticationCheckTokenArgs = __decorate([(0, graphql_1.ArgsType)()], AuthenticationCheckTokenArgs);
exports.AuthenticationCheckTokenArgs = AuthenticationCheckTokenArgs;

/***/ }),

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

/***/ }),

/***/ "./src/modules/authentication/authentication.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/authentication/authentication.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationModule = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

const authentication_resolver_1 = __webpack_require__(/*! ./authentication.resolver */ "./src/modules/authentication/authentication.resolver.ts");

const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts");

const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/authentication/strategies/jwt.strategy.ts");

let AuthenticationModule = class AuthenticationModule {};
AuthenticationModule = __decorate([(0, common_1.Global)(), (0, common_1.Module)({
  imports: [user_1.UserModule, passport_1.PassportModule, jwt_1.JwtModule.registerAsync({
    inject: [config_1.ConfigService],
    useFactory: configService => ({
      secret: configService.get("AUTH_SECRET"),
      signOptions: {
        expiresIn: "1h"
      }
    })
  })],
  providers: [authentication_resolver_1.AuthenticationResolver, authentication_service_1.AuthenticationService, jwt_strategy_1.JwtStrategy],
  exports: [authentication_service_1.AuthenticationService]
})], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;

/***/ }),

/***/ "./src/modules/authentication/authentication.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/authentication.resolver.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b, _c, _d, _e, _f;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationResolver = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

const authentication_decorator_1 = __webpack_require__(/*! ./authentication.decorator */ "./src/modules/authentication/authentication.decorator.ts");

const authentication_dto_1 = __webpack_require__(/*! ./authentication.dto */ "./src/modules/authentication/authentication.dto.ts");

const authentication_guard_1 = __webpack_require__(/*! ./authentication.guard */ "./src/modules/authentication/authentication.guard.ts");

const authentication_service_1 = __webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts");

let AuthenticationResolver = class AuthenticationResolver {
  constructor(authenticationService, userService) {
    _defineProperty(this, "authenticationService", void 0);

    _defineProperty(this, "userService", void 0);

    this.authenticationService = authenticationService;
    this.userService = userService;
  }

  async profile(user) {
    return this.userService.findByID(user.id);
  }

  async login(data, {
    res
  }) {
    return this.authenticationService.login(data, res);
  }

  async register(data, {
    res
  }) {
    return this.authenticationService.register(data, res);
  }

  async checkToken({
    token
  }) {
    return this.authenticationService.checkToken(token);
  }

};

__decorate([(0, common_1.UseGuards)(authentication_guard_1.GqlAuthenticationGuard), (0, graphql_1.Query)(() => models_1.User), __param(0, (0, authentication_decorator_1.CurrentUser)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "profile", null);

__decorate([(0, graphql_1.Mutation)(() => models_1.User), __param(0, (0, graphql_1.Args)("input")), __param(1, (0, graphql_1.Context)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_b = typeof authentication_dto_1.AuthenticationLoginInput !== "undefined" && authentication_dto_1.AuthenticationLoginInput) === "function" ? _b : Object, Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "login", null);

__decorate([(0, graphql_1.Mutation)(() => models_1.User), __param(0, (0, graphql_1.Args)("input")), __param(1, (0, graphql_1.Context)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_c = typeof authentication_dto_1.AuthenticationRegisterInput !== "undefined" && authentication_dto_1.AuthenticationRegisterInput) === "function" ? _c : Object, Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "register", null);

__decorate([(0, graphql_1.Mutation)(() => Boolean), __param(0, (0, graphql_1.Args)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_d = typeof authentication_dto_1.AuthenticationCheckTokenArgs !== "undefined" && authentication_dto_1.AuthenticationCheckTokenArgs) === "function" ? _d : Object]), __metadata("design:returntype", Promise)], AuthenticationResolver.prototype, "checkToken", null);

AuthenticationResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.User), __metadata("design:paramtypes", [typeof (_e = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _e : Object, typeof (_f = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _f : Object])], AuthenticationResolver);
exports.AuthenticationResolver = AuthenticationResolver;

/***/ }),

/***/ "./src/modules/authentication/authentication.service.ts":
/*!**************************************************************!*\
  !*** ./src/modules/authentication/authentication.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AuthenticationService = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");

const user_1 = __webpack_require__(/*! @/modules/user */ "./src/modules/user/index.ts");

let AuthenticationService = class AuthenticationService {
  constructor(userService, jwtService) {
    _defineProperty(this, "userService", void 0);

    _defineProperty(this, "jwtService", void 0);

    this.userService = userService;
    this.jwtService = jwtService;
  }

  async genToken(user) {
    return this.jwtService.signAsync({
      id: user.id,
      email: user.email
    });
  }

  async validatePayload(payload) {
    const user = await this.userService.findByID(payload.id);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (user.email !== payload.email) throw new common_1.UnprocessableEntityException("email-mismatch");
    return user;
  }

  async login({
    email,
    password
  }, res) {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new common_1.NotFoundException("user-not-found");
    if (!(await user.comparePassword(password))) throw new common_1.BadRequestException("incorrect-password");
    const token = await this.genToken(user);
    res.header("Authorization", token);
    return user;
  }

  async register(data, res) {
    const user = await this.userService.create(data);
    const token = await this.genToken(user);
    res.header("Authorization", token);
    return user;
  }

  async checkToken(token) {
    try {
      await this.jwtService.verifyAsync(token);
      return true;
    } catch (error) {
      return false;
    }
  }

};
AuthenticationService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof user_1.UserService !== "undefined" && user_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])], AuthenticationService);
exports.AuthenticationService = AuthenticationService;

/***/ }),

/***/ "./src/modules/authentication/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/authentication/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(/*! ./authentication.dto */ "./src/modules/authentication/authentication.dto.ts"), exports);

__exportStar(__webpack_require__(/*! ./authentication.guard */ "./src/modules/authentication/authentication.guard.ts"), exports);

__exportStar(__webpack_require__(/*! ./authentication.module */ "./src/modules/authentication/authentication.module.ts"), exports);

__exportStar(__webpack_require__(/*! ./authentication.service */ "./src/modules/authentication/authentication.service.ts"), exports);

__exportStar(__webpack_require__(/*! ./authentication.resolver */ "./src/modules/authentication/authentication.resolver.ts"), exports);

__exportStar(__webpack_require__(/*! ./authentication.decorator */ "./src/modules/authentication/authentication.decorator.ts"), exports);

/***/ }),

/***/ "./src/modules/authentication/strategies/jwt.strategy.ts":
/*!***************************************************************!*\
  !*** ./src/modules/authentication/strategies/jwt.strategy.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JwtStrategy = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");

const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");

const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");

const authentication_service_1 = __webpack_require__(/*! ../authentication.service */ "./src/modules/authentication/authentication.service.ts");

let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
  constructor(configService, authenticationService) {
    super({
      jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("AUTH_SECRET")
    });

    _defineProperty(this, "authenticationService", void 0);

    this.authenticationService = authenticationService;
  }

  async validate(payload) {
    return this.authenticationService.validatePayload(payload);
  }

};
JwtStrategy = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof authentication_service_1.AuthenticationService !== "undefined" && authentication_service_1.AuthenticationService) === "function" ? _b : Object])], JwtStrategy);
exports.JwtStrategy = JwtStrategy;

/***/ }),

/***/ "./src/modules/bill/bill.dto.ts":
/*!**************************************!*\
  !*** ./src/modules/bill/bill.dto.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillGetArgs = exports.BillInsertInput = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const enums_1 = __webpack_require__(/*! @/utils/enums */ "./src/utils/enums.ts");

const transforms_1 = __webpack_require__(/*! @/utils/transforms */ "./src/utils/transforms.ts");

let BillInsertInput = class BillInsertInput {
  constructor() {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "value", void 0);

    _defineProperty(this, "type", void 0);
  }

};

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, transforms_1.Trim)(), __metadata("design:type", String)], BillInsertInput.prototype, "name", void 0);

__decorate([(0, graphql_1.Field)(), (0, class_validator_1.IsNumber)(), (0, transforms_1.ToInt)(), __metadata("design:type", Number)], BillInsertInput.prototype, "value", void 0);

__decorate([(0, graphql_1.Field)(() => enums_1.BillType), (0, class_validator_1.IsString)(), (0, class_validator_1.IsEnum)(enums_1.BillType), __metadata("design:type", typeof (_a = typeof enums_1.BillType !== "undefined" && enums_1.BillType) === "function" ? _a : Object)], BillInsertInput.prototype, "type", void 0);

BillInsertInput = __decorate([(0, graphql_1.InputType)()], BillInsertInput);
exports.BillInsertInput = BillInsertInput;
let BillGetArgs = class BillGetArgs {
  constructor() {
    _defineProperty(this, "date", void 0);
  }

};

__decorate([(0, graphql_1.Field)(() => Date, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDate)(), __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)], BillGetArgs.prototype, "date", void 0);

BillGetArgs = __decorate([(0, graphql_1.ArgsType)()], BillGetArgs);
exports.BillGetArgs = BillGetArgs;

/***/ }),

/***/ "./src/modules/bill/bill.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/bill/bill.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillModule = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const bill_resolver_1 = __webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts");

const bill_service_1 = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");

let BillModule = class BillModule {};
BillModule = __decorate([(0, common_1.Module)({
  imports: [nestjs_1.MikroOrmModule.forFeature([models_1.Bill])],
  providers: [bill_resolver_1.BillResolver, bill_service_1.BillService],
  exports: [bill_service_1.BillService]
})], BillModule);
exports.BillModule = BillModule;

/***/ }),

/***/ "./src/modules/bill/bill.resolver.ts":
/*!*******************************************!*\
  !*** ./src/modules/bill/bill.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b, _c, _d, _e, _f, _g;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillResolver = void 0;

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const graphql_relay_1 = __webpack_require__(/*! graphql-relay */ "graphql-relay");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const authentication_1 = __webpack_require__(/*! @/modules/authentication */ "./src/modules/authentication/index.ts");

const pagination_1 = __webpack_require__(/*! @/utils/plugins/pagination */ "./src/utils/plugins/pagination.ts");

const bill_dto_1 = __webpack_require__(/*! ./bill.dto */ "./src/modules/bill/bill.dto.ts");

const bill_service_1 = __webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts");

let BillResolver = class BillResolver {
  constructor(billService) {
    _defineProperty(this, "billService", void 0);

    this.billService = billService;
  }

  async getBillsPerMonth(user, args) {
    const {
      limit,
      offset
    } = args.getPaginationParameters();
    const [bills, count] = await this.billService.find(user.id, {
      offset,
      limit
    });
    return (0, graphql_relay_1.connectionFromArraySlice)(bills, args, {
      sliceStart: offset,
      arrayLength: count
    });
  }

  async getBalancePerMonth(user, args) {
    return this.billService.balance(user.id, args);
  }

  async saveBill(user, input) {
    return this.billService.create(input, user.id);
  }

};

__decorate([(0, common_1.UseGuards)(authentication_1.GqlAuthenticationGuard), (0, pagination_1.Pagination)(() => models_1.Bill), __param(0, (0, authentication_1.CurrentUser)()), __param(1, (0, graphql_1.Args)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_a = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _a : Object, typeof (_b = typeof pagination_1.ConnectionArgs !== "undefined" && pagination_1.ConnectionArgs) === "function" ? _b : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "getBillsPerMonth", null);

__decorate([(0, common_1.UseGuards)(authentication_1.GqlAuthenticationGuard), (0, graphql_1.Query)(() => graphql_1.Int), __param(0, (0, authentication_1.CurrentUser)()), __param(1, (0, graphql_1.Args)()), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_c = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _c : Object, typeof (_d = typeof bill_dto_1.BillGetArgs !== "undefined" && bill_dto_1.BillGetArgs) === "function" ? _d : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "getBalancePerMonth", null);

__decorate([(0, common_1.UseGuards)(authentication_1.GqlAuthenticationGuard), (0, graphql_1.Mutation)(() => models_1.Bill), __param(0, (0, authentication_1.CurrentUser)()), __param(1, (0, graphql_1.Args)("input")), __metadata("design:type", Function), __metadata("design:paramtypes", [typeof (_e = typeof models_1.User !== "undefined" && models_1.User) === "function" ? _e : Object, typeof (_f = typeof bill_dto_1.BillInsertInput !== "undefined" && bill_dto_1.BillInsertInput) === "function" ? _f : Object]), __metadata("design:returntype", Promise)], BillResolver.prototype, "saveBill", null);

BillResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.Bill), __metadata("design:paramtypes", [typeof (_g = typeof bill_service_1.BillService !== "undefined" && bill_service_1.BillService) === "function" ? _g : Object])], BillResolver);
exports.BillResolver = BillResolver;

/***/ }),

/***/ "./src/modules/bill/bill.service.ts":
/*!******************************************!*\
  !*** ./src/modules/bill/bill.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillService = void 0;

const core_1 = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const date_1 = __webpack_require__(/*! @/utils/date */ "./src/utils/date.ts");

let BillService = class BillService {
  constructor(billRepository) {
    _defineProperty(this, "billRepository", void 0);

    this.billRepository = billRepository;
  }

  async find(userID, {
    offset,
    limit
  }) {
    return this.billRepository.findAndCount({
      user: userID
    }, {
      offset,
      limit,
      orderBy: {
        createdAt: core_1.QueryOrder.DESC
      }
    });
  }

  async balance(userID, {
    date = new Date()
  }) {
    const queryBuilder = this.billRepository.createQueryBuilder();
    const res = await queryBuilder.select("sum(value) as balance").where({
      user: userID,
      createdAt: {
        $gte: (0, date_1.day)(date).startOf("month").toDate(),
        $lte: (0, date_1.day)(date).endOf("month").toDate()
      }
    }).getKnexQuery();
    return res[0].balance;
  }

  async create(data, userID) {
    const bill = this.billRepository.create(_objectSpread(_objectSpread({}, data), {}, {
      user: userID
    }));
    await this.billRepository.persistAndFlush(bill);
    return bill;
  }

};
BillService = __decorate([(0, common_1.Injectable)(), __param(0, (0, nestjs_1.InjectRepository)(models_1.Bill)), __metadata("design:paramtypes", [Object])], BillService);
exports.BillService = BillService;

/***/ }),

/***/ "./src/modules/bill/index.ts":
/*!***********************************!*\
  !*** ./src/modules/bill/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(/*! ./bill.module */ "./src/modules/bill/bill.module.ts"), exports);

__exportStar(__webpack_require__(/*! ./bill.service */ "./src/modules/bill/bill.service.ts"), exports);

__exportStar(__webpack_require__(/*! ./bill.resolver */ "./src/modules/bill/bill.resolver.ts"), exports);

/***/ }),

/***/ "./src/modules/index.ts":
/*!******************************!*\
  !*** ./src/modules/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(/*! ./authentication */ "./src/modules/authentication/index.ts"), exports);

__exportStar(__webpack_require__(/*! ./user */ "./src/modules/user/index.ts"), exports);

/***/ }),

/***/ "./src/modules/user/index.ts":
/*!***********************************!*\
  !*** ./src/modules/user/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

__exportStar(__webpack_require__(/*! ./user.module */ "./src/modules/user/user.module.ts"), exports);

__exportStar(__webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts"), exports);

__exportStar(__webpack_require__(/*! ./user.resolver */ "./src/modules/user/user.resolver.ts"), exports);

/***/ }),

/***/ "./src/modules/user/user.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/user/user.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserModule = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

const user_resolver_1 = __webpack_require__(/*! ./user.resolver */ "./src/modules/user/user.resolver.ts");

const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/modules/user/user.service.ts");

let UserModule = class UserModule {};
UserModule = __decorate([(0, common_1.Module)({
  imports: [nestjs_1.MikroOrmModule.forFeature([models_1.User])],
  providers: [user_resolver_1.UserResolver, user_service_1.UserService],
  exports: [user_service_1.UserService]
})], UserModule);
exports.UserModule = UserModule;

/***/ }),

/***/ "./src/modules/user/user.resolver.ts":
/*!*******************************************!*\
  !*** ./src/modules/user/user.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserResolver = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

let UserResolver = class UserResolver {};
UserResolver = __decorate([(0, graphql_1.Resolver)(() => models_1.User)], UserResolver);
exports.UserResolver = UserResolver;

/***/ }),

/***/ "./src/modules/user/user.service.ts":
/*!******************************************!*\
  !*** ./src/modules/user/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["password"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UserService = void 0;

const nestjs_1 = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");

const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");

const bcryptjs_1 = __importDefault(__webpack_require__(/*! bcryptjs */ "bcryptjs"));

const models_1 = __webpack_require__(/*! @/models */ "./src/models/index.ts");

let UserService = class UserService {
  constructor(userRepository) {
    _defineProperty(this, "userRepository", void 0);

    this.userRepository = userRepository;
  }

  async findByID(id) {
    return this.userRepository.findOne({
      id
    });
  }

  async findByEmail(email) {
    return this.userRepository.findOne({
      email
    });
  }

  async create(_ref) {
    let {
      password
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    const hash = await bcryptjs_1.default.hash(password, 10);
    const user = this.userRepository.create(_objectSpread({
      password: hash
    }, rest));
    await this.userRepository.persistAndFlush(user);
    return user;
  }

};
UserService = __decorate([(0, common_1.Injectable)(), __param(0, (0, nestjs_1.InjectRepository)(models_1.User)), __metadata("design:paramtypes", [Object])], UserService);
exports.UserService = UserService;

/***/ }),

/***/ "./src/utils/date.ts":
/*!***************************!*\
  !*** ./src/utils/date.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.day = void 0;

const dayjs_1 = __importDefault(__webpack_require__(/*! dayjs */ "dayjs"));

exports.day = dayjs_1.default;

const pt_br_1 = __importDefault(__webpack_require__(/*! dayjs/locale/pt-br */ "dayjs/locale/pt-br"));

dayjs_1.default.locale(pt_br_1.default);

/***/ }),

/***/ "./src/utils/enums.ts":
/*!****************************!*\
  !*** ./src/utils/enums.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BillType = void 0;
var BillType;

(function (BillType) {
  BillType["BANK_SLIP"] = "bank_slip";
  BillType["BANK_INVOICE"] = "bank_invoice";
  BillType["SALARY"] = "salary";
  BillType["TRANSFER"] = "transfer";
  BillType["INVESTMENT"] = "investment";
  BillType["TAX"] = "tax";
})(BillType = exports.BillType || (exports.BillType = {}));

/***/ }),

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
  AUTH_SECRET: Joi.string().required()
});

/***/ }),

/***/ "./src/utils/plugins/pagination.ts":
/*!*****************************************!*\
  !*** ./src/utils/plugins/pagination.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _a, _b, _c, _d;

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectionArgs = exports.Pagination = exports.PageInfo = void 0;

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");

const Relay = __importStar(__webpack_require__(/*! graphql-relay */ "graphql-relay"));

let PageInfo = class PageInfo {
  constructor() {
    _defineProperty(this, "hasNextPage", void 0);

    _defineProperty(this, "hasPreviousPage", void 0);

    _defineProperty(this, "startCursor", void 0);

    _defineProperty(this, "endCursor", void 0);
  }

};

__decorate([(0, graphql_1.Field)(() => Boolean), __metadata("design:type", Boolean)], PageInfo.prototype, "hasNextPage", void 0);

__decorate([(0, graphql_1.Field)(() => Boolean), __metadata("design:type", Boolean)], PageInfo.prototype, "hasPreviousPage", void 0);

__decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_a = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _a : Object)], PageInfo.prototype, "startCursor", void 0);

__decorate([(0, graphql_1.Field)(() => String, {
  nullable: true
}), __metadata("design:type", typeof (_b = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _b : Object)], PageInfo.prototype, "endCursor", void 0);

PageInfo = __decorate([(0, graphql_1.ObjectType)()], PageInfo);
exports.PageInfo = PageInfo;
const cache = new Map();

function Pagination(modelFunc) {
  var _a, _b;

  const Model = modelFunc();

  if (cache.has(Model.name)) {
    return (target, key, descriptor) => (0, graphql_1.Query)(() => cache.get(Model.name))(target, key, descriptor);
  }

  let Edge = class Edge {
    constructor() {
      _defineProperty(this, "node", void 0);

      _defineProperty(this, "cursor", void 0);
    }

  };

  __decorate([(0, graphql_1.Field)(() => Model), __metadata("design:type", Object)], Edge.prototype, "node", void 0);

  __decorate([(0, graphql_1.Field)(() => String), __metadata("design:type", typeof (_a = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _a : Object)], Edge.prototype, "cursor", void 0);

  Edge = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Edge`)], Edge);
  let Connection = class Connection {
    constructor() {
      _defineProperty(this, "edges", void 0);

      _defineProperty(this, "pageInfo", void 0);
    }

  };

  __decorate([(0, graphql_1.Field)(() => [Edge]), __metadata("design:type", Array)], Connection.prototype, "edges", void 0);

  __decorate([(0, graphql_1.Field)(() => PageInfo), __metadata("design:type", typeof (_b = typeof Relay !== "undefined" && Relay.PageInfo) === "function" ? _b : Object)], Connection.prototype, "pageInfo", void 0);

  Connection = __decorate([(0, graphql_1.ObjectType)(`${Model.name}Connection`)], Connection);
  cache.set(Model.name, Connection);
  return (target, key, descriptor) => (0, graphql_1.Query)(() => Connection)(target, key, descriptor);
}

exports.Pagination = Pagination;
let ConnectionArgs = class ConnectionArgs {
  constructor() {
    _defineProperty(this, "before", void 0);

    _defineProperty(this, "after", void 0);

    _defineProperty(this, "first", void 0);

    _defineProperty(this, "last", void 0);
  }

  getPaginationParameters() {
    var _this$first;

    return {
      limit: (_this$first = this === null || this === void 0 ? void 0 : this.first) !== null && _this$first !== void 0 ? _this$first : 10,
      offset: this !== null && this !== void 0 && this.after ? parseInt(Relay.fromGlobalId(this.after).id, 10) + 1 : 0
    };
  }

};

__decorate([(0, graphql_1.Field)(() => String, {
  nullable: true
}), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", typeof (_c = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _c : Object)], ConnectionArgs.prototype, "before", void 0);

__decorate([(0, graphql_1.Field)(() => String, {
  nullable: true
}), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), __metadata("design:type", typeof (_d = typeof Relay !== "undefined" && Relay.ConnectionCursor) === "function" ? _d : Object)], ConnectionArgs.prototype, "after", void 0);

__decorate([(0, graphql_1.Field)(() => graphql_1.Int, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Number)], ConnectionArgs.prototype, "first", void 0);

__decorate([(0, graphql_1.Field)(() => graphql_1.Int, {
  nullable: true
}), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsInt)(), __metadata("design:type", Number)], ConnectionArgs.prototype, "last", void 0);

ConnectionArgs = __decorate([(0, graphql_1.ArgsType)()], ConnectionArgs);
exports.ConnectionArgs = ConnectionArgs;

/***/ }),

/***/ "./src/utils/register.enums.ts":
/*!*************************************!*\
  !*** ./src/utils/register.enums.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const graphql_1 = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");

const enums = __importStar(__webpack_require__(/*! ./enums */ "./src/utils/enums.ts"));

for (const [key, value] of Object.entries(enums)) {
  (0, graphql_1.registerEnumType)(value, {
    name: key
  });
}

/***/ }),

/***/ "./src/utils/string.ts":
/*!*****************************!*\
  !*** ./src/utils/string.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeMask = void 0;

function removeMask(value) {
  return value.replace(/[^\d]+/g, "");
}

exports.removeMask = removeMask;

/***/ }),

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

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
	logLevel = level;
};

module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	} else {
		return stack;
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!**********************************************!*\
  !*** ./node_modules/webpack/hot/poll.js?300 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __resourceQuery = "?300";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 0;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function (updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function (err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + log.formatError(err));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log("warning", "[HMR] Update failed: " + log.formatError(err));
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}


/***/ }),

/***/ "@babel/code-frame":
/*!************************************!*\
  !*** external "@babel/code-frame" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/code-frame");;

/***/ }),

/***/ "@mikro-orm/core":
/*!**********************************!*\
  !*** external "@mikro-orm/core" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mikro-orm/core");;

/***/ }),

/***/ "@mikro-orm/nestjs":
/*!************************************!*\
  !*** external "@mikro-orm/nestjs" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mikro-orm/nestjs");;

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/common");;

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/config");;

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/core");;

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/graphql");;

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/jwt");;

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@nestjs/passport");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-transformer");;

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("class-validator");;

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");;

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");;

/***/ }),

/***/ "dayjs/locale/pt-br":
/*!*************************************!*\
  !*** external "dayjs/locale/pt-br" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dayjs/locale/pt-br");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "graphql-relay":
/*!********************************!*\
  !*** external "graphql-relay" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-relay");;

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");;

/***/ }),

/***/ "jest-message-util":
/*!************************************!*\
  !*** external "jest-message-util" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("jest-message-util");;

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("joi");;

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("nestjs-pino");;

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("passport-jwt");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("shortid");;

/***/ }),

/***/ "webpack/hot/log-apply-result":
/*!***********************************************!*\
  !*** external "webpack/hot/log-apply-result" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack/hot/log-apply-result");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("server." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6356362ccf4fb2607762")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js!./node_modules/razzle-start-server-webpack-plugin/dist/monitor-loader.js");
/******/ 	__webpack_require__("./node_modules/razzle-dev-utils/prettyNodeErrors.js");
/******/ 	__webpack_require__("./node_modules/webpack/hot/poll.js?300");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map