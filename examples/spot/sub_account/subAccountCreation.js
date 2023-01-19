'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountCreation(
  'account_name' // subAccountString
).then(([error, data, response]) => console.log(error, data, response))
