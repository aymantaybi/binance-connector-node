/* global describe, it, expect */
const {
  nockMock,
  buildQueryString,
  SpotClient
} = require('../../testUtils/testSetup')

const {
  mockResponse,
  recvWindow
} = require('../../testUtils/mockData')

describe('#getOCOOrder', () => {
  it('should return oco order details when no parameter attached', () => {
    nockMock('/api/v3/orderList')(mockResponse)

    return SpotClient.getOCOOrder().then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })

  it('should return oco order details', () => {
    const parameters = {
      orderListId: 10,
      recvWindow
    }
    nockMock(`/api/v3/orderList?${buildQueryString(parameters)}`)(mockResponse)

    return SpotClient.getOCOOrder(parameters).then(([, data, response]) => {
      expect(response).toBeDefined()
      expect(data).toEqual(mockResponse)
    })
  })
})
