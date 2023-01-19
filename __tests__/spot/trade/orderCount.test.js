/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#orderCount', () => {
  it('should return order count usage', () => {
    nockMock('/api/v3/rateLimit/order')(mockResponse)

    return SpotClient.orderCount().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
