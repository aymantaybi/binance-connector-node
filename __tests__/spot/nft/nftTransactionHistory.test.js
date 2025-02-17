/* global describe, it, expect */
const MissingParameterError = require('../../../src/error/missingParameterError')
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse, startTime, endTime, limit, recvWindow } = require('../../testUtils/mockData')
const parameters = {
  startTime,
  endTime,
  limit,
  recvWindow
}

describe('#nftTransactionHistory', () => {
  it('missing orderType', () => {
    expect(() => {
      SpotClient.nftTransactionHistory('', { parameters })
    }).toThrow(MissingParameterError)
  })

  it('should fetch NFT transaction history', () => {
    const orderType = 0
    nockMock(`/sapi/v1/nft/history/transactions?${buildQueryString({ orderType, ...parameters })}`)(mockResponse)

    return SpotClient.nftTransactionHistory(orderType, parameters).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should fetch NFT transaction history without optional params', () => {
    const orderType = 0
    nockMock(`/sapi/v1/nft/history/transactions?${buildQueryString({ orderType })}`)(mockResponse)

    return SpotClient.nftTransactionHistory(orderType).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
