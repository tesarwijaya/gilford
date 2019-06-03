const {
  getPriceSubTotal,
  getTaxSubTotal,
  getType,
  isRefundable,
  getTax
} = require('../../libs/tax')

async function get(req, res) {
  const taxes = await Tax.find()

  const returned = _constructBill(taxes)
  return res.ok(returned)
}

function _constructBill(taxes) {
  const items = taxes.map(row => {
    const tax = getTax(row.code, row.price)
    return {
      ...row,
      type: getType(row.code),
      refundable: isRefundable(row.code),
      tax,
      amount: row.price + tax
    }
  })

  const priceSubTotal = getPriceSubTotal(items)
  const taxSubTotal = getTaxSubTotal(items)

  return {
    priceSubTotal,
    taxSubTotal,
    Grantotal: priceSubTotal + taxSubTotal,
    items
  }
}

module.exports = get
