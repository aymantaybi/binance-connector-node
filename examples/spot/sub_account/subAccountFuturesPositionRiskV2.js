'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountFuturesPositionRiskV2(
  'alice@test.com', // email
  2 // futuresType
).then(([error, data, response]) => console.log(error, data, response))
