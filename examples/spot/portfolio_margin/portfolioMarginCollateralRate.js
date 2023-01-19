const Spot = require('../../../src/spot')

const apiKey = ''
const client = new Spot(apiKey)

client.portfolioMarginCollateralRate()
  .then(([error, data, response]) => console.log(error, data, response))
