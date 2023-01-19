'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const client = new Spot(apiKey)

client.blvtInfo({ tokenName: 'BTCDOWN' })
  .then(([error, data, response]) => console.log(error, data, response))
