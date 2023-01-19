'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.ticker24hr().then(([error, data, response]) => console.log(error, data, response))

client.ticker24hr('BTCUSDT').then(([error, data, response]) => console.log(error, data, response))

client.ticker24hr('', ['BTCUSDT', 'BNBUSDT']).then(([error, data, response]) => console.log(error, data, response))

client.ticker24hr('BTCUSDT', [], 'MINI').then(([error, data, response]) => console.log(error, data, response))
