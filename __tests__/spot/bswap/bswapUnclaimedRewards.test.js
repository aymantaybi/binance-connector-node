/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')

const {
  mockResponse
} = require('../../testUtils/mockData')

describe('#bswapUnclaimedRewards', () => {
  it('should get unclaimed rewards record', () => {
    nockMock('/sapi/v1/bswap/unclaimedRewards')(mockResponse)
    return SpotClient.bswapUnclaimedRewards().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
