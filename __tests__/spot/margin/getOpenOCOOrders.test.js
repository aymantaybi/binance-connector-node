/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#getMarginOpenOCOOrders', () => {
  it('should return open oco order list', () => {
    nockMock('/sapi/v1/margin/openOrderList')(mockResponse)

    return SpotClient.getMarginOpenOCOOrders().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
