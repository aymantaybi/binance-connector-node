/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#systemStatus', () => {
  it('should return system status', () => {
    nockMock('/sapi/v1/system/status')(mockResponse)

    return SpotClient.systemStatus().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
