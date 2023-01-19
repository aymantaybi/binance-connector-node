'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''

const client = new Spot(apiKey, apiSecret)

client.subAccountApiGetIpRestriction(
  'alice@test.com',
  'subAccountApiKey'
).then(([error, data, response]) => console.log(error, data, response))
