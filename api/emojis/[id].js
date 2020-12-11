const getImg = require('node-base64-image').encode

module.exports = async (req, res) => {
  const { id } = req.query
  if (!id || !/^[0-9]+$/.test(id)) {
    res.status(404).send({
      error: 'Invalid id',
    })
    return
  }
  getImg('https://cdn.discordapp.com/emojis/' + id + '.png').then(
    img => {
      res.setHeader('Content-Type', 'image/png')
      res.status(200).send(img)
    },
    err => {
      res.status(503).send(err)
    }
  )
}
