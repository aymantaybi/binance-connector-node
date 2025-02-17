/* global describe, it, expect */
const { nockMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#isolatedMarginAccountLimit', () => {
  it('should get isolated margin account limit', () => {
    nockMock('/sapi/v1/margin/isolated/accountLimit')(mockResponse)

    return SpotClient.isolatedMarginAccountLimit().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
}
)
