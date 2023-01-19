'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.marginMaxBorrowable(
  'BNB'
).then(([error, data, response]) => console.log(error, data, response))
