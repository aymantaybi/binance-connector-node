/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')

const {
  mockResponse,
  symbol,
  recvWindow
} = require('../../testUtils/mockData')

describe('#marginOpenOrders', () => {
  it('should return margin open orders when no parameter attached', () => {
    nockMock('/sapi/v1/margin/openOrders')(mockResponse)

    return SpotClient.marginOpenOrders().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return margin open orders', () => {
    const parameters = {
      symbol,
      recvWindow
    }
    nockMock(`/sapi/v1/margin/openOrders?${buildQueryString({ ...parameters })}`)(mockResponse)

    return SpotClient.marginOpenOrders(parameters).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
