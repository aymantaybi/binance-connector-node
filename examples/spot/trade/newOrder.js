'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
  price: '10',
  quantity: 1,
  timeInForce: 'GTC'
}).then(([error, data, response]) => console.log(error, data, response))
