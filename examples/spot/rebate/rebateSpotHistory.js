'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.rebateSpotHistory({ startTime: 1636541539000, endTime: 1638442339000 }).then(([error, data, response]) => console.log(error, data, response))
