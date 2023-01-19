'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.exchangeInfo().then(([error, data, response]) => console.log(error, data, response))
client.exchangeInfo({ symbol: 'btcusdt' }).then(([error, data, response]) => console.log(error, data, response))
client.exchangeInfo({ symbols: ['btcusdt', 'BNBUSDT'] }).then(([error, data, response]) => console.log(error, data, response))
