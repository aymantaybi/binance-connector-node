/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#futuresLoanWallet', () => {
  it('should get cross-collateral wallet', () => {
    nockMock('/sapi/v2/futures/loan/wallet')(mockResponse)

    return SpotClient.futuresLoanWallet().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
