const FOOD_AND_BEVERAGE = 1
const TOBACCO = 2
const ENTERTAINMENT = 3

function getPriceSubTotal(items) {
  return items.reduce((acc, value) => acc + value.price, 0)
}

function getTaxSubTotal(items) {
  return items.reduce((acc, value) => acc + value.tax, 0)
}

function getType(code) {
  switch (code){
    case FOOD_AND_BEVERAGE:
      return 'Food & Beverages'
    case TOBACCO:
      return 'Tobacco'
    case ENTERTAINMENT:
      return 'Entertainment'
    default:
      return 'Unknown Type'
  }
}

function isRefundable(code) {
  switch (code){
    case FOOD_AND_BEVERAGE:
      return true
    case TOBACCO:
      return false
    case ENTERTAINMENT:
      return false
    default:
      return false
  }
}

function getTax(code, price) {
  switch (code){
    case FOOD_AND_BEVERAGE:
      return 0.1 * price
    case TOBACCO:
      return 10 + ( 0.02 * price )
    case ENTERTAINMENT:
      return price >= 100 ? ( price - 100 ) * 0.01 : 0
    default:
      return 0
  }
}

module.exports = {
  getPriceSubTotal,
  getTaxSubTotal,
  getType,
  isRefundable,
  getTax
}
