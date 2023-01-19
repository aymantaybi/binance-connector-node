'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.subAccountApiDeleteIp(
  'alice@test.com',
  'subAccountApiKey',
  '1.2.3.4'
).then(([error, data, response]) => console.log(error, data, response))
