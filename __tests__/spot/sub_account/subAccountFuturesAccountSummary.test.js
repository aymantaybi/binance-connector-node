/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#subAccountFuturesAccountSummary', () => {
  it('should return sub account futures summary', () => {
    nockMock('/sapi/v1/sub-account/futures/accountSummary')(mockResponse)

    return SpotClient.subAccountFuturesAccountSummary().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
