'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

client.newOCOOrder('BNBUSDT', 'BUY', 1, 10, 12, {
  listClientOrderId: 'my_oco_order',
  stopLimitPrice: 13,
  stopLimitTimeInForce: 'GTC'
}).then(([error, data, response]) => console.log(error, data, response))
