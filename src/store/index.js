/*
 * @Author: your name
 * @Date: 2021-04-09 19:21:26
 * @LastEditTime: 2021-04-12 15:58:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_salesforce_project\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import accountAPI from '../api/accounts'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    accounts: null
  },
  getters: {
    getAccount: (state, {dispatch}) => id => {
        return state.accounts ? state.accounts.find(account => account.id === id) : {}
      }
  },
  mutations: {
    setAccounts: (state, payload) => { state.accounts = payload }
  },
  actions: {
    getAllAccounts: ({commit}) => {
        accountAPI.getAccounts(accounts => {
          commit('setAccounts', accounts)
        })
      }
  }
})
