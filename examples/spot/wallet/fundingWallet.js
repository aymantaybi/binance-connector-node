'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.fundingWallet({ asset: 'BNB' })
  .then(([error, data, response]) => console.log(error, data, response))
