/* global describe, it, expect */
const { nockPostMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#disableFastWithdraw', () => {
  it('should return success', () => {
    nockPostMock('/sapi/v1/account/disableFastWithdrawSwitch')(mockResponse)

    return SpotClient.disableFastWithdraw().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
