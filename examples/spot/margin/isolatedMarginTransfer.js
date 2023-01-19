'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.isolatedMarginTransfer(
  'BNB',
  'BNBUSDT',
  'SPOT',
  'ISOLATED_MARGIN',
  1
).then(([error, data, response]) => console.log(error, data, response))
