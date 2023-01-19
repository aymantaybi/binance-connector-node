'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.avgPrice('BTCUSDT').then(([error, data, response]) => console.log(error, data, response))
