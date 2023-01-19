'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.rollingWindowTicker('BTCUSDT').then(([error, data, response]) => console.log(error, data, response))

client.rollingWindowTicker('', ['BTCUSDT', 'BNBUSDT']).then(([error, data, response]) => console.log(error, data, response))

client.rollingWindowTicker('BTCUSDT', { windowSize: '1d' }).then(([error, data, response]) => console.log(error, data, response))
