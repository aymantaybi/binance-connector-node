'use strict'

const Spot = require('../../../src/spot')

const client = new Spot()

client.ping().then(([error, data, response]) => console.log(error, data, response))
