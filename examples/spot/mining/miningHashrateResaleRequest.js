'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.miningHashrateResaleRequest('user_name', 'sha256', 1617659086000,
  1617659096000, 'user_name2', 100)
  .then(([error, data, response]) => console.log(error, data, response))
