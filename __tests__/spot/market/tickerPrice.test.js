/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#tickerPrice', () => {
  it('should return all ticker price', () => {
    nockMock('/api/v3/ticker/price')(mockResponse)

    return SpotClient.tickerPrice().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return ticker price for selective pairs', () => {
    const symbols = ['BTCUSDT', 'BNBUSDT']
    nockMock(`/api/v3/ticker/price?${buildQueryString({ symbols })}`)(mockResponse)

    return SpotClient.tickerPrice('', symbols).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return ticker price', () => {
    const symbol = 'BTCUSDT'
    nockMock(`/api/v3/ticker/price?symbol=${symbol}`)(mockResponse)

    return SpotClient.tickerPrice(symbol).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
