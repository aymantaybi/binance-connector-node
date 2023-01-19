'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.stakingRedeemProduct('STAKING', 'Axs*90', {
  recvWindow: 5000
})
  .then(([error, data, response]) => console.log(error, data, response))
