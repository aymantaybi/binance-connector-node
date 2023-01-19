'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountDepositAddress(
  '', // sub email
  'BNB'
).then(([error, data, response]) => console.log(error, data, response))
