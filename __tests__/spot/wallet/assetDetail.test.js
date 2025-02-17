/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse, recvWindow } = require('../../testUtils/mockData')

describe('#assetDetail', () => {
  it('should return asset details with no parameter attached', () => {
    nockMock('/sapi/v1/asset/assetDetail')(mockResponse)

    return SpotClient.assetDetail().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return asset details', () => {
    nockMock(`/sapi/v1/asset/assetDetail?${buildQueryString({ recvWindow })}`)(mockResponse)

    return SpotClient.assetDetail({ recvWindow }).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
