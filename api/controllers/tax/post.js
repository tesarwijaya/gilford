async function post(req, res) {
  const { body } = req

  const returned = await Tax.create(body)
    .intercept(err => err)
    .fetch()

  return res.ok(returned)
}

module.exports = post
