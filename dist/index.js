(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("vue")) : factory(root["Vue"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = [];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(4);
module.exports = hasOwn.toString;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var class2type = __webpack_require__(2);
module.exports = class2type.hasOwnProperty;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iosselect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iosselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iosselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IosSelectDateModel__ = __webpack_require__(21);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Utils = __webpack_require__(9);
var VueDateSelect = /** @class */ (function (_super) {
    __extends(VueDateSelect, _super);
    function VueDateSelect() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 设置每月对应的天数
         */
        _this_1.monthDays = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31
        };
        //配置项的copy副本
        _this_1.tempOption = {
            config: {},
            data: {
                currentDate: "",
                beginDate: "",
                endDate: ""
            }
        };
        //控制弹框的显示
        _this_1.visible = _this_1.value;
        /**
         * iosselect默认配置
         */
        _this_1.defaultConf = {
            container: 'container',
            title: '',
            itemHeight: 40,
            itemShowCount: 4,
            level: 2,
            oneLevelId: 0,
            twoLevelId: 0,
            threeLevelId: 0,
            callback: _this_1.selectDateOk
        };
        return _this_1;
    }
    //监听value值的变更
    VueDateSelect.prototype.watchValueChange = function (newVal) {
        this.visible = newVal;
    };
    Object.defineProperty(VueDateSelect.prototype, "dateSelectOption", {
        /**
         * 计算属性，计算option的变化
         * @return {string} 返回空字符串
         */
        get: function () {
            if (this.tempOption.data.beginDate != this.option.data.beginDate
                || this.tempOption.data.endDate != this.option.data.endDate
                || this.tempOption.data.currentDate != this.option.data.currentDate
                || this.tempOption.config.level != this.option.config.level) {
                this.tempOption = Object.assign({}, this.option);
                this.initialIosSelectDate(Object.assign({}, this.option));
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VueDateSelect.prototype, "dateSelectContainer", {
        /**
         * iosselect组件容器
         * @return {string} 返回容器类名
         */
        get: function () {
            // @ts-ignore
            return this.defaultConf.container;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取某个时间所在的月份总共有多少天
     * @param {Date} date 日期对象
     * @return {number} 返回获取到的该月总天数
     */
    VueDateSelect.prototype.getMonthTotalDays = function (date) {
        var month = date.getMonth();
        var days = 0;
        //判断闰年跟平年
        if ((month + 1) == 2 && Utils.isLeapYear(date)) {
            this.monthDays[2] = 29;
        }
        else {
            this.monthDays[2] = 28;
        }
        days = this.monthDays[month + 1];
        return days;
    };
    /**
     * 初始化年数据
     * @param {IosSelectDateModel} dateModel 初始化日期对象
     * @return {Function} 返回选中年后的回调函数
     */
    VueDateSelect.prototype.yearData = function (dateModel) {
        return function (callback) {
            var yearData = [];
            var diffYears = Utils.diffDate("y", dateModel.beginDate, dateModel.endDate);
            var currentYear = dateModel.beginDate.getFullYear();
            for (var i = 0; i <= diffYears; i++) {
                var tempYear = currentYear;
                tempYear += i;
                yearData.push({
                    id: tempYear,
                    value: tempYear + "\u5E74"
                });
            }
            callback(yearData);
        };
    };
    /**
     * 初始化月份数据
     * @param {IosSelectDateModel} dateModel 初始化日期对象
     * @return {Function} 返回选中月后的回调函数
     */
    VueDateSelect.prototype.monthData = function (dateModel) {
        return function (year, callback) {
            var monthData = [];
            var cycleBeginIndex = 1;
            var cycleEndIndex = 12;
            if (Utils.dateFormat("yyyy", dateModel.beginDate) == year.toString()) {
                cycleBeginIndex = dateModel.beginDate.getMonth() + 1;
            }
            else if (Utils.dateFormat("yyyy", dateModel.endDate) == year.toString()) {
                cycleEndIndex = dateModel.endDate.getMonth() + 1;
            }
            for (var i = cycleBeginIndex; i <= cycleEndIndex; i++) {
                monthData.push({
                    id: i,
                    value: i + "\u6708"
                });
            }
            callback(monthData);
        };
    };
    /**
     * 初始化天数据
     * @param {IosSelectDateModel} dateModel 初始化日期对象
     * @return {Function} 返回选中天后的回调函数
     */
    VueDateSelect.prototype.dateData = function (dateModel) {
        var _this = this;
        return function (year, month, callback) {
            var date = new Date(year, month - 1, 1);
            var dayData = [];
            var days = _this.getMonthTotalDays(date);
            var cycleBeginIndex = 1;
            var cycleEndIndex = days;
            if (Utils.dateFormat("yyyy-MM", dateModel.beginDate) == Utils.dateFormat("yyyy-MM", date)) {
                cycleBeginIndex = dateModel.beginDate.getDate();
            }
            else if (Utils.dateFormat("yyyy-MM", dateModel.endDate) == Utils.dateFormat("yyyy-MM", date)) {
                cycleEndIndex = dateModel.endDate.getDate();
            }
            for (var i = cycleBeginIndex; i <= cycleEndIndex; i++) {
                dayData.push({
                    id: i,
                    value: i + "\u65E5"
                });
            }
            callback(dayData);
        };
    };
    /**
     * 初始化iosselectdate
     * @param {IosSelectDateModel} dateModel 初始组件数据实体
     * @param {any} config 初始化组件配置
     * @return {void} 无返回值
     */
    VueDateSelect.prototype.renderTpl = function (dateModel, config) {
        if (config.level == 2) { //两级，只有年、月
            config.relation = [1];
            var iosSelect = new __WEBPACK_IMPORTED_MODULE_2_iosselect___default.a(2, [
                this.yearData(dateModel),
                this.monthData(dateModel)
            ], config);
        }
        if (config.level == 3) { //三级，有年、月、日
            config.relation = [1, 1];
            var iosSelect = new __WEBPACK_IMPORTED_MODULE_2_iosselect___default.a(3, [
                this.yearData(dateModel),
                this.monthData(dateModel),
                this.dateData(dateModel)
            ], config);
        }
    };
    /**
     * 初始化iosselct组件基础数据
     * @param {any} option 组件配置项
     * @return {void} 无返回值
     */
    VueDateSelect.prototype.initialIosSelectDate = function (option) {
        var data = option.data, config = option.config;
        if (data.beginDate && data.endDate && data.currentDate) {
            var dateModel = new __WEBPACK_IMPORTED_MODULE_4__IosSelectDateModel__["a" /* IosSelectDateModel */]();
            dateModel.beginDate = Utils.createCorrectDate(data.beginDate);
            dateModel.endDate = Utils.createCorrectDate(data.endDate);
            dateModel.currentDate = Utils.createCorrectDate(data.currentDate);
            config = config || {};
            //先进行config跟defaultConf的合并操作
            this.defaultConf = Object.assign({}, this.defaultConf, config);
            if (this.defaultConf.level == 3) { //三级，设置年、月、日默认值
                this.defaultConf.oneLevelId = dateModel.currentDate.getFullYear();
                this.defaultConf.twoLevelId = Number(Utils.dateFormat("M", dateModel.currentDate));
                this.defaultConf.threeLevelId = Number(Utils.dateFormat("d", dateModel.currentDate));
            }
            if (this.defaultConf.level == 2) { //二级，设置年、月默认值
                this.defaultConf.oneLevelId = dateModel.currentDate.getFullYear();
                this.defaultConf.twoLevelId = Number(Utils.dateFormat("M", dateModel.currentDate));
            }
            this.renderTpl(dateModel, this.defaultConf);
        }
    };
    /**
     * 选择时间以后触发的事件，iosselect最多支持6级，todo:该组件后续优化让支持6级的时间选择
     * @param yearData 选择的年数据
     * @param monthData 选择的月数据
     * @param dayData 选择的天数据
     * @param hourDay 选择的小时数据
     * @param minuteData 选择的分数据
     * @param secondData 选择的秒数据
     * @return {void} 无返回值
     */
    VueDateSelect.prototype.selectDateOk = function (yearData, monthData, dayData, hourDay, minuteData, secondData) {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__["a" /* Prop */])(),
        __metadata("design:type", Object)
    ], VueDateSelect.prototype, "option", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__["a" /* Prop */])(),
        __metadata("design:type", Boolean)
    ], VueDateSelect.prototype, "value", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__["b" /* Watch */])("value"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], VueDateSelect.prototype, "watchValueChange", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__["c" /* Emit */])("on-ok"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], VueDateSelect.prototype, "selectDateOk", null);
    VueDateSelect = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vue_property_decorator__["d" /* Component */])({
            template: __webpack_require__(15)
        })
        /**
         * 滚轮日期选中组件
         * @class
         * @extends {Vue}
         */
    ], VueDateSelect);
    return VueDateSelect;
}(__WEBPACK_IMPORTED_MODULE_1_vue___default.a));
/* harmony default export */ __webpack_exports__["a"] = (VueDateSelect);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_index__["a" /* default */]);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "div,\nul,\nli {\n  margin: 0;\n  padding: 0;\n}\nul,\nli {\n  list-style: none outside none;\n}\n/* layer begin */\n.ios-select-widget-box.olay {\n  position: fixed;\n  z-index: 500;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.7);\n}\n.ios-select-widget-box.olay > div {\n  position: fixed;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  background-color: #f2f2f2;\n  bottom: 0;\n  left: 0;\n  visibility: visible;\n}\n.ios-select-widget-box header.iosselect-header {\n  height: 44px;\n  line-height: 44px;\n  background-color: #59bbff;\n  width: 100%;\n  z-index: 9999;\n  text-align: center;\n}\n.ios-select-widget-box header.iosselect-header a {\n  font-size: 16px;\n  color: #fff;\n  text-decoration: none;\n}\n.ios-select-widget-box header.iosselect-header a.close {\n  float: left;\n  padding-left: 15px;\n  height: 44px;\n  line-height: 44px;\n}\n.ios-select-widget-box header.iosselect-header a.sure {\n  float: right;\n  padding-right: 15px;\n  height: 44px;\n  line-height: 44px;\n}\n.ios-select-widget-box {\n  padding-top: 44px;\n}\n.ios-select-widget-box .one-level-contain,\n.ios-select-widget-box .two-level-contain,\n.ios-select-widget-box .three-level-contain,\n.ios-select-widget-box .four-level-contain,\n.ios-select-widget-box .five-level-contain {\n  height: 100%;\n  overflow: hidden;\n}\n.ios-select-widget-box .iosselect-box {\n  overflow: hidden;\n}\n.ios-select-widget-box .iosselect-box > div {\n  display: block;\n  float: left;\n}\n.ios-select-widget-box ul {\n  background-color: #fff;\n}\n.ios-select-widget-box ul li {\n  font-size: 13px;\n  height: 35px;\n  line-height: 35px;\n  background-color: #fff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  color: #111;\n  opacity: .3;\n}\n.ios-select-widget-box ul li.at {\n  font-size: 16px;\n  opacity: 1;\n}\n.ios-select-widget-box ul li.side1 {\n  font-size: 15px;\n  opacity: .7;\n}\n.ios-select-widget-box ul li.side2 {\n  font-size: 14px;\n  opacity: .5;\n}\n.ios-select-widget-box.one-level-box .one-level-contain {\n  width: 100%;\n}\n.ios-select-widget-box.one-level-box .two-level-contain,\n.ios-select-widget-box.one-level-box .three-level-contain,\n.ios-select-widget-box.one-level-box .four-level-contain,\n.ios-select-widget-box.one-level-box .five-level-contain,\n.ios-select-widget-box.one-level-box .six-level-contain {\n  width: 0;\n}\n.ios-select-widget-box.two-level-box .one-level-contain,\n.ios-select-widget-box.two-level-box .two-level-contain {\n  width: 50%;\n}\n.ios-select-widget-box.two-level-box .three-level-contain,\n.ios-select-widget-box.two-level-box .four-level-contain,\n.ios-select-widget-box.two-level-box .five-level-contain,\n.ios-select-widget-box.two-level-box .six-level-contain {\n  width: 0;\n}\n.ios-select-widget-box.three-level-box .one-level-contain,\n.ios-select-widget-box.three-level-box .two-level-contain {\n  width: 33.3333%;\n}\n.ios-select-widget-box.three-level-box .three-level-contain {\n  width: 33.3333%;\n}\n.ios-select-widget-box.three-level-box .four-level-contain .ios-select-widget-box.three-level-box .five-level-contain,\n.ios-select-widget-box.three-level-box .six-level-contain {\n  width: 0%;\n}\n.ios-select-widget-box.four-level-box .one-level-contain,\n.ios-select-widget-box.four-level-box .two-level-contain,\n.ios-select-widget-box.four-level-box .three-level-contain,\n.ios-select-widget-box.four-level-box .four-level-contain {\n  width: 25%;\n}\n.ios-select-widget-box.four-level-box .five-level-contain,\n.ios-select-widget-box.four-level-box .six-level-contain {\n  width: 0%;\n}\n.ios-select-widget-box.five-level-box .one-level-contain,\n.ios-select-widget-box.five-level-box .two-level-contain,\n.ios-select-widget-box.five-level-box .three-level-contain,\n.ios-select-widget-box.five-level-box .four-level-contain,\n.ios-select-widget-box.five-level-box .five-level-contain {\n  width: 20%;\n}\n.ios-select-widget-box.five-level-box .six-level-contain {\n  width: 0%;\n}\n.ios-select-widget-box.six-level-box .one-level-contain,\n.ios-select-widget-box.six-level-box .two-level-contain,\n.ios-select-widget-box.six-level-box .three-level-contain,\n.ios-select-widget-box.six-level-box .four-level-contain,\n.ios-select-widget-box.six-level-box .five-level-contain {\n  width: 16%;\n}\n.ios-select-widget-box.six-level-box .six-level-contain {\n  width: 20%;\n}\n.ios-select-widget-box .cover-area1 {\n  width: 100%;\n  border: none;\n  border-top: 1px solid #d9d9d9;\n  position: absolute;\n  top: 149px;\n  margin: 0;\n  height: 0;\n}\n.ios-select-widget-box .cover-area2 {\n  width: 100%;\n  border: none;\n  border-top: 1px solid #d9d9d9;\n  position: absolute;\n  top: 183px;\n  margin: 0;\n  height: 0;\n}\n.ios-select-widget-box #iosSelectTitle {\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  font-size: 16px;\n  font-weight: normal;\n  color: #fff;\n}\n.ios-select-body-class {\n  overflow: hidden;\n}\n.ios-select-body-class body {\n  touch-action: none;\n}\n.ios-select-widget-box.olay > div > .ios-select-loading-box {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: none;\n}\n.ios-select-widget-box.olay > div > .ios-select-loading-box > .ios-select-loading {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-top: -25px;\n  margin-left: -25px;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OEMxMEI3NDI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OEMxMEI3NTI3MEIxMUU2ODVGMzhFNjYyMDIyOUFCMCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU4QzEwQjcyMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU4QzEwQjczMjcwQjExRTY4NUYzOEU2NjIwMjI5QUIwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GeWqMwAAA+BJREFUeNrMmVlsTGEUx+9cXZQiLZWKklhbQSSlSMUWSxAiJGJ5aSQehOiDF7yI4EFILW99I3iRSJGUPkiILSKp2OuJVtHWkrRVapn2jv+R/ycnn5l27rQz10l+mWlyl/+c833nO+c0FIlEnATMBbPAIn5OBuPAENAKToC74BtoB59AG/D9spBPgaPBdrAFjJH7Fa66TkRuNe8gP8Bb8Ap8j/eFaXFelwv286WZfKG2WL9SX5cFCuntBvAc/OoPD64HJ8EI5Q3tmW7whl4pAl/AUfAEDKZnQ1HuFXGPQGOiAsW7x8A26wUhirgMLnGtfe3hGcO5NApARpRnSchrY0UhlkAJxxmw0npYBzgOKinSj6WDCfRyphWFJnAPdMUjUH71WbDKElcDykGL0zcbCEroVf389+CW7Uk3ygNk/azghYIHDoCN/SDO4W6+A55aAiUrzImWz7StA2WWuF2gIpEc1ovVgQeWyELm06gCc8ARJU44DM45yTPZII8tkXO5DP4RuI8iPYqr4YmQbJN8+E4JlA1abAuUBbtZeU526O4khDWW3QdhK9TZWmAZd6/x3inw0UmdSZJ/pgSKlilGoMvTwoiTw/20k3p7yTyovRgScTNAvgrvFSbkVJuE+LU6GiXEefJHqfKefF5zgrMGVRnJZ4HEerryXjdzU1DWbB2BI10mRuPBej+1WhKsi8vLeDDXZRllwtvoBG8davNmS4gHUZyTQIWSrM1iQpyZptafo4QGabp9+JNmOijMY9MTtGWpEHe5PDHMGsz/DwQOUwI7XVYUZheP1ZVEAJbOFsGswTYR+EKF2NWVRABWwHPYeLDFZWKOKJFLAhRYpMQJjS7rsWYlcjlTT6pNOr5pahfL5m12KaparUPpZTcEILCEjjGniCy9iMk3F9hImzCXcZqQKhOnLFShjbBX/psQP4Aq5UUpdfZEGXEkKzGvZf4zu/exOdV0T1LJCZTx4gK2msm2Uq494z1pS29Ea5ra2RPrrm4HpwvJsplgtTW/kXq0M1ZffF2F2uMNe+nJUD+HVWaLm8AAtXNrOXTqcfQh2fwQmKdST4TTgAp6ui+WTWFTrUpedu15Fs29Do/kuDsIZlsiW7njryZQ2MrAaD5Yqko88+w6zoPCfsdv5VwjnnXayA67zYmUdGM/e0i+E7nWivnDPUWEz6iyPedngLkY7ARDrQeb72GOz5roVY/eylMHvxflXjkpLoKHfZ2wmhJIkvcylUi9BAnTa9U9DD59CzQm/csaZv0cn0JbOeK4ye/xbfcE/w0hYZvElnU8GEXBGRQjeewzi5B6rtP6RGY9vwUYACMHTam1T1ebAAAAAElFTkSuQmCC) no-repeat 0 0;\n  background-size: contain;\n  -webkit-animation: loading-keyframe 1s infinite linear;\n  animation: loading-keyframe 1s infinite linear;\n}\n.fadeInUp .layer {\n  -webkit-animation: fadeInUp .5s;\n  animation: fadeInUp .5s;\n}\n.fadeOutDown .layer {\n  -webkit-animation: fadeOutDown .5s!important;\n  animation: fadeOutDown .5s!important;\n}\n@-webkit-keyframes loading-keyframe {\n  from {\n    -webkit-transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes loading-keyframe {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 100%, 0);\n  }\n}\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(10); 


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var class2type = __webpack_require__(2);
var getProto = __webpack_require__(11);
var hasOwn = __webpack_require__(4);
var array = __webpack_require__(0);
var push = __webpack_require__(14);
var indexOf = __webpack_require__(12);
var fnToString = __webpack_require__(3);
var objectFunctionString = __webpack_require__(13);
var types = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"];
types.map(function (name) {
  class2type["[object " + name + "]"] = name.toLowerCase();
});

module.exports = {
  type: function (obj) {
    if (obj == null) {
      return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[toString.call(obj)] || "object" :
      typeof obj;
  },
  isNull: function (obj) {
    return obj === null || typeof obj === "undefined";
  },
  isPlainObject: function (obj) {
    var proto, Ctor;
    if (!obj || toString.call(obj) !== "[object Object]") {
      return false;
    }

    proto = getProto(obj);
    if (!proto) {
      return true;
    }
    Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
    return typeof Ctor === "function" && fnToString.call(Ctor) === objectFunctionString;
  },
  isEmptyObject: function (obj) {
    var name;
    for (name in obj) {
      return false;
    }
    return true;
  },
  isFunction: function (obj) {
    return this.type(obj) === "function";
  },

  isNumeric: function (obj) {
    var type = this.type(obj);
    return (type === "number" || type === "string") &&
      // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(obj - parseFloat(obj));
  },
  isArray: function (obj) {
    return this.type(obj) == "array";
  },
  isBoolean: function (obj) {
    return this.type(obj) == "boolean";
  },
  isDate: function (obj) {
    return this.type(obj) == "date";
  },
  contain: function (elem, array, i) {
    return array == null ? -1 : indexOf.call(array, elem, i);
  },
  merge: function (first, second) {
    var len = +second.length,
      j = 0,
      i = first.length;
    for (; j < len; j++) {
      first[i++] = second[j];
    }
    first.length = i;
    return first;
  },
  trim: function (text) {
    return text == null ?
      "" : (text + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  },

  // results is for internal usage only
  makeArray: function (arr, results) {
    var ret = results || [];
    if (arr != null) {
      if (this.isArrayLike(Object(arr))) {
        this.merge(ret,
          typeof arr === "string" ?
            [arr] : arr
        );
      } else {
        push.call(ret, arr);
      }
    }
    return ret;
  },
  isWindow: function (obj) {
    return obj != null && obj === obj.window;
  },
  isArrayLike: function (obj) {
    var length = !!obj && "length" in obj && obj.length,
      type = this.type(obj);
    if (type === "function" || this.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 ||
      typeof length === "number" && length > 0 && (length - 1) in obj;
  },
  unique: function (arr) {
    var res = [];
    var json = {};
    for (var i = 0; i < arr.length; i++) {
      if (!json[arr[i]]) {
        res.push(arr[i]);
        json[arr[i]] = 1;
      }
    }
    return res;
  },
  findElementIndex: function (arr, element) {
    for (var i = 0; i < arr.length; i++) {
      if (Object.prototype.toString.call(arr[i]) == "[object Object]") {
        for (var key in arr[i]) {
          if (key == element) {
            return i;
          }
        }
      } else if (element === arr[i]) {
        return i;
      }
    }
    return -1;
  },
  removeElement: function (array, element) {
    var n = this.findElementIndex(array, element);
    if (n < 0) {
      return array;
    } else {
      return array.splice(n, 1); //this.slice(0, n).concat(this.slice(n + 1, this.length));
    }
  },
  copyDate: function (date) {
    try {
      var newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      newDate.setHours(date.getHours());
      newDate.setMinutes(date.getMinutes());
      newDate.setSeconds(date.getSeconds());
      newDate.setMilliseconds(date.getMilliseconds());

      return newDate;
    } catch (e) {
      throw "invalidDate";
    }
  },
  /**
   * 创建正确的Date对象
   * @param strFormatDate 日期字符串，支持格式
   *  2017-11-19 12:20:30:333
   *  2017/11/19 12:20:30:333
   *  2017.11.19 12:20:30:333
   *  2017-11-19
   *  2017/11/19
   *  2017.11.19
   * @param dateArr 时、分、秒数组，格式
   *  [23,59,59]
   */
  createCorrectDate: function (strFormatDate, dateArr) {
    if (strFormatDate == undefined || strFormatDate == null || strFormatDate == '') return 'invalidDate';
    var dateObj;
    dateArr = dateArr || [];
    try {
      var dateArray;
      if (strFormatDate.indexOf(":") > -1) {
        var dateStrSplit = strFormatDate.toString().split(" ");
        strFormatDate = dateStrSplit[0];
        if (dateArr.length <= 0) dateArr = dateStrSplit[1].split(":")
      }
      if (strFormatDate.indexOf('-') > -1) {
        dateArray = strFormatDate.toString().split('-');
        dateObj = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
        if (Number(dateArray[0]) != dateObj.getFullYear())
          return 'invalidDate';
        if (Number(dateArray[1]) != dateObj.getMonth() + 1)
          return 'invalidDate';
        if (Number(dateArray[2]) != dateObj.getDate())
          return 'invalidDate';
      } else if (strFormatDate.indexOf('.') > -1) {
        dateArray = strFormatDate.toString().split('.');
        dateObj = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
        if (Number(dateArray[0]) != dateObj.getFullYear())
          return 'invalidDate';
        if (Number(dateArray[1]) != dateObj.getMonth() + 1)
          return 'invalidDate';
        if (Number(dateArray[2]) != dateObj.getDate())
          return 'invalidDate';
      } else if (strFormatDate.indexOf('/') > -1) {
        dateArray = strFormatDate.toString().split('/');
        dateObj = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
        if (Number(dateArray[0]) != dateObj.getFullYear())
          return 'invalidDate';
        if (Number(dateArray[1]) != dateObj.getMonth() + 1)
          return 'invalidDate';
        if (Number(dateArray[2]) != dateObj.getDate())
          return 'invalidDate';
      }

      for (var i = 0; i < dateArr.length; i++) {
        switch (i) {
          case 0:
            dateObj.setHours(dateArr[0]);
            if (dateObj.getHours() != Number(dateArr[0]))
              return 'invalidDate';
            break;
          case 1:
            dateObj.setMinutes(dateArr[1]);
            if (dateObj.getMinutes() != Number(dateArr[1]))
              return 'invalidDate';
            break;
          case 2:
            dateObj.setSeconds(dateArr[2]);
            if (dateObj.getSeconds() != Number(dateArr[2]))
              return 'invalidDate';
            break;
          case 3:
            dateObj.setMilliseconds(dateArr[3]);
            if (dateObj.getMilliseconds() != Number(dateArr[3]))
              return 'invalidDate';
          default:
            break;
        }
      }
      if (dateArr.length <= 0) {
        dateObj.setHours(0);
        dateObj.setMinutes(0);
        dateObj.setSeconds(0);
        dateObj.setMilliseconds(0);
      }


      return dateObj;
    } catch (e) {
      return 'invalidDate';
    }
  },
  dateFormat: function (fmt, objDate) {
    var o = {
      "M+": objDate.getMonth() + 1, //月份
      "d+": objDate.getDate(), //日
      "h+": objDate.getHours(), //小时
      "m+": objDate.getMinutes(), //分
      "s+": objDate.getSeconds(), //秒
      "q+": Math.floor((objDate.getMonth() + 3) / 3), //季度
      "S": objDate.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (objDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  isLeapYear: function (objDate) {//判断闰年
    var pYear = objDate.getFullYear();
    if (!isNaN(parseInt(pYear))) {
      if ((pYear % 4 == 0 && pYear % 100 != 0) || (pYear % 100 == 0 && pYear % 400 == 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  },
  /***************************************************
   *比较两个日期的间隔
   *参数说明:
   * @param interval要返回的两个日期的间隔,比如：
   *  s：返回两个日期相差的秒数
   *  n：返回两个日期相差的分钟数
   *  h：返回两个日期相差的小时数
   *  d：返回两个日期相差的天数
   *  w：返回两个日期相差的周数
   *  m：返回连个日期相差的月数
   *  y：返回连个日期相差的年数
   * @param beginDate：开始日期
   * @param endDate:结束日期
   ****************************************************/
  diffDate: function (interval, beginDate, endDate) {
    var dtBegin;
    var dtEnd;
    try {
      if (Object.prototype.toString.call(beginDate) == "[object Date]") {
        dtBegin = beginDate;
      } else if (Object.prototype.toString.call(beginDate) == "[object String]") {
        dtBegin = this.createCorrectDate(beginDate);
      }

      if (Object.prototype.toString.call(endDate) == "[object Date]") {
        dtEnd = endDate;
      } else if (Object.prototype.toString.call(endDate) == "[object String]") {
        dtEnd = this.createCorrectDate(endDate);
      }

      if (isNaN(dtEnd)) return undefined;
      switch (interval) {
        case "s":
          return parseInt((dtEnd - dtBegin) / 1000);
        case "n":
          return parseInt((dtEnd - dtBegin) / 60000);
        case "h":
          return parseInt((dtEnd - dtBegin) / 3600000);
        case "d":
          return parseInt((dtEnd - dtBegin) / 86400000);
        case "w":
          return parseInt((dtEnd - dtBegin) / (86400000 * 7));
        case "m":
          return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtBegin.getFullYear()) * 12) - (dtBegin.getMonth() + 1);
        case "y":
          return dtEnd.getFullYear() - dtBegin.getFullYear();
      }
    } catch (e) {
      throw "无效的时间格式！";
    }
  },
  /***************************************************
   *比较两个日期的间隔
   *参数说明:
   *objDate：结束日期
   *interval要返回的两个日期的间隔,比如：
   *s：返回两个日期相差的秒数
   *n：返回两个日期相差的分钟数
   *h：返回两个日期相差的小时数
   *d：返回两个日期相差的天数
   *w：返回两个日期相差的周数
   *m：返回连个日期相差的月数
   *y：返回连个日期相差的年数
   ****************************************************/
  dateDiff: function (interval, objBeginDate, objEndDate) {
    var dtBegin = new Date(objBeginDate);
    var dtEnd = new Date(objEndDate);
    if (isNaN(dtEnd)) return undefined;
    switch (interval) {
      case "s":
        return parseInt((dtEnd - dtBegin) / 1000);
      case "n":
        return parseInt((dtEnd - dtBegin) / 60000);
      case "h":
        return parseInt((dtEnd - dtBegin) / 3600000);
      case "d":
        return parseInt((dtEnd - dtBegin) / 86400000);
      case "w":
        return parseInt((dtEnd - dtBegin) / (86400000 * 7));
      case "m":
        return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtBegin.getFullYear()) * 12) - (dtBegin.getMonth() + 1);
      case "y":
        return dtEnd.getFullYear() - dtBegin.getFullYear();
    }
  },
  clone: function () {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;
      // Skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }
    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !this.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];
          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (this.isPlainObject(copy) ||
            (copyIsArray = Array.isArray(copy)))) {

            if (copyIsArray) {
              copyIsArray = false;
              clone = src && Array.isArray(src) ? src : [];
            } else {
              clone = src && this.isPlainObject(src) ? src : {};
            }
            // Never move original objects, clone them
            target[name] = this.clone(deep, clone, copy);
            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    // Return the modified object
    return target;
  },
  getQuery: function (queryKey, target, pattern) {
    var locationSearch = location.search;
    if (target) locationSearch = target;
    var regExp = new RegExp("" + queryKey + "=([^&=]+)");
    if (pattern) regExp = pattern;
    var query;
    if (regExp.test(locationSearch)) {
      query = RegExp.$1;
    }
    return query;
  },
  getOffset: function (element) {
    var left = 0, top = 0;
    var parent = element;
    while (parent != null) {
      left += parent.offsetLeft;
      top += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return { offsetX: left, offsetY: top };
  },
  getScrollOffsets: function (w) {
    var w = w || window;
    if (w.pageXOffset != null) {
      return { scrollX: w.pageXOffset, scrollY: w.pageYOffset };
    }
    var doc = w.document;
    if (doc.compatMode == "CSS1Compat") {
      return { scrollX: doc.documentElement.scrollLeft, scrollY: doc.documentElement.scrollTop };
    }
    return { scrollX: doc.body.scrollLeft, scrollY: doc.body.scrollTop };
  },
  getViewPortSize: function (w) {
    var w = w || window;
    if (w.innerWidth) {
      return { width: w.innerWidth, height: w.innerHeight };
    }
    var d = w.document;
    if (d.compatMode == "CSS1Compat") {
      return { width: d.documentElement.clientWidth, height: d.documentElement.clientHeight };
    }
    return { width: d.body.clientWidth, height: d.body.clientHeight };
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Object.getPrototypeOf;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var array = __webpack_require__(0);
module.exports = array.indexOf;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToString = __webpack_require__(3);
module.exports = fnToString.call(Object);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var array = __webpack_require__(0);
module.exports = array.push;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-wrapper\" v-show=\"visible\">\r\n  {{dateSelectOption}}\r\n  <div :class=\"dateSelectContainer\"></div>\r\n</div>";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * IosSelect
 * @param {number} level 选择的层级 1 2 3 4 5 6 最多支持6层
 * @param {...Array} data [oneLevelData[, twoLevelData[, threeLevelData[, fourLevelData[, fiveLevelData[, sixLevelData]]]]]] 可以用数组，也可以用方法
 * @param {Object} options
 * @param {string=} options.container 组件插入到该元素下 可选
 * @param {Function} options.callback 选择完毕后的回调函数
 * @param {Function} options.fallback 选择取消后的回调函数
 * @param {Function} options.maskCallback 点击背景层关闭组件时触发的方法
 * @param {string=} options.title 选择框title
 * @param {number=} options.itemHeight 每一项的高度，默认 35
 * @param {number=} options.itemShowCount 组件展示的项数，默认 7，可选3,5,7,9，不过不是3,5,7,9则展示7项
 * @param {number=} options.headerHeight 组件标题栏高度 默认 44
 * @param {css=} options.cssUnit px或者rem 默认是px
 * @param {string=} options.addClassName 组件额外类名 用于自定义样式
 * @param {...Array=} options.relation 数组 [oneTwoRelation, twoThreeRelation, threeFourRelation, fourFiveRelation] 默认值：[0, 0, 0, 0, 0, 0]
 * @param {number=} options.relation.oneTwoRelation 第一列和第二列是否通过parentId关联
 * @param {number=} options.relation.twoThreeRelation 第二列和第三列是否通过parentId关联
 * @param {number=} options.relation.threeFourRelation 第三列和第四列是否通过parentId关联
 * @param {number=} options.relation.fourFiveRelation 第四列和第五列是否通过parentId关联
 * @param {number=} options.relation.fiveSixRelation 第五列和第六列是否通过parentId关联
 * @param {string=} options.oneLevelId 第一级选中id
 * @param {string=} options.twoLevelId 第二级选中id
 * @param {string=} options.threeLevelId 第三级选中id
 * @param {string=} options.fourLevelId 第四级选中id
 * @param {string=} options.fiveLevelId 第五级选中id
 * @param {string=} options.sixLevelId 第六级选中id
 * @param {boolean=} options.showLoading 如果你的数据是异步加载的，可以使用该参数设置为true，下拉菜单会有加载中的效果
 * @param {boolean=} options.showAnimate 是否需要入场动画和退场动画，如需自定义动画效果，请修改css
 */
(function() {
	/* modify by zhoushengmufc,based on iScroll v5.2.0 */
	var rAF = window.requestAnimationFrame  ||
	    window.webkitRequestAnimationFrame  ||
	    window.mozRequestAnimationFrame     ||
	    window.oRequestAnimationFrame       ||
	    window.msRequestAnimationFrame      ||
	    function (callback) { window.setTimeout(callback, 1000 / 60); };

	var utils = (function () {
	    var me = {};

	    var _elementStyle = document.createElement('div').style;
	    var _vendor = (function () {
	        var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
	            transform,
	            i = 0,
	            l = vendors.length;

	        for ( ; i < l; i++ ) {
	            transform = vendors[i] + 'ransform';
	            if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
	        }

	        return false;
	    })();

	    function _prefixStyle (style) {
	        if ( _vendor === false ) return false;
	        if ( _vendor === '' ) return style;
	        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	    }

	    me.getTime = Date.now || function getTime () { return new Date().getTime(); };

	    me.extend = function (target, obj) {
	        for ( var i in obj ) {
	            target[i] = obj[i];
	        }
	    };

	    me.addEvent = function (el, type, fn, capture) {
	        el.addEventListener(type, fn, !!capture);
	    };

	    me.removeEvent = function (el, type, fn, capture) {
	        el.removeEventListener(type, fn, !!capture);
	    };

	    me.prefixPointerEvent = function (pointerEvent) {
	        return window.MSPointerEvent ?
	            'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
	            pointerEvent;
	    };

	    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
	        var distance = current - start,
	            speed = Math.abs(distance) / time,
	            destination,
	            duration;

	        deceleration = deceleration === undefined ? 0.0006 : deceleration;

	        destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
	        duration = speed / deceleration;

	        if ( destination < lowerMargin ) {
	            destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
	            distance = Math.abs(destination - current);
	            duration = distance / speed;
	        } else if ( destination > 0 ) {
	            destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
	            distance = Math.abs(current) + destination;
	            duration = distance / speed;
	        }

	        return {
	            destination: Math.round(destination),
	            duration: duration
	        };
	    };

	    var _transform = _prefixStyle('transform');

	    me.extend(me, {
	        hasTransform: _transform !== false,
	        hasPerspective: _prefixStyle('perspective') in _elementStyle,
	        hasTouch: 'ontouchstart' in window,
	        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
	        hasTransition: _prefixStyle('transition') in _elementStyle
	    });

	    /*
	    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	    - galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
	    me.isBadAndroid = (function() {
	        var appVersion = window.navigator.appVersion;
	        // Android browser is not a chrome browser.
	        if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
	            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	            if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
	                return parseFloat(safariVersion[1]) < 535.19;
	            } else {
	                return true;
	            }
	        } else {
	            return false;
	        }
	    })();

	    me.extend(me.style = {}, {
	        transform: _transform,
	        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
	        transitionDuration: _prefixStyle('transitionDuration'),
	        transitionDelay: _prefixStyle('transitionDelay'),
	        transformOrigin: _prefixStyle('transformOrigin')
	    });

	    me.hasClass = function (e, c) {
	        var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
	        return re.test(e.className);
	    };

	    me.addClass = function (e, c) {
	        if ( me.hasClass(e, c) ) {
	            return;
	        }

	        var newclass = e.className.split(' ');
	        newclass.push(c);
	        e.className = newclass.join(' ');
	    };

	    me.removeClass = function (e, c) {
	        if ( !me.hasClass(e, c) ) {
	            return;
	        }

	        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
	        e.className = e.className.replace(re, ' ');
	    };

	    me.offset = function (el) {
	        var left = -el.offsetLeft,
	            top = -el.offsetTop;

	        // jshint -W084
	        while (el = el.offsetParent) {
	            left -= el.offsetLeft;
	            top -= el.offsetTop;
	        }
	        // jshint +W084

	        return {
	            left: left,
	            top: top
	        };
	    };

	    me.preventDefaultException = function (el, exceptions) {
	        for ( var i in exceptions ) {
	            if ( exceptions[i].test(el[i]) ) {
	                return true;
	            }
	        }

	        return false;
	    };

	    me.extend(me.eventType = {}, {
	        touchstart: 1,
	        touchmove: 1,
	        touchend: 1,

	        mousedown: 2,
	        mousemove: 2,
	        mouseup: 2,

	        pointerdown: 3,
	        pointermove: 3,
	        pointerup: 3,

	        MSPointerDown: 3,
	        MSPointerMove: 3,
	        MSPointerUp: 3
	    });

	    me.extend(me.ease = {}, {
	        quadratic: {
	            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	            fn: function (k) {
	                return k * ( 2 - k );
	            }
	        },
	        circular: {
	            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',   // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
	            fn: function (k) {
	                return Math.sqrt( 1 - ( --k * k ) );
	            }
	        },
	        back: {
	            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	            fn: function (k) {
	                var b = 4;
	                return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
	            }
	        },
	        bounce: {
	            style: '',
	            fn: function (k) {
	                if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
	                    return 7.5625 * k * k;
	                } else if ( k < ( 2 / 2.75 ) ) {
	                    return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
	                } else if ( k < ( 2.5 / 2.75 ) ) {
	                    return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
	                } else {
	                    return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
	                }
	            }
	        },
	        elastic: {
	            style: '',
	            fn: function (k) {
	                var f = 0.22,
	                    e = 0.4;

	                if ( k === 0 ) { return 0; }
	                if ( k == 1 ) { return 1; }

	                return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
	            }
	        }
	    });

	    me.tap = function (e, eventName) {
	        var ev = document.createEvent('Event');
	        ev.initEvent(eventName, true, true);
	        ev.pageX = e.pageX;
	        ev.pageY = e.pageY;
	        e.target.dispatchEvent(ev);
	    };

	    me.click = function (e) {
	        var target = e.target,
	            ev;

	        if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
	            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
	            // initMouseEvent is deprecated.
	            ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
	            ev.initEvent('click', true, true);
	            ev.view = e.view || window;
	            ev.detail = 1;
	            ev.screenX = target.screenX || 0;
	            ev.screenY = target.screenY || 0;
	            ev.clientX = target.clientX || 0;
	            ev.clientY = target.clientY || 0;
	            ev.ctrlKey = !!e.ctrlKey;
	            ev.altKey = !!e.altKey;
	            ev.shiftKey = !!e.shiftKey;
	            ev.metaKey = !!e.metaKey;
	            ev.button = 0;
	            ev.relatedTarget = null;
	            ev._constructed = true;
	            target.dispatchEvent(ev);
	        }
	    };

	    return me;
	})();
	function IScrollForIosSelect (el, options) {
	    this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
	    this.scroller = this.wrapper.children[0];
	    this.scrollerStyle = this.scroller.style;       // cache style for better performance

	    this.options = {
	        disablePointer: true,
	        disableTouch: !utils.hasTouch,
	        disableMouse: utils.hasTouch,
	        startX: 0,
	        startY: 0,
	        scrollY: true,
	        directionLockThreshold: 5,
	        momentum: true,

	        bounce: true,
	        bounceTime: 600,
	        bounceEasing: '',

	        preventDefault: true,
	        preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },

	        HWCompositing: true,
	        useTransition: true,
	        useTransform: true,
	        bindToWrapper: typeof window.onmousedown === "undefined"
	    };

	    for ( var i in options ) {
	        this.options[i] = options[i];
	    }

	    // Normalize options
	    this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';

	    this.options.useTransition = utils.hasTransition && this.options.useTransition;
	    this.options.useTransform = utils.hasTransform && this.options.useTransform;

	    this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
	    this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;

	    // If you want eventPassthrough I have to lock one of the axes
	    this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
	    this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;

	    // With eventPassthrough we also need lockDirection mechanism
	    this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
	    this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;

	    this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;

	    this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;

	    if ( this.options.tap === true ) {
	        this.options.tap = 'tap';
	    }

	    // https://github.com/cubiq/iscrollForIosSelect/issues/1029
	    if (!this.options.useTransition && !this.options.useTransform) {
	        if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
	            this.scrollerStyle.position = "relative";
	        }
	    }

	    if ( this.options.shrinkScrollbars == 'scale' ) {
	        this.options.useTransition = false;
	    }

	    this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;

	    if ( this.options.probeType == 3 ) {
	        this.options.useTransition = false; }
	    this.x = 0;
	    this.y = 0;
	    this.directionX = 0;
	    this.directionY = 0;
	    this._events = {};
	    this._init();
	    this.refresh();

	    this.scrollTo(this.options.startX, this.options.startY);
	    this.enable();
	}

	IScrollForIosSelect.prototype = {
	    version: '1.0.0',

	    _init: function () {
	        this._initEvents();
	    },

	    destroy: function () {
	        this._initEvents(true);
	        clearTimeout(this.resizeTimeout);
	        this.resizeTimeout = null;
	        this._execEvent('destroy');
	    },

	    _transitionEnd: function (e) {
	        if ( e.target != this.scroller || !this.isInTransition ) {
	            return;
	        }

	        this._transitionTime();
	        if ( !this.resetPosition(this.options.bounceTime) ) {
	            this.isInTransition = false;
	            this._execEvent('scrollEnd');
	        }
	    },

	    _start: function (e) {
	        // React to left mouse button only
	        if ( utils.eventType[e.type] != 1 ) {
	          // for button property
	          // http://unixpapa.com/js/mouse.html
	          var button;
	        if (!e.which) {
	          /* IE case */
	          button = (e.button < 2) ? 0 :
	                   ((e.button == 4) ? 1 : 2);
	        } else {
	          /* All others */
	          button = e.button;
	        }
	            if ( button !== 0 ) {
	                return;
	            }
	        }

	        if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
	            return;
	        }

	        if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
	            e.preventDefault();
	        }

	        var point = e.touches ? e.touches[0] : e,
	            pos;

	        this.initiated  = utils.eventType[e.type];
	        this.moved      = false;
	        this.distX      = 0;
	        this.distY      = 0;
	        this.directionX = 0;
	        this.directionY = 0;
	        this.directionLocked = 0;

	        this.startTime = utils.getTime();

	        if ( this.options.useTransition && this.isInTransition ) {
	            this._transitionTime();
	            this.isInTransition = false;
	            pos = this.getComputedPosition();
	            this._translate(Math.round(pos.x), Math.round(pos.y));
	            this._execEvent('scrollEnd');
	        } else if ( !this.options.useTransition && this.isAnimating ) {
	            this.isAnimating = false;
	            this._execEvent('scrollEnd');
	        }

	        this.startX    = this.x;
	        this.startY    = this.y;
	        this.absStartX = this.x;
	        this.absStartY = this.y;
	        this.pointX    = point.pageX;
	        this.pointY    = point.pageY;

	        this._execEvent('beforeScrollStart');
	    },

	    _move: function (e) {
	        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
	            return;
	        }

	        if ( this.options.preventDefault ) {    // increases performance on Android? TODO: check!
	            // e.preventDefault();
	        }

	        var point       = e.touches ? e.touches[0] : e,
	            deltaX      = point.pageX - this.pointX,
	            deltaY      = point.pageY - this.pointY,
	            timestamp   = utils.getTime(),
	            newX, newY,
	            absDistX, absDistY;

	        this.pointX     = point.pageX;
	        this.pointY     = point.pageY;

	        this.distX      += deltaX;
	        this.distY      += deltaY;
	        absDistX        = Math.abs(this.distX);
	        absDistY        = Math.abs(this.distY);

	        // We need to move at least 10 pixels for the scrolling to initiate
	        if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
	            return;
	        }

	        // If you are scrolling in one direction lock the other
	        if ( !this.directionLocked && !this.options.freeScroll ) {
	            if ( absDistX > absDistY + this.options.directionLockThreshold ) {
	                this.directionLocked = 'h';     // lock horizontally
	            } else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
	                this.directionLocked = 'v';     // lock vertically
	            } else {
	                this.directionLocked = 'n';     // no lock
	            }
	        }

	        if ( this.directionLocked == 'h' ) {
	            if ( this.options.eventPassthrough == 'vertical' ) {
	                e.preventDefault();
	            } else if ( this.options.eventPassthrough == 'horizontal' ) {
	                this.initiated = false;
	                return;
	            }

	            deltaY = 0;
	        } else if ( this.directionLocked == 'v' ) {
	            if ( this.options.eventPassthrough == 'horizontal' ) {
	                e.preventDefault();
	            } else if ( this.options.eventPassthrough == 'vertical' ) {
	                this.initiated = false;
	                return;
	            }

	            deltaX = 0;
	        }

	        deltaX = this.hasHorizontalScroll ? deltaX : 0;
	        deltaY = this.hasVerticalScroll ? deltaY : 0;

	        newX = this.x + deltaX;
	        newY = this.y + deltaY;

	        // Slow down if outside of the boundaries
	        if ( newX > 0 || newX < this.maxScrollX ) {
	            newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
	        }
	        if ( newY > 0 || newY < this.maxScrollY ) {
	            newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
	        }

	        this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
	        this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;

	        if ( !this.moved ) {
	            this._execEvent('scrollStart');
	        }

	        this.moved = true;

	        this._translate(newX, newY);
	        if ( timestamp - this.startTime > 300 ) {
	            this.startTime = timestamp;
	            this.startX = this.x;
	            this.startY = this.y;

	            if ( this.options.probeType == 1 ) {
	                this._execEvent('scroll');
	            }
	        }

	        if ( this.options.probeType > 1 ) {
	            this._execEvent('scroll');
	        }

	    },

	    _end: function (e) {
	        if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
	            return;
	        }

	        if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
	            e.preventDefault();
	        }

	        var point = e.changedTouches ? e.changedTouches[0] : e,
	            momentumX,
	            momentumY,
	            duration = utils.getTime() - this.startTime,
	            newX = Math.round(this.x),
	            newY = Math.round(this.y),
	            distanceX = Math.abs(newX - this.startX),
	            distanceY = Math.abs(newY - this.startY),
	            time = 0,
	            easing = '';

	        this.isInTransition = 0;
	        this.initiated = 0;
	        this.endTime = utils.getTime();

	        // reset if we are outside of the boundaries
	        if ( this.resetPosition(this.options.bounceTime) ) {
	            return;
	        }

	        this.scrollTo(newX, newY);  // ensures that the last position is rounded

	        // we scrolled less than 10 pixels
	        if ( !this.moved ) {
	            if ( this.options.tap ) {
	                utils.tap(e, this.options.tap);
	            }

	            if ( this.options.click ) {
	                utils.click(e);
	            }

	            this._execEvent('scrollCancel');
	            return;
	        }

	        if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
	            this._execEvent('flick');
	            return;
	        }

	        // start momentum animation if needed
	        if ( this.options.momentum && duration < 300 ) {
	            momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
	            momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
	            newX = momentumX.destination;
	            newY = momentumY.destination;
	            time = Math.max(momentumX.duration, momentumY.duration);
	            this.isInTransition = 1;
	        }


	        if ( this.options.snap ) {
	            var snap = this._nearestSnap(newX, newY);
	            this.currentPage = snap;
	            time = this.options.snapSpeed || Math.max(
	                    Math.max(
	                        Math.min(Math.abs(newX - snap.x), 1000),
	                        Math.min(Math.abs(newY - snap.y), 1000)
	                    ), 300);
	            newX = snap.x;
	            newY = snap.y;

	            this.directionX = 0;
	            this.directionY = 0;
	            easing = this.options.bounceEasing;
	        }


	        if ( newX != this.x || newY != this.y ) {
	            // change easing function when scroller goes out of the boundaries
	            if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
	                easing = utils.ease.quadratic;
	            }

	            this.scrollTo(newX, newY, time, easing);
	            return;
	        }

	        this._execEvent('scrollEnd');
	    },

	    _resize: function () {
	        var that = this;

	        clearTimeout(this.resizeTimeout);

	        this.resizeTimeout = setTimeout(function () {
	            that.refresh();
	        }, this.options.resizePolling);
	    },

	    resetPosition: function (time) {
	        var x = this.x,
	            y = this.y;

	        time = time || 0;

	        if ( !this.hasHorizontalScroll || this.x > 0 ) {
	            x = 0;
	        } else if ( this.x < this.maxScrollX ) {
	            x = this.maxScrollX;
	        }

	        if ( !this.hasVerticalScroll || this.y > 0 ) {
	            y = 0;
	        } else if ( this.y < this.maxScrollY ) {
	            y = this.maxScrollY;
	        }

	        if ( x == this.x && y == this.y ) {
	            return false;
	        }

	        this.scrollTo(x, y, time, this.options.bounceEasing);

	        return true;
	    },

	    disable: function () {
	        this.enabled = false;
	    },

	    enable: function () {
	        this.enabled = true;
	    },

	    refresh: function () {
	        var rf = this.wrapper.offsetHeight;     // Force reflow

	        this.wrapperWidth   = this.wrapper.clientWidth;
	        this.wrapperHeight  = this.wrapper.clientHeight;


	        this.scrollerWidth  = this.scroller.offsetWidth;
	        this.scrollerHeight = this.scroller.offsetHeight;

	        this.maxScrollX     = this.wrapperWidth - this.scrollerWidth;
	        this.maxScrollY     = this.wrapperHeight - this.scrollerHeight;


	        this.hasHorizontalScroll    = this.options.scrollX && this.maxScrollX < 0;
	        this.hasVerticalScroll      = this.options.scrollY && this.maxScrollY < 0;

	        if ( !this.hasHorizontalScroll ) {
	            this.maxScrollX = 0;
	            this.scrollerWidth = this.wrapperWidth;
	        }

	        if ( !this.hasVerticalScroll ) {
	            this.maxScrollY = 0;
	            this.scrollerHeight = this.wrapperHeight;
	        }

	        this.endTime = 0;
	        this.directionX = 0;
	        this.directionY = 0;

	        this.wrapperOffset = utils.offset(this.wrapper);

	        this._execEvent('refresh');

	        this.resetPosition();


	    },

	    on: function (type, fn) {
	        if ( !this._events[type] ) {
	            this._events[type] = [];
	        }

	        this._events[type].push(fn);
	    },

	    off: function (type, fn) {
	        if ( !this._events[type] ) {
	            return;
	        }

	        var index = this._events[type].indexOf(fn);

	        if ( index > -1 ) {
	            this._events[type].splice(index, 1);
	        }
	    },

	    _execEvent: function (type) {
	        if ( !this._events[type] ) {
	            return;
	        }

	        var i = 0,
	            l = this._events[type].length;

	        if ( !l ) {
	            return;
	        }

	        for ( ; i < l; i++ ) {
	            this._events[type][i].apply(this, [].slice.call(arguments, 1));
	        }
	    },

	    scrollTo: function (x, y, time, easing) {
	        easing = easing || utils.ease.circular;

	        this.isInTransition = this.options.useTransition && time > 0;
	        var transitionType = this.options.useTransition && easing.style;
	        if ( !time || transitionType ) {
	                if(transitionType) {
	                    this._transitionTimingFunction(easing.style);
	                    this._transitionTime(time);
	                }
	            this._translate(x, y);
	        } else {
	            this._animate(x, y, time, easing.fn);
	        }
	    },

	    scrollToElement: function (el, time, offsetX, offsetY, easing) {
	        el = el.nodeType ? el : this.scroller.querySelector(el);

	        if ( !el ) {
	            return;
	        }

	        var pos = utils.offset(el);

	        pos.left -= this.wrapperOffset.left;
	        pos.top  -= this.wrapperOffset.top;

	        // if offsetX/Y are true we center the element to the screen
	        if ( offsetX === true ) {
	            offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
	        }
	        if ( offsetY === true ) {
	            offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
	        }

	        pos.left -= offsetX || 0;
	        pos.top  -= offsetY || 0;

	        pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
	        pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;

	        time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;

	        this.scrollTo(pos.left, pos.top, time, easing);
	    },

	    _transitionTime: function (time) {
	        if (!this.options.useTransition) {
	            return;
	        }
	        time = time || 0;
	        var durationProp = utils.style.transitionDuration;
	        if(!durationProp) {
	            return;
	        }

	        this.scrollerStyle[durationProp] = time + 'ms';

	        if ( !time && utils.isBadAndroid ) {
	            this.scrollerStyle[durationProp] = '0.0001ms';
	            // remove 0.0001ms
	            var self = this;
	            rAF(function() {
	                if(self.scrollerStyle[durationProp] === '0.0001ms') {
	                    self.scrollerStyle[durationProp] = '0s';
	                }
	            });
	        }



	    },

	    _transitionTimingFunction: function (easing) {
	        this.scrollerStyle[utils.style.transitionTimingFunction] = easing;



	    },

	    _translate: function (x, y) {
	        if ( this.options.useTransform ) {


	            this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;


	        } else {
	            x = Math.round(x);
	            y = Math.round(y);
	            this.scrollerStyle.left = x + 'px';
	            this.scrollerStyle.top = y + 'px';
	        }

	        this.x = x;
	        this.y = y;



	    },

	    _initEvents: function (remove) {
	        var eventType = remove ? utils.removeEvent : utils.addEvent,
	            target = this.options.bindToWrapper ? this.wrapper : window;

	        eventType(window, 'orientationchange', this);
	        eventType(window, 'resize', this);

	        if ( this.options.click ) {
	            eventType(this.wrapper, 'click', this, true);
	        }

	        if ( !this.options.disableMouse ) {
	            eventType(this.wrapper, 'mousedown', this);
	            eventType(target, 'mousemove', this);
	            eventType(target, 'mousecancel', this);
	            eventType(target, 'mouseup', this);
	        }

	        if ( utils.hasPointer && !this.options.disablePointer ) {
	            eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
	            eventType(target, utils.prefixPointerEvent('pointermove'), this);
	            eventType(target, utils.prefixPointerEvent('pointercancel'), this);
	            eventType(target, utils.prefixPointerEvent('pointerup'), this);
	        }

	        if ( utils.hasTouch && !this.options.disableTouch ) {
	            eventType(this.wrapper, 'touchstart', this);
	            eventType(target, 'touchmove', this);
	            eventType(target, 'touchcancel', this);
	            eventType(target, 'touchend', this);
	        }

	        eventType(this.scroller, 'transitionend', this);
	        eventType(this.scroller, 'webkitTransitionEnd', this);
	        eventType(this.scroller, 'oTransitionEnd', this);
	        eventType(this.scroller, 'MSTransitionEnd', this);
	    },

	    getComputedPosition: function () {
	        var matrix = window.getComputedStyle(this.scroller, null),
	            x, y;

	        if ( this.options.useTransform ) {
	            matrix = matrix[utils.style.transform].split(')')[0].split(', ');
	            x = +(matrix[12] || matrix[4]);
	            y = +(matrix[13] || matrix[5]);
	        } else {
	            x = +matrix.left.replace(/[^-\d.]/g, '');
	            y = +matrix.top.replace(/[^-\d.]/g, '');
	        }

	        return { x: x, y: y };
	    },

	    _animate: function (destX, destY, duration, easingFn) {
	        var that = this,
	            startX = this.x,
	            startY = this.y,
	            startTime = utils.getTime(),
	            destTime = startTime + duration;

	        function step () {
	            var now = utils.getTime(),
	                newX, newY,
	                easing;

	            if ( now >= destTime ) {
	                that.isAnimating = false;
	                that._translate(destX, destY);
	                
	                if ( !that.resetPosition(that.options.bounceTime) ) {
	                    that._execEvent('scrollEnd');
	                }

	                return;
	            }

	            now = ( now - startTime ) / duration;
	            easing = easingFn(now);
	            newX = ( destX - startX ) * easing + startX;
	            newY = ( destY - startY ) * easing + startY;
	            that._translate(newX, newY);

	            if ( that.isAnimating ) {
	                rAF(step);
	            }

	            if ( that.options.probeType == 3 ) {
	                that._execEvent('scroll');
	            }
	        }

	        this.isAnimating = true;
	        step();
	    },

	    handleEvent: function (e) {
	        switch ( e.type ) {
	            case 'touchstart':
	            case 'pointerdown':
	            case 'MSPointerDown':
	            case 'mousedown':
	                this._start(e);
	                break;
	            case 'touchmove':
	            case 'pointermove':
	            case 'MSPointerMove':
	            case 'mousemove':
	                this._move(e);
	                break;
	            case 'touchend':
	            case 'pointerup':
	            case 'MSPointerUp':
	            case 'mouseup':
	            case 'touchcancel':
	            case 'pointercancel':
	            case 'MSPointerCancel':
	            case 'mousecancel':
	                this._end(e);
	                break;
	            case 'orientationchange':
	            case 'resize':
	                this._resize();
	                break;
	            case 'transitionend':
	            case 'webkitTransitionEnd':
	            case 'oTransitionEnd':
	            case 'MSTransitionEnd':
	                this._transitionEnd(e);
	                break;
	            case 'click':
	                if ( this.enabled && !e._constructed ) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                }
	                break;
	        }
	    }
	};
	IScrollForIosSelect.utils = utils;

	var iosSelectUtil = {
		isArray: function (arg1) {
			return Object.prototype.toString.call(arg1) === '[object Array]';
		},
		isFunction: function (arg1) {
			return typeof arg1 === 'function';
		},
		attrToData: function (dom, index) {
			var obj = {};
			for (var p in dom.dataset) {
				obj[p] = dom.dataset[p];
			}
			obj['dom'] = dom;
			obj['atindex'] = index;
			return obj;
		},
		attrToHtml: function (obj) {
			var html = '';
			for (var p in obj) {
				html += 'data-' + p + '="' + obj[p] + '"';
			}
			return html;
		}
	};
	/*function preventEventFun(e) {
		e.preventDefault();
	}*/
	// Layer
	function Layer(html, opts) {
		if (!(this instanceof Layer)) {
			return new Layer(html, opts);
		}
		this.html = html;
		this.opts = opts;
		var el = document.createElement('div');
		el.className = 'olay';
		var layer_el = document.createElement('div');
		layer_el.className = 'layer';
		this.el = el;
		this.layer_el = layer_el;
		this.init();
	}
	Layer.prototype = {
		init: function () {
			this.layer_el.innerHTML = this.html;
			if (this.opts.container && document.querySelector(this.opts.container)) {
				document.querySelector(this.opts.container).appendChild(this.el);
			}
			else {
				document.body.appendChild(this.el);
			}
			this.el.appendChild(this.layer_el);
			this.el.style.height = Math.max(document.documentElement.getBoundingClientRect().height, window.innerHeight);
			if (this.opts.className) {
				this.el.className += ' ' + this.opts.className;
			}
			this.bindEvent();
		},
		bindEvent: function () {
			var sureDom = this.el.querySelectorAll('.sure');
			var closeDom = this.el.querySelectorAll('.close');
			var self = this;
			this.el.addEventListener('click', function(e) {
				self.close();
				self.opts.maskCallback && self.opts.maskCallback();
			});
			this.layer_el.addEventListener('click', function(e) {
				e.stopPropagation();
			});
			Array.prototype.slice.call(sureDom).forEach(function (item, index) {
				item.addEventListener('click', function () {
					self.close();
				});
			});
			Array.prototype.slice.call(closeDom).forEach(function (item, index) {
				item.addEventListener('click', function () {
					self.close();
					self.opts.fallback && self.opts.fallback();
				});
			});
		},
		close: function () {
			var self=this;
			if (self.el) {
				if (self.opts.showAnimate) {
					self.el.className += ' fadeOutDown';
					setTimeout(function(){
						self.removeDom();
					}, 500);
				}
				else {
					self.removeDom();
				}
			}
		},
		removeDom: function (){
			this.el.parentNode.removeChild(this.el);
			this.el = null;
			if (document.documentElement.classList.contains('ios-select-body-class')) {
				document.documentElement.classList.remove('ios-select-body-class');
				/*document.body.removeEventListener('touchmove', preventEventFun, {
					passive: false
				});*/
			}
		}
	}
	function IosSelect(level, data, options) {
		if (!iosSelectUtil.isArray(data) || data.length === 0) {
			throw new TypeError('the data must be a non-empty array!');
			return;
		}
		if ([1, 2, 3, 4, 5, 6].indexOf(level) == -1) {
			throw new RangeError('the level parameter must be one of 1,2,3,4,5,6!');
			return;
		}
		this.data = data;
		this.level = level || 1;
		this.options = options;
		this.typeBox = 'one-level-box';
		if (this.level === 1) {
			this.typeBox = 'one-level-box';
		}
		else if (this.level === 2) {
			this.typeBox = 'two-level-box';
		}
		else if (this.level === 3) {
			this.typeBox = 'three-level-box';
		}
		else if (this.level === 4) {
			this.typeBox = 'four-level-box';
		}
		else if (this.level === 5) {
			this.typeBox = 'five-level-box';
		}
		else if (this.level === 6) {
			this.typeBox = 'six-level-box';
		}
		this.title = options.title || '';
		this.options.itemHeight = options.itemHeight || 35;
		this.options.itemShowCount = [3, 5, 7, 9].indexOf(options.itemShowCount) !== -1? options.itemShowCount: 7; 
		this.options.coverArea1Top = Math.floor(this.options.itemShowCount / 2);
		this.options.coverArea2Top = Math.ceil(this.options.itemShowCount / 2); 
		this.options.headerHeight = options.headerHeight || 44;
		this.options.relation = iosSelectUtil.isArray(this.options.relation)? this.options.relation: [];
		this.options.oneTwoRelation = this.options.relation[0];
		this.options.twoThreeRelation = this.options.relation[1];
		this.options.threeFourRelation = this.options.relation[2];
		this.options.fourFiveRelation = this.options.relation[3];
		this.options.fiveSixRelation = this.options.relation[4];
		if (this.options.cssUnit !== 'px' && this.options.cssUnit !== 'rem') {
			this.options.cssUnit = 'px';
		}
		var self = this;
		// 选中元素的信息
		this.selectOneObj = {
			id: self.options.oneLevelId
		};
		this.selectTwoObj = {
			id: self.options.twoLevelId
		};
		this.selectThreeObj = {
			id: self.options.threeLevelId
		};
		this.selectFourObj = {
			id: self.options.fourLevelId
		};
		this.selectFiveObj = {
			id: self.options.fiveLevelId
		};
		this.selectSixObj = {
			id: self.options.sixLevelId
		};
		this.setBase();
		this.init();
	};

	IosSelect.prototype = {
		init: function () {
			this.initLayer();
			this.setLevelData(1, this.options.oneLevelId, this.options.twoLevelId, this.options.threeLevelId, this.options.fourLevelId, this.options.fiveLevelId, this.options.sixLevelId);
		},
		initLayer: function () {
			var self = this;
			var sureText = this.options.sureText || '确定';
			var closeText = this.options.closeText || '取消';
			var headerHeightCss = this.options.headerHeight + this.options.cssUnit;
			var all_html = [
				'<header style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" class="iosselect-header">',
					'<a style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" href="javascript:void(0)" class="close">' + closeText + '</a>',
					'<a style="height: ' + headerHeightCss + '; line-height: ' + headerHeightCss + '" href="javascript:void(0)" class="sure">' + sureText + '</a>',
					'<h2 id="iosSelectTitle"></h2>',
				'</header>',
				'<section class="iosselect-box">',
					'<div class="one-level-contain" id="oneLevelContain">',
						'<ul class="select-one-level">',
						'</ul>',
					'</div>',
					'<div class="two-level-contain" id="twoLevelContain">',
						'<ul class="select-two-level">',
						'</ul>',
					'</div>',
					'<div class="three-level-contain" id="threeLevelContain">',
						'<ul class="select-three-level">',
						'</ul>',
					'</div>',
					'<div class="four-level-contain" id="fourLevelContain">',
						'<ul class="select-four-level">',
						'</ul>',
					'</div>',
					'<div class="five-level-contain" id="fiveLevelContain">',
						'<ul class="select-five-level">',
						'</ul>',
					'</div>',
					'<div class="six-level-contain" id="sixLevelContain">',
						'<ul class="select-six-level">',
						'</ul>',
					'</div>',
				'</section>',
				'<hr class="cover-area1"/>',
				'<hr class="cover-area2"/>',
				'<div class="ios-select-loading-box" id="iosSelectLoadingBox">',
				    '<div class="ios-select-loading"></div>',
				'</div>'
			].join('\r\n');
			this.iosSelectLayer = new Layer(all_html, {
				className: 'ios-select-widget-box ' + this.typeBox + (this.options.addClassName? ' ' + this.options.addClassName: '') + (this.options.showAnimate? ' fadeInUp': ''),
				container: this.options.container || '',
				showAnimate: this.options.showAnimate,
				fallback: this.options.fallback,
				maskCallback: this.options.maskCallback
			});

			this.iosSelectTitleDom = this.iosSelectLayer.el.querySelector('#iosSelectTitle');
			this.iosSelectLoadingBoxDom = this.iosSelectLayer.el.querySelector('#iosSelectLoadingBox');
			this.iosSelectTitleDom.innerHTML = this.title;
			if (this.options.headerHeight && this.options.itemHeight) {
				this.coverArea1Dom = this.iosSelectLayer.el.querySelector('.cover-area1');
				this.coverArea1Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea1Top + this.options.cssUnit;
				this.coverArea2Dom = this.iosSelectLayer.el.querySelector('.cover-area2');
				this.coverArea2Dom.style.top = this.options.headerHeight + this.options.itemHeight * this.options.coverArea2Top + this.options.cssUnit;
			}

			this.oneLevelContainDom = this.iosSelectLayer.el.querySelector('#oneLevelContain');
			this.twoLevelContainDom = this.iosSelectLayer.el.querySelector('#twoLevelContain');
			this.threeLevelContainDom = this.iosSelectLayer.el.querySelector('#threeLevelContain');
			this.fourLevelContainDom = this.iosSelectLayer.el.querySelector('#fourLevelContain');
			this.fiveLevelContainDom = this.iosSelectLayer.el.querySelector('#fiveLevelContain');
			this.sixLevelContainDom = this.iosSelectLayer.el.querySelector('#sixLevelContain');

			this.oneLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-one-level');
			this.twoLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-two-level');
			this.threeLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-three-level');
			this.fourLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-four-level');
			this.fiveLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-five-level');
			this.sixLevelUlContainDom = this.iosSelectLayer.el.querySelector('.select-six-level');

			this.iosSelectLayer.el.querySelector('.layer').style.height = this.options.itemHeight * this.options.itemShowCount + this.options.headerHeight + this.options.cssUnit;

			this.oneLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
			document.documentElement.classList.add('ios-select-body-class');
			/*document.body.addEventListener('touchmove', preventEventFun, {
				passive: false
			});*/

			this.scrollOne = new IScrollForIosSelect('#oneLevelContain', {
				probeType: 3,
				bounce: false
			});
			this.setScorllEvent(this.scrollOne, 1);
			
			if (this.level >= 2) {
				this.twoLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollTwo = new IScrollForIosSelect('#twoLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollTwo, 2);
			}
			if (this.level >= 3) {
				this.threeLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollThree = new IScrollForIosSelect('#threeLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollThree, 3);
			}
			if (this.level >= 4) {
				this.fourLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollFour = new IScrollForIosSelect('#fourLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollFour, 4);
			}
			if (this.level >= 5) {
				this.fiveLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollFive = new IScrollForIosSelect('#fiveLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollFive, 5);
			}
			if (this.level >= 6) {
				this.sixLevelContainDom.style.height = this.options.itemHeight * this.options.itemShowCount + this.options.cssUnit;
				this.scrollSix = new IScrollForIosSelect('#sixLevelContain', {
					probeType: 3,
					bounce: false
				});
				this.setScorllEvent(this.scrollSix, 6);
			}

			// 确认
			this.selectBtnDom = this.iosSelectLayer.el.querySelector('.sure');
			this.selectBtnDom.addEventListener('click', function (e) {
				self.options.callback && self.options.callback(self.selectOneObj, self.selectTwoObj, self.selectThreeObj, self.selectFourObj, self.selectFiveObj, self.selectSixObj);
			});
		},
		mapKeyByIndex: function (index) {
			var self = this;
			var map = {
				index: 1,
				levelContain: self.oneLevelContainDom,
				relation: self.options.oneTwoRelation
			};
			if (index === 2) {
				map = {
					index: 2,
					levelContain: self.twoLevelContainDom,
					relation: self.options.twoThreeRelation
				};
			}
			else if (index === 3) {
				map = {
					index: 3,
					levelContain: self.threeLevelContainDom,
					relation: self.options.threeFourRelation
				};
			}
			else if (index === 4) {
				map = {
					index: 4,
					levelContain: self.fourLevelContainDom,
					relation: self.options.fourFiveRelation
				};
			}
			else if (index === 5) {
				map = {
					index: 5,
					levelContain: self.fiveLevelContainDom,
					relation: self.options.fiveSixRelation
				};
			}
			else if (index === 6) {
				map = {
					index: 6,
					levelContain: self.sixLevelContainDom,
					relation: 0
				};
			}
			return map;
		},
		setScorllEvent: function (scrollInstance, index) {
			var self = this;
			var mapKey = self.mapKeyByIndex(index);
			scrollInstance.on('scrollStart', function () {
				self.toggleClassList(mapKey.levelContain);
			});
			scrollInstance.on('scroll', function () {
				if (isNaN(this.y)) {
					return;
				}
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				plast = Math.round(pa) + 1;
				self.toggleClassList(mapKey.levelContain);
				self.changeClassName(mapKey.levelContain, plast);
			});
			scrollInstance.on('scrollEnd', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				var to = 0;
				if (Math.ceil(pa) === Math.round(pa)) {
					to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.ceil(pa) + 1;
				} else {
					to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.floor(pa) + 1;
				}
				scrollInstance.scrollTo(0, -to, 0);

				self.toggleClassList(mapKey.levelContain);

				var pdom = self.changeClassName(mapKey.levelContain, plast);
				var obj = iosSelectUtil.attrToData(pdom, plast);
				self.setSelectObj(index, obj);

				if (self.level > index) {
					if ((mapKey.relation === 1 && iosSelectUtil.isArray(self.data[index])) || iosSelectUtil.isFunction(self.data[index])) {
						self.setLevelData(index + 1, self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id, self.selectSixObj.id);
					}
				}
			});
            scrollInstance.on('scrollCancel', function () {
				var pa = Math.abs(this.y / self.baseSize) / self.options.itemHeight;
				var plast = 1;
				var to = 0;
				if (Math.ceil(pa) === Math.round(pa)) {
					to = Math.ceil(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.ceil(pa) + 1;
				} else {
					to = Math.floor(pa) * self.options.itemHeight * self.baseSize;
					plast = Math.floor(pa) + 1;
				}
				scrollInstance.scrollTo(0, -to, 0);

				self.toggleClassList(mapKey.levelContain);

				var pdom = self.changeClassName(mapKey.levelContain, plast);
				var obj = iosSelectUtil.attrToData(pdom, plast);
				self.setSelectObj(index, obj);

				if (self.level > index) {
					if ((mapKey.relation === 1 && iosSelectUtil.isArray(self.data[index])) || iosSelectUtil.isFunction(self.data[index])) {
						self.setLevelData(index + 1, self.selectOneObj.id, self.selectTwoObj.id, self.selectThreeObj.id, self.selectFourObj.id, self.selectFiveObj.id, self.selectSixObj.id);
					}
					
				}
			});
		},
		loadingShow: function () {
			this.options.showLoading && (this.iosSelectLoadingBoxDom.style.display = 'block');
		},
		loadingHide: function () {
			this.iosSelectLoadingBoxDom.style.display = 'none';
		},
	    mapRenderByIndex: function (index) {
			var self = this;
			var map = {
				index: 1,
				relation: 0,
				levelUlContainDom: self.oneLevelUlContainDom,
				scrollInstance: self.scrollOne, 
				levelContainDom: self.oneLevelContainDom
			};
			if (index === 2) {
				map = {
					index: 2,
					relation: self.options.oneTwoRelation,
					levelUlContainDom: self.twoLevelUlContainDom,
					scrollInstance: self.scrollTwo, 
					levelContainDom: self.twoLevelContainDom
				};
			}
			else if (index === 3) {
				map = {
					index: 3,
					relation: self.options.twoThreeRelation,
					levelUlContainDom: self.threeLevelUlContainDom,
					scrollInstance: self.scrollThree, 
					levelContainDom: self.threeLevelContainDom
				};
			}
			else if (index === 4) {
				map = {
					index: 4,
					relation: self.options.threeFourRelation,
					levelUlContainDom: self.fourLevelUlContainDom,
					scrollInstance: self.scrollFour, 
					levelContainDom: self.fourLevelContainDom
				};
			}
			else if (index === 5) {
				map = {
					index: 5,
					relation: self.options.fourFiveRelation,
					levelUlContainDom: self.fiveLevelUlContainDom,
					scrollInstance: self.scrollFive, 
					levelContainDom: self.fiveLevelContainDom
				};
			}
			else if (index === 6) {
				map = {
					index: 6,
					relation: self.options.fiveSixRelation,
					levelUlContainDom: self.sixLevelUlContainDom,
					scrollInstance: self.scrollSix, 
					levelContainDom: self.sixLevelContainDom
				};
			}
			return map;
		},
	    getLevelData: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId) {
			var levelData = [];
			var renderMap = this.mapRenderByIndex(index);
			if (index === 1) {
				levelData = this.data[0];
			}
			else if (renderMap.relation === 1) {
				var pid = arguments[index - 1];
				this.data[index - 1].forEach(function (v, i, o) {
					if (v['parentId'] == pid) {
						levelData.push(v);
					}
				});
			}
			else {
				levelData = this.data[index - 1];
			}
			return levelData;
		},
		setLevelData: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId) {
			if (iosSelectUtil.isArray(this.data[index - 1])) {
				var levelData = this.getLevelData(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId);
				this.renderLevel(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData);
			}
			else if (iosSelectUtil.isFunction(this.data[index - 1])) {
				this.loadingShow();
				this.data[index - 1].apply(this, [oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId].slice(0, index - 1).concat(function (levelData) {
					this.loadingHide();
					this.renderLevel(index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData);
				}.bind(this)));
			}
			else {
				throw new Error('data format error');
			}
		},
	    renderLevel: function (index, oneLevelId, twoLevelId, threeLevelId, fourLevelId, fiveLevelId, sixLevelId, levelData) {
	    	var plast = 0;
	    	var curLevelId = arguments[index];
			var hasAtId = levelData.some(function (v, i, o) {
				return v.id == curLevelId;
			});
			if (!hasAtId) {
				curLevelId = levelData[0]['id'];
			}
			var tmpHtml = '';
			var itemHeightStyle = this.options.itemHeight + this.options.cssUnit;
			tmpHtml += this.getWhiteItem();
			levelData.forEach(function (v, i, o) {
				if (v.id == curLevelId) {
					tmpHtml += '<li style="height: ' + itemHeightStyle + '; line-height: ' + itemHeightStyle +';"' + iosSelectUtil.attrToHtml(v) + ' class="at">' + v.value + '</li>';
					plast = i + 1;
				}
				else {
					tmpHtml += '<li style="height: ' + itemHeightStyle + '; line-height: ' + itemHeightStyle +';"' + iosSelectUtil.attrToHtml(v) + '>' + v.value + '</li>';
				}
			});
			tmpHtml += this.getWhiteItem();
			var renderMap = this.mapRenderByIndex(index);
			renderMap.levelUlContainDom.innerHTML = tmpHtml;
			renderMap.scrollInstance.refresh();
			renderMap.scrollInstance.scrollToElement(':nth-child(' + plast + ')', 0);
			var pdom = this.changeClassName(renderMap.levelContainDom, plast);
			var obj = iosSelectUtil.attrToData(pdom, plast);
			this.setSelectObj(index, obj);
			if (this.level > index) {
				this.setLevelData(index + 1, this.selectOneObj.id, this.selectTwoObj.id, this.selectThreeObj.id, this.selectFourObj.id, this.selectFiveObj.id, this.selectSixObj.id);
			}
	    },
	    setSelectObj: function (index, obj) {
	    	if (index === 1) {
				this.selectOneObj = obj;
			}
			else if (index === 2) {
				this.selectTwoObj = obj;
			}
			else if (index === 3) {
				this.selectThreeObj = obj;
			}
			else if (index === 4) {
				this.selectFourObj = obj;
			}
			else if (index === 5) {
				this.selectFiveObj = obj;
			}
			else if (index === 6) {
				this.selectSixObj = obj;
			}
	    },
	    getWhiteItem: function () {
	    	var whiteItemHtml = '';
	    	var itemHeightStyle = this.options.itemHeight + this.options.cssUnit;
	    	var itemLi = '<li style="height: ' + itemHeightStyle +  '; line-height: ' + itemHeightStyle + '"></li>';
	    	whiteItemHtml += itemLi;
	    	if (this.options.itemShowCount > 3) {
	    		whiteItemHtml += itemLi;
	    	}
	    	if (this.options.itemShowCount > 5) {
	    		whiteItemHtml += itemLi;
	    	}
	    	if (this.options.itemShowCount > 7) {
	    		whiteItemHtml += itemLi;
	    	}
	    	return whiteItemHtml;
	    }, 
	    changeClassName: function (levelContainDom, plast) {
	    	var pdom;
	    	if (this.options.itemShowCount === 3) {
	    		pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')');
				pdom.classList.add('at');
	    	}
	    	else if (this.options.itemShowCount === 5) {
	    		pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')').classList.add('side1');
	    	}
	    	else if (this.options.itemShowCount === 7) {
	    		pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 1) + ')').classList.add('side2');
				levelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side2');
	    	}
	    	else if (this.options.itemShowCount === 9) {
	    		pdom = levelContainDom.querySelector('li:nth-child(' + (plast + 4) + ')');
				pdom.classList.add('at');
				levelContainDom.querySelector('li:nth-child(' + (plast + 3) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 2) + ')').classList.add('side2');
				levelContainDom.querySelector('li:nth-child(' + (plast + 5) + ')').classList.add('side1');
				levelContainDom.querySelector('li:nth-child(' + (plast + 6) + ')').classList.add('side2');
	    	}
	    	return pdom;
	    },
	    setBase: function () {
			if (this.options.cssUnit === 'rem') {
				var dltDom = document.documentElement;
				var dltStyle = window.getComputedStyle(dltDom, null);
				var dltFontSize = dltStyle.fontSize;
				try {
					this.baseSize = /\d+(?:\.\d+)?/.exec(dltFontSize)[0];
				}
				catch(e) {
					this.baseSize = 1;
				}
			}
			else {
				this.baseSize = 1;
			}
		},
		toggleClassList: function (dom) {
			Array.prototype.slice.call(dom.querySelectorAll('li')).forEach(function (v) {
				if (v.classList.contains('at')) {
					v.classList.remove('at');
				}
				else if (v.classList.contains('side1')) {
					v.classList.remove('side1');
				}
				else if (v.classList.contains('side2')) {
					v.classList.remove('side2');
				}
			})
		}
	}
	if (typeof module != 'undefined' && module.exports) {
		module.exports = IosSelect;
	}
	else if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return IosSelect;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	else {
		window.IosSelect = IosSelect;
	}
})();

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/_css-loader@0.28.11@css-loader/index.js!../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./index.less", function() {
			var newContent = require("!!../node_modules/_css-loader@0.28.11@css-loader/index.js!../node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./index.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosSelectDateModel; });
/**
 * Iosselect初始化实体
 * @class
 */
var IosSelectDateModel = /** @class */ (function () {
    function IosSelectDateModel() {
    }
    return IosSelectDateModel;
}());



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(1));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (process.env.NODE_ENV !== 'production') {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (process.env.NODE_ENV !== 'production'
            && reservedPropertyNames.indexOf(key) >= 0) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Inject */
/* unused harmony export Provide */
/* unused harmony export Model */
/* harmony export (immutable) */ __webpack_exports__["a"] = Prop;
/* harmony export (immutable) */ __webpack_exports__["b"] = Watch;
/* harmony export (immutable) */ __webpack_exports__["c"] = Emit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1_vue_class_component___default.a; });
/* unused harmony reexport Vue */
/* unused harmony reexport Mixins */
/** vue-property-decorator verson 7.0.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vue_class_component__["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}


/***/ })
/******/ ]);
});