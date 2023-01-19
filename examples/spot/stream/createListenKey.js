'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const client = new Spot(apiKey)

client.createListenKey().then(([error, data, response]) => console.log(error, data, response))
