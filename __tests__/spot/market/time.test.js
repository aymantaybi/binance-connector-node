/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#time', () => {
  it('should return server time', () => {
    nockMock('/api/v3/time')(mockResponse)

    return SpotClient.time().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
