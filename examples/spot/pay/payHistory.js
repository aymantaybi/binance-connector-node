'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.payHistory(
  {
    startTime: 1637570276000
  }
).then(([error, data, response]) => console.log(error, data, response))
