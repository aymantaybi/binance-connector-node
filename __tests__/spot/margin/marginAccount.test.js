/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#marginAccount', () => {
  it('should return margin account details', () => {
    nockMock('/sapi/v1/margin/account')(mockResponse)

    return SpotClient.marginAccount().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
