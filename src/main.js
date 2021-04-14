/*
 * @Author: your name
 * @Date: 2021-04-08 15:00:16
 * @LastEditTime: 2021-04-09 19:22:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue_salesforce_project\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
