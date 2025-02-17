/* global describe, it, expect */
const { nockMock, buildQueryString, SpotClient } = require('../../testUtils/testSetup')
const {
  mockResponse,
  recvWindow
} = require('../../testUtils/mockData')

describe('#apiPermissions', () => {
  it('should return permissions of the api key', () => {
    nockMock('/sapi/v1/account/apiRestrictions')(mockResponse)

    return SpotClient.apiPermissions().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return permissions of the api key given recvWindow', () => {
    nockMock(`/sapi/v1/account/apiRestrictions?${buildQueryString({ recvWindow })}`)(mockResponse)

    return SpotClient.apiPermissions({ recvWindow }).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
