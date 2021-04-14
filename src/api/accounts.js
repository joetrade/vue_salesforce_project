/*
 * @Author: your name
 * @Date: 2021-04-09 19:20:34
 * @LastEditTime: 2021-04-13 18:21:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_salesforce_project\src\api\accounts.js
 */
import LCC from 'lightning-container'

const _accounts = [
    { id: '1', name: 'Account 1' },
    { id: '2', name: 'Account 2' },
    { id: '3', name: 'Account 3' }
  ]
export default {
    getAccounts (callback) {
        console.log('2222')
        console.log(process.env.NODE_ENV)
        if (process.env.NODE_ENV === 'production') {
          LCC.callApex(
            'VueAccountController.getAccounts',
            (result, event) => {
                console.log('3333')
                console.log(result)
                console.log(event.status)
              if (event.status) {
                callback(result.map(account => {
                  return {
                    id: account.Id,
                    name: account.Name,
                    type: account.Type,
                    numberOfEmployees: account.NumberOfEmployees
                  }
                }))
              } else if (event.type === 'exception') {
                console.log(event.message + ' : ' + event.where)
              } else {
                console.log('Unknown Error', event)
              }
            },
            {escape: false}
          )
        } else {
          setTimeout(() => callback(_accounts), 100)
        }
        // setTimeout(() => callback(_accounts), 100)
      }
}
