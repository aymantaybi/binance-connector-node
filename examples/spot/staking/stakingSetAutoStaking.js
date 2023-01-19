'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.stakingSetAutoStaking('STAKING', '1234', 'true', {
  recvWindow: 5000
})
  .then(([error, data, response]) => console.log(error, data, response))
