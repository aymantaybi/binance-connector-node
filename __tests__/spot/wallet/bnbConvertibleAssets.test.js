/* global describe, it, expect */
const { nockPostMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse, recvWindow } = require('../../testUtils/mockData')

describe('# bnbConvertibleAssets', () => {
  it('should return bnb convertible assets with recvWindow', () => {
    const parameters = { recvWindow }

    nockPostMock(`/sapi/v1/asset/dust-btc?${buildQueryString(parameters)}`)(mockResponse)

    return SpotClient.bnbConvertibleAssets(parameters).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return bnb convertible assets', () => {
    nockPostMock(`/sapi/v1/asset/dust-btc?${buildQueryString()}`)(mockResponse)

    return SpotClient.bnbConvertibleAssets().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
