exports.id = "server";
exports.ids = null;
exports.modules = {

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
    date = new Date()
  }) {
    return this.billRepository.find({
      $and: [{
        user: userID
      }, {
        createdAt: {
          $gte: (0, date_1.day)(date).startOf("month")
        }
      }]
    });
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6d8fe2be82b4735c3def")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.024d684c3a1b6a004e02.hot-update.js.map