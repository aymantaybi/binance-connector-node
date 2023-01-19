'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountUniversalTransfer(
  'SPOT', // fromAccountType
  'USDT_FUTURE', // toAccountType
  'USDT', // asset
  1 // amount
).then(([error, data, response]) => console.log(error, data, response))
