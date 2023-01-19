'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.stakingPurchaseProduct('STAKING', 'Axs*90', 10.1, {
  recvWindow: 5000
})
  .then(([error, data, response]) => console.log(error, data, response))
