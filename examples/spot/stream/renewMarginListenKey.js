'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const client = new Spot(apiKey)

client.renewMarginListenKey('').then(([error, data, response]) => console.log(error, data, response))
