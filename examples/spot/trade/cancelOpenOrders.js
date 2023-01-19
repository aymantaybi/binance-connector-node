'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

client.cancelOpenOrders('BNBUSDT', {
  recvWindow: 3000
}).then(([error, data, response]) => console.log(error, data, response))
