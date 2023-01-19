'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' })

client.getOCOOrders({
  limit: 100
}).then(([error, data, response]) => console.log(error, data, response))
