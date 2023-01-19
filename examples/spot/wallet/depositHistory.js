'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.depositHistory(
  {
    coin: 'BNB',
    status: 1
  }
).then(([error, data, response]) => console.log(error, data, response))
