/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#subAccountSpotSummary', () => {
  it('should return sub account spot summary', () => {
    nockMock('/sapi/v1/sub-account/spotSummary')(mockResponse)

    return SpotClient.subAccountSpotSummary().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
