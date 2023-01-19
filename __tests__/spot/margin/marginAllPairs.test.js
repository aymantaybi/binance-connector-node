/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#marginAllPairs', () => {
  it('should all pairs details', () => {
    nockMock('/sapi/v1/margin/allPairs')(mockResponse)

    return SpotClient.marginAllPairs().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
