'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.marginTransferHistory(
  {
    asset: 'BNB',
    type: 'ROLL_IN',
    size: 10
  }
).then(([error, data, response]) => console.log(error, data, response))
