'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.getMarginOCOOrders({
  limit: 100
}).then(([error, data, response]) => console.log(error, data, response))
