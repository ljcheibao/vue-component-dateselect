import Vue from 'vue';
import VueDselect from "../dist/index.js";

new Vue({
  el: '#app',
  components: {
    VueDselect
  },
  data() {
    return {
      visible: true,
      options: {
        config: {
          level: 3,
          title: "请选择时间",
          sureText: "确定",
          closeText: "取消",
          showAnimate: true,
        },
        data: {
          currentDate: "2017-06-29",
          beginDate: "2000-01-01",
          endDate: "2018-08-29",
        }
      }
    }
  },
  methods: {
    confirmHandle: function (yearModel, monthModel, dayModel) {
      console.log(yearModel);
      console.log(monthModel);
      console.log(dayModel);
    }
  }
});