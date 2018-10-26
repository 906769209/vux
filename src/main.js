// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import Global from '../src/global'
import Vuex from 'vuex'


import {
  ToastPlugin
} from 'vux'
import {
  LoadingPlugin
} from 'vux'

Vue.use(VueRouter);
Vue.use(Vuex)

Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.prototype.$axios = axios; //注册axios
Vue.prototype.Global = Global.globalData; //全局data
Vue.prototype.validations = Global.validations; //验证
Vue.prototype.local = JSON.parse(localStorage.getItem(Global.globalData.appid)); //注册缓存用户信息
Vue.prototype.wx = Global.wxShare //wxjdk

//axios配置
axios.defaults.baseURL = 'http://sf.qianhai12315.com/bake_picture'; //接口地址
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //请求前数据格式
const routes = [{

    path: '/',
    redirect: "/index",
  },
  {
    path: '/index',
    component: resolve => require(['@/views/index'], resolve),
    name: "home",
  },
  {
    path: '/cs',
    component: resolve => require(['@/views/cs'], resolve),
    name: "cs",
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})


// FastClick.attach(document.body)

Vue.config.productionTip = false

// vuex
let store = new Vuex.Store({
  modules: {

  }
})
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    }
  }
});
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {
    isLoading: true
  })
  next()
})

router.afterEach((to) => {
  setTimeout(() => {
    store.commit('updateLoadingStatus', {
      isLoading: false
    })
  }, 350)
})




/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')