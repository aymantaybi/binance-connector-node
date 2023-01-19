'use strict'

const Spot = require('../../../src/spot')

// historicalTrades require API KEY
const apiKey = ''
const client = new Spot(apiKey, '')

client.historicalTrades('BTCUSDT', { limit: 5 }).then(([error, data, response]) => console.log(error, data, response))
  .catch(error => client.logger.error(error.message))
