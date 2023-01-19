'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.withdrawHistory(
  {
    coin: 'BNB',
    status: 6
  }
).then(([error, data, response]) => console.log(error, data, response))
