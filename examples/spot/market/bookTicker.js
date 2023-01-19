'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.bookTicker().then(([error, data, response]) => console.log(error, data, response))

client.bookTicker('BTCUSDT').then(([error, data, response]) => console.log(error, data, response))

client.bookTicker('', ['BTCUSDT', 'BNBUSDT']).then(([error, data, response]) => console.log(error, data, response))
