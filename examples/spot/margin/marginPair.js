'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const client = new Spot(apiKey)

client.marginPair(
  'BNBUSDT'
).then(([error, data, response]) => console.log(error, data, response))
