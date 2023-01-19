/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')
const DEFAULT_TYPE = 'FULL'

describe('#ticker24hr', () => {
  it('should return 24hr price for all pairs', () => {
    nockMock(`/api/v3/ticker/24hr?type=${DEFAULT_TYPE}`)(mockResponse)

    return SpotClient.ticker24hr().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return 24hr price for selective pairs', () => {
    const symbols = ['BTCUSDT', 'BNBUSDT']
    nockMock(`/api/v3/ticker/24hr?${buildQueryString({ symbols, type: DEFAULT_TYPE })}`)(mockResponse)

    return SpotClient.ticker24hr('', symbols).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return 24hr price', () => {
    const symbol = 'BTCUSDT'
    nockMock(`/api/v3/ticker/24hr?symbol=${symbol}&type=${DEFAULT_TYPE}`)(mockResponse)

    return SpotClient.ticker24hr(symbol).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return 24hr price with type = MINI', () => {
    const symbol = 'BTCUSDT'
    const type = 'MINI'
    nockMock(`/api/v3/ticker/24hr?symbol=${symbol}&type=${type}`)(mockResponse)

    return SpotClient.ticker24hr(symbol, [], type).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
