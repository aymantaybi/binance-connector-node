'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountFuturesTransfer(
  '', // sub email
  'USDT',
  '1', // amount
  1 // type
).then(([error, data, response]) => console.log(error, data, response))
