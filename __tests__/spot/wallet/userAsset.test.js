/* global describe, it, expect */
const { nockPostMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#userAsset', () => {
  it('should return assets', () => {
    nockPostMock('/sapi/v3/asset/getUserAsset')(mockResponse)

    return SpotClient.userAsset().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
