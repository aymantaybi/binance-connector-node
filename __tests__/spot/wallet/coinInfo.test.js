/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#coinInfo', () => {
  it('should return coin information', () => {
    nockMock('/sapi/v1/capital/config/getall')(mockResponse)

    return SpotClient.coinInfo().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
