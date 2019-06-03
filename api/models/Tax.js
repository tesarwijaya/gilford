const Tax = {
  attributes: {
    name: { type: 'string', required: true },
    code: { type: 'number', required: true },
    price: { type: 'number', required: true }
  }
}

module.exports = Tax
