'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.trades('BTCUSDT', { limit: 5 }).then(([error, data, response]) => console.log(error, data, response))
