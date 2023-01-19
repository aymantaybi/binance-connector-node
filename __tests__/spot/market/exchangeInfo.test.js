/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#exchangeInfo', () => {
  it('should return exchange info', () => {
    nockMock('/api/v3/exchangeInfo')(mockResponse)

    return SpotClient.exchangeInfo().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return exchange info with symbol specified', () => {
    const symbol = 'BTCUSDT'
    nockMock(`/api/v3/exchangeInfo?symbol=${symbol}`)(mockResponse)

    return SpotClient.exchangeInfo({ symbol }).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return exchange info with symbols specified', () => {
    const symbols = ['BTCUSDT', 'ETCUSDT']
    nockMock(`/api/v3/exchangeInfo?${buildQueryString({ symbols })}`)(mockResponse)

    return SpotClient.exchangeInfo({ symbols }).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
