/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#futuresLoanLiquidationHistory', () => {
  it('should get cross collateral liquidation history', () => {
    nockMock('/sapi/v1/futures/loan/liquidationHistory')(mockResponse)

    return SpotClient.futuresLoanLiquidationHistory().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
