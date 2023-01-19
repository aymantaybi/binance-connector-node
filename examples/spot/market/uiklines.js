'use strict'

const Spot = require('../../../src/spot')

const client = new Spot('', '', {
  baseURL: 'http://testnet.binance.vision'
})

client.uiklines('BTCUSDT', '1m', { limit: 5 }).then(([error, data, response]) => console.log(error, data, response))
  .catch(error => client.logger.error(error.message))
