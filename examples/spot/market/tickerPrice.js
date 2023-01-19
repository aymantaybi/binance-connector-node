'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.tickerPrice().then(([error, data, response]) => console.log(error, data, response))

client.tickerPrice('BTCUSDT').then(([error, data, response]) => console.log(error, data, response))

client.tickerPrice('', ['BTCUSDT', 'BNBUSDT']).then(([error, data, response]) => console.log(error, data, response))
