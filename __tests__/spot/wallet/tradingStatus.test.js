/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#tradingStatus', () => {
  it('should return trading status', () => {
    nockMock('/sapi/v1/account/apiTradingStatus')(mockResponse)

    return SpotClient.tradingStatus().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
