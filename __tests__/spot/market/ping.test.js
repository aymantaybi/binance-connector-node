/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')

describe('#ping', () => {
  it('should test API response', () => {
    nockMock('/api/v3/ping')({})

    return SpotClient.ping().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual({})
    })
  })
})
