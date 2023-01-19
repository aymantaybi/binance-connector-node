/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#bswapLiquidity', () => {
  it('should get swap liquidity', () => {
    nockMock('/sapi/v1/bswap/liquidity')(mockResponse)
    return SpotClient.bswapLiquidity().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
