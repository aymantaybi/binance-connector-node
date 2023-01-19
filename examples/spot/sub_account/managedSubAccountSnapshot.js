'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.managedSubAccountSnapshot(
  'alice@test.com',
  'SPOT'
).then(([error, data, response]) => console.log(error, data, response))
