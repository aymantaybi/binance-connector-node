/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#futuresLoanInterestHistory', () => {
  it('should get cross collateral interest history', () => {
    nockMock('/sapi/v1/futures/loan/interestHistory')(mockResponse)

    return SpotClient.futuresLoanInterestHistory().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
