'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.miningWorker('sha256', 'test', 'aa').then(([error, data, response]) => console.log(error, data, response))
