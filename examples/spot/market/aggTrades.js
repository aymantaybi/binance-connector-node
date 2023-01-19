'use strict'

const Spot = require('../../../src/spot')

// historicalTrades require API KEY
const apiKey = ''
const client = new Spot(apiKey, '')

client.aggTrades('BTCGSDT', { limit: 5 }).then(([error, data, response]) => console.log(error, data, response))
