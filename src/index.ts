import "./index.less";
import Vue from "vue";
import IosSelect from "iosselect";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch
} from 'vue-property-decorator';
import { IosSelectDateModel } from "./IosSelectDateModel";
const Utils = require("heibao-utils");

@Component({
  template: require("./index.html")
})

/**
 * 滚轮日期选中组件
 * @class
 * @extends {Vue}
 */
export default class VueDateSelect extends Vue {

  /**
   * 设置每月对应的天数
   */
  private monthDays: any = {
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

  /**
   * 组件初始化可选项对象
   */
  @Prop()
  option: any;

  //配置项的copy副本
  tempOption: any = {
    config: {},
    data: {
      currentDate: "",
      beginDate: "",
      endDate: ""
    }
  }

  @Prop()
  value: boolean;

  //监听value值的变更
  @Watch("value")
  watchValueChange(newVal: any): void {
    this.visible = newVal;
  }

  //控制弹框的显示
  visible: boolean = this.value;

  /**
   * 计算属性，计算option的变化
   * @return {string} 返回空字符串
   */
  get dateSelectOption(): string {
    if (this.tempOption.data.beginDate != this.option.data.beginDate
      || this.tempOption.data.endDate != this.option.data.endDate
      || this.tempOption.data.currentDate != this.option.data.currentDate
      || this.tempOption.config.level != this.option.config.level) {
      this.tempOption = Object.assign({}, this.option);

      this.initialIosSelectDate(Object.assign({}, this.option));
    }
    return "";
  }

  /**
   * iosselect默认配置
   */
  private defaultConf: any = {
    container: 'container',// 容器class
    title: '',// 标题
    itemHeight: 40,// 每个元素的高度
    itemShowCount: 4,// 每一列显示元素个数，超出将隐藏
    level: 2,//默认是两级
    oneLevelId: 0,// 第一级默认值,
    twoLevelId: 0,//第二级默认值
    threeLevelId: 0,//第三级默认值
    callback: this.selectDateOk
  }

  /**
   * iosselect组件容器
   * @return {string} 返回容器类名
   */
  private get dateSelectContainer(): string {
    // @ts-ignore
    return this.defaultConf.container;
  }

  /**
   * 获取某个时间所在的月份总共有多少天
   * @param {Date} date 日期对象
   * @return {number} 返回获取到的该月总天数
   */
  private getMonthTotalDays(date: Date): number {
    let month: number = date.getMonth();
    let days: number = 0;
    //判断闰年跟平年
    if ((month + 1) == 2 && Utils.isLeapYear(date)) {
      this.monthDays[2] = 29;
    } else {
      this.monthDays[2] = 28;
    }
    days = this.monthDays[month + 1];
    return days;
  }

  /**
   * 初始化年数据
   * @param {IosSelectDateModel} dateModel 初始化日期对象
   * @return {Function} 返回选中年后的回调函数
   */
  yearData(dateModel: IosSelectDateModel): Function {
    return function (callback) {
      let yearData: Array<any> = [];
      let diffYears: number = Utils.diffDate("y", dateModel.beginDate, dateModel.endDate);
      let currentYear = dateModel.beginDate.getFullYear();
      for (let i = 0; i <= diffYears; i++) {
        let tempYear = currentYear;
        tempYear += i;
        yearData.push({
          id: tempYear,
          value: `${tempYear}年`
        });
      }
      callback(yearData);
    }
  }

  /**
   * 初始化月份数据
   * @param {IosSelectDateModel} dateModel 初始化日期对象
   * @return {Function} 返回选中月后的回调函数
   */
  monthData(dateModel: IosSelectDateModel): Function {
    return function (year, callback) {
      let monthData: Array<any> = [];
      let cycleBeginIndex = 1;
      let cycleEndIndex = 12;
      if (Utils.dateFormat("yyyy", dateModel.beginDate) == year.toString()) {
        cycleBeginIndex = dateModel.beginDate.getMonth() + 1;
      } else if (Utils.dateFormat("yyyy", dateModel.endDate) == year.toString()) {
        cycleEndIndex = dateModel.endDate.getMonth() + 1;
      }
      for (let i = cycleBeginIndex; i <= cycleEndIndex; i++) {
        monthData.push({
          id: i,
          value: `${i}月`
        });
      }
      callback(monthData);
    }
  }

  /**
   * 初始化天数据
   * @param {IosSelectDateModel} dateModel 初始化日期对象
   * @return {Function} 返回选中天后的回调函数
   */
  dateData(dateModel: IosSelectDateModel): Function {
    let _this = this;
    return function (year, month, callback) {
      let date = new Date(year, month - 1, 1);
      let dayData: Array<any> = [];
      let days = _this.getMonthTotalDays(date);
      let cycleBeginIndex = 1;
      let cycleEndIndex = days;
      if (Utils.dateFormat("yyyy-MM", dateModel.beginDate) == Utils.dateFormat("yyyy-MM", date)) {
        cycleBeginIndex = dateModel.beginDate.getDate();
      } else if (Utils.dateFormat("yyyy-MM", dateModel.endDate) == Utils.dateFormat("yyyy-MM", date)) {
        cycleEndIndex = dateModel.endDate.getDate();
      }
      for (let i = cycleBeginIndex; i <= cycleEndIndex; i++) {
        dayData.push({
          id: i,
          value: `${i}日`
        });
      }
      callback(dayData);
    }
  }

  /**
   * 初始化iosselectdate
   * @param {IosSelectDateModel} dateModel 初始组件数据实体
   * @param {any} config 初始化组件配置
   * @return {void} 无返回值
   */
  renderTpl(dateModel: IosSelectDateModel, config: any): void {
    if (config.level == 2) {//两级，只有年、月
      config.relation = [1];
      let iosSelect = new IosSelect(2, [
        this.yearData(dateModel),
        this.monthData(dateModel)
      ], config);
    }
    if (config.level == 3) {//三级，有年、月、日
      config.relation = [1, 1];
      let iosSelect = new IosSelect(3, [
        this.yearData(dateModel),
        this.monthData(dateModel),
        this.dateData(dateModel)
      ], config);
    }
  }

  /**
   * 初始化iosselct组件基础数据
   * @param {any} option 组件配置项
   * @return {void} 无返回值
   */
  initialIosSelectDate(option): void {
    let data = option.data, config = option.config;
    if (data.beginDate && data.endDate && data.currentDate) {
      let dateModel: IosSelectDateModel = new IosSelectDateModel();
      dateModel.beginDate = Utils.createCorrectDate(data.beginDate);
      dateModel.endDate = Utils.createCorrectDate(data.endDate);
      dateModel.currentDate = Utils.createCorrectDate(data.currentDate);
      config = config || {};
      //先进行config跟defaultConf的合并操作
      this.defaultConf = Object.assign({}, this.defaultConf, config);
      if (this.defaultConf.level == 3) {//三级，设置年、月、日默认值
        this.defaultConf.oneLevelId = dateModel.currentDate.getFullYear();
        this.defaultConf.twoLevelId = Number(Utils.dateFormat("M", dateModel.currentDate));
        this.defaultConf.threeLevelId = Number(Utils.dateFormat("d", dateModel.currentDate));
      }
      if (this.defaultConf.level == 2) {//二级，设置年、月默认值
        this.defaultConf.oneLevelId = dateModel.currentDate.getFullYear();
        this.defaultConf.twoLevelId = Number(Utils.dateFormat("M", dateModel.currentDate));
      }

      this.renderTpl(dateModel, this.defaultConf);
    }
  }

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
  @Emit("on-ok")
  selectDateOk(yearData, monthData, dayData, hourDay, minuteData, secondData): void {

  }
}