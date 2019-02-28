// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios";
import Vuex from "vuex";
import VueAMap  from "vue-amap";


Vue.use(Vuex);
Vue.use(VueAMap );
Vue.prototype.Axios = Axios;

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});

let store = new Vuex.Store({
  //初始值 初始状态
  state : {
    num : 0
  },
  // 定义将来要做的事
  mutations : {
    addCartCount(state){
      state.num ++;
    },
    reduceCartCount(state){
      state.num --;
    }
  }
});

//element-ui
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import PddHd from "./components/comment/pddhd";
import PddFt from "./components/comment/pddft";
import CateTitle from "./components/comment/cateTitle";
import Show from "./components/show/show";
import Banner from "./components/banner/banner";
import Category from "./components/category/category";
import CateNav from "./components/shopdetail/cateNav";
import CateInfo from "./components/shopdetail/cateInfo";
import List from "./components/shopdetail/list";
import PageTitle from "./components/comment/pagetitle";
import myCon from "./components/my/mycon";
import bivarCon from "./components/map/bivarcon";

Vue.component("pddHd",PddHd);
Vue.component("pddFt",PddFt);
Vue.component("cateTitle",CateTitle);
Vue.component("shopShow",Show);
Vue.component("banner",Banner);
Vue.component("category",Category);
Vue.component("cateNav",CateNav);
Vue.component("cateInfo",CateInfo);
Vue.component("list",List);
Vue.component("pageTitle",PageTitle);
Vue.component("myCon",myCon);
Vue.component("bivarCon",bivarCon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
