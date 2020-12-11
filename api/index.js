module.exports = (req, res) => {
  res.send({
    usage: {
      emojis: '/api/emojis/{id}',
      index: '/api/{id}',
      get: '/api/get?id={id}',
    },
  })
}
