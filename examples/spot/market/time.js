'use strict'

const Spot = require('../../../src/spot')

// how to set timeout in request
const client = new Spot(null, null,
  {
    baseURL: 'https://api.binance.com',
    timeout: 10000
  }
)

client.time()
  .then(([error, data, response]) => console.log(error, data, response))
