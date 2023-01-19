/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#marginDustLog', () => {
  it('should return margin dust log', () => {
    nockMock('/sapi/v1/margin/dribblet')(mockResponse)

    return SpotClient.marginDustLog().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
