const assert = require('assert')

const {
  getPriceSubTotal,
  getTaxSubTotal,
  getType,
  isRefundable,
  getTax
} = require('../../../../api/libs/tax')

describe('Tax Libraries', () => {
  describe('getPriceSubTotal()', () => {
    it('should return total of price on given bill', () => {
      const items = [
        {
          'id': 1,
          'name': 'Movie',
          'code': 3,
          'price': 150,
          'type': 'Entertainment',
          'refundable': false,
          'tax': 0.5,
          'amount': 150.5
        },
        {
          'createdAt': 1559490100770,
          'updatedAt': 1559490100770,
          'id': 2,
          'name': 'Big Mac',
          'code': 1,
          'price': 1000,
          'type': 'Food & Beverages',
          'refundable': true,
          'tax': 100,
          'amount': 1100
        },
        {
          'createdAt': 1559490127979,
          'updatedAt': 1559490127979,
          'id': 3,
          'name': 'Lucky Stretch',
          'code': 2,
          'price': 1000,
          'type': 'Tobacco',
          'refundable': false,
          'tax': 30,
          'amount': 1030
        }
      ]

      assert.equal(getPriceSubTotal(items), 2150)
    })

    it('should return 0 on empty bill', () => {
      const items = []

      assert.equal(getPriceSubTotal(items), 0)
    })
  })

  describe('getTaxSubTotal()', () => {
    it('should return total of tax on given bill', () => {
      const items = [
        {
          'id': 1,
          'name': 'Movie',
          'code': 3,
          'price': 150,
          'type': 'Entertainment',
          'refundable': false,
          'tax': 0.5,
          'amount': 150.5
        },
        {
          'createdAt': 1559490100770,
          'updatedAt': 1559490100770,
          'id': 2,
          'name': 'Big Mac',
          'code': 1,
          'price': 1000,
          'type': 'Food & Beverages',
          'refundable': true,
          'tax': 100,
          'amount': 1100
        },
        {
          'createdAt': 1559490127979,
          'updatedAt': 1559490127979,
          'id': 3,
          'name': 'Lucky Stretch',
          'code': 2,
          'price': 1000,
          'type': 'Tobacco',
          'refundable': false,
          'tax': 30,
          'amount': 1030
        }
      ]

      assert.equal(getTaxSubTotal(items), 130.5)
    })

    it('should return 0 on empty bill', () => {
      const items = []

      assert.equal(getTaxSubTotal(items), 0)
    })
  })

  describe('getType()', () => {
    const FOOD_AND_BEVERAGE = 1
    const TOBACCO = 2
    const ENTERTAINMENT = 3

    it('should return type of FOOD_AND_BEVERAGE tax by given code: 1', () => {
      assert.equal(getType(FOOD_AND_BEVERAGE), 'Food & Beverages')
    })

    it('should return type of TOBACCO tax by given code: 2', () => {
      assert.equal(getType(TOBACCO), 'Tobacco')
    })

    it('should return type of ENTERTAINMENT tax by given code 3', () => {
      assert.equal(getType(ENTERTAINMENT), 'Entertainment')
    })

    it('should return type of unknown type tax by given any invalid code', () => {
      assert.equal(getType(1000), 'Unknown Type')
    })
  })

  describe('isRefundable()', () => {
    const FOOD_AND_BEVERAGE = 1
    const TOBACCO = 2
    const ENTERTAINMENT = 3

    it('should return true if FOOD AND BAVERAGE code is given', () => {
      assert.equal(isRefundable(FOOD_AND_BEVERAGE), true)
    })

    it('should return false if TOBACCO code is given', () => {
      assert.equal(isRefundable(TOBACCO), false)
    })

    it('should return false if ENTERTAINMENT code is given', () => {
      assert.equal(isRefundable(ENTERTAINMENT), false)
    })

    it('should return false if UNKNOWN TYPE code is given', () => {
      assert.equal(isRefundable(1000), false)
    })
  })

  describe('getTax()', () => {
    const FOOD_AND_BEVERAGE = 1
    const TOBACCO = 2
    const ENTERTAINMENT = 3

    it('should return 10 % of price if FOOD AND BAVERAGE code is given', () => {
      assert.equal(getTax(FOOD_AND_BEVERAGE, 1000), 100)
    })

    it('should return 10 + (2% of Price) if TOBACCO code is given', () => {
      assert.equal(getTax(TOBACCO, 1000), 30)
    })

    it('should return 0 if ENTERTAINMENT code is given and the price is below 100', () => {
      assert.equal(getTax(ENTERTAINMENT, 99), 0)
    })

    it('should return 1% of (Price - 100) if ENTERTAINMENT code is given and the price is above or equal to 100', () => {
      assert.equal(getTax(ENTERTAINMENT, 1000), 9)
    })

    it('should return 0 if UNKNOWN TYPE code is given', () => {
      assert.equal(getTax(1000, 1000), 0)
    })
  })
})
