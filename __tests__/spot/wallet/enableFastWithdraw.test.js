/* global describe, it, expect */
const { nockPostMock, SpotClient } = require('../../testUtils/testSetup')
const { mockResponse } = require('../../testUtils/mockData')

describe('#enableFastWithdraw', () => {
  it('should return success', () => {
    nockPostMock('/sapi/v1/account/enableFastWithdrawSwitch')(mockResponse)

    return SpotClient.enableFastWithdraw().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
