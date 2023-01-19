'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.miningHashrateResaleDetail(12345, 'test').then(([error, data, response]) => console.log(error, data, response))
