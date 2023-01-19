'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)
const email = 'sub.account@email.com'

client.subAccountLeverageToken(
  email, true
).then(([error, data, response]) => console.log(error, data, response))
