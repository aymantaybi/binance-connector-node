'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.marginBorrow(
  'BNB', // asset
  0.1 // amount
).then(([error, data, response]) => console.log(error, data, response))
