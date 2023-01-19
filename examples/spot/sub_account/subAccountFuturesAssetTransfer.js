'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountFuturesAssetTransfer(
  '',
  '', // sub email
  1, // type
  'USDT',
  '1' // amount
).then(([error, data, response]) => console.log(error, data, response))
