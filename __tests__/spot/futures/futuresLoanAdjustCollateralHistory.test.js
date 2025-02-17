/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#futuresLoanAdjustCollateralHistory', () => {
  it('should get adjust cross collateral LTV history', () => {
    nockMock('/sapi/v1/futures/loan/adjustCollateral/history')(mockResponse)

    return SpotClient.futuresLoanAdjustCollateralHistory().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
