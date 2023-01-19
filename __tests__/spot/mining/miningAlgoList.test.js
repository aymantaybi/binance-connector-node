/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#miningAlgoList', () => {
  it('should return algorithm list', () => {
    nockMock('/sapi/v1/mining/pub/algoList')(mockResponse)

    return SpotClient.miningAlgoList().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
