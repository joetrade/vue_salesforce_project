/*
 * @Author: your name
 * @Date: 2021-04-13 18:15:12
 * @LastEditTime: 2021-04-14 16:42:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_salesforce_project\src\api\stomp.js
 */
import Stomp from 'stompjs'
import { MQTT_SERVICE, MQTT_USERNAME, MQTT_PASSWORD, MQTT_TOPIC } from '../config/mqtt'

let client = Stomp.client(MQTT_SERVICE)

function onConnect () {
    const headers = {
        login: MQTT_USERNAME,
        passcode: MQTT_PASSWORD,
        'host': 'vueandsalesforce'
    }
    client.connect(headers, onConnected, onFailed)
}

function onConnected (msg) {
    const topic = MQTT_TOPIC
    client.subscribe(topic, responseCallback, onFailed)
}

function responseCallback (msg) {
    console.log('MQ msg=>' + msg.body)
}

function onFailed (msg) {
    console.log('MQ Failed: ' + msg)
}

export { onConnect }
