'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.subAccountTransferHistory(
  {
    toEmail: 'alice@test.com'
  }
).then(([error, data, response]) => console.log(error, data, response))
