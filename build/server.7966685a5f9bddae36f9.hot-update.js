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
      user: userID,
      createdAt: {
        $gte: (0, date_1.day)(date).startOf("month").toDate(),
        $lte: (0, date_1.day)(date).endOf("month").toDate()
      }
    });
  }

  async balance(userID, {
    date = new Date()
  }) {
    const queryBuilder = this.billRepository.createQueryBuilder();
    const res = queryBuilder.select("sum(bill.value)").where({
      user: userID,
      createdAt: {
        $gte: (0, date_1.day)(date).startOf("month").toDate(),
        $lte: (0, date_1.day)(date).endOf("month").toDate()
      }
    }).getResult();
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

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("a8a9a44b9999a16cac17")
/******/ 	})();
/******/ 	
/******/ }
;
//# sourceMappingURL=server.7966685a5f9bddae36f9.hot-update.js.map