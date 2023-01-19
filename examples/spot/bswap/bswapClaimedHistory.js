'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.bswapClaimedHistory({ poolId: 52, assetRewards: 'BNB', type: 1 })
  .then(([error, data, response]) => console.log(error, data, response))
