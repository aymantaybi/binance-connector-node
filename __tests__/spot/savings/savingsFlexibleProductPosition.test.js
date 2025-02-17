/* global describe, it, expect */
const {
  nockMock,
  buildQueryString,
  SpotClient
} = require('../../testUtils/testSetup')

const {
  mockResponse,
  asset,
  recvWindow
} = require('../../testUtils/mockData')

describe('#savingsFlexibleProductPosition', () => {
  it('should get all flexible product position', () => {
    nockMock('/sapi/v1/lending/daily/token/position')(mockResponse)

    return SpotClient.savingsFlexibleProductPosition().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
  it('should get flexible product position', () => {
    nockMock(`/sapi/v1/lending/daily/token/position?${buildQueryString({ asset, recvWindow })}`)(mockResponse)

    return SpotClient.savingsFlexibleProductPosition(asset, { recvWindow }).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
