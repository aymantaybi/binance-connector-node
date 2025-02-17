/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#miningCoinList', () => {
  it('should return coin list', () => {
    nockMock('/sapi/v1/mining/pub/coinList')(mockResponse)

    return SpotClient.miningCoinList().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
