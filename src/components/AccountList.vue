<!--
 * @Author: your name
 * @Date: 2021-04-08 17:30:28
 * @LastEditTime: 2021-04-14 15:47:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_salesforce_project\src\components\AccountList.vue
-->
<template>
  <div>
    <div class="slds-page-header slds-page-header_vertical">
      <div class="slds-media slds-has-divider_bottom-space">
        <div class="slds-media__body">
          <h1 class="slds-page-header__title">Account List Component</h1>
        </div>
      </div>
      <ul>
        <li v-for="account in accounts" :key="account.id">
          <router-link :to="account.id">{{ account.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { onConnect } from '../units/mq'
export default {
  computed: {
    accounts () { return this.$store.state.accounts }
  },
  created () {
    if (!this.accounts) this.$store.dispatch('getAllAccounts')
    console.log(this.accounts)
    onConnect()
  }
}
</script>
