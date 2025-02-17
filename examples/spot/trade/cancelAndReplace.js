'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

client.cancelAndReplace('BNBUSDT', 'BUY', 'LIMIT', 'STOP_ON_FAILURE', {
  price: '10',
  quantity: 1,
  timeInForce: 'GTC',
  cancelOrderId: 12
}).then(([error, data, response]) => console.log(error, data, response))
