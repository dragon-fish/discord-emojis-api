const axios = require('axios')

module.exports = async (req, res) => {
  const { id } = req.query
  if (!id || !/^[0-9]+$/.test(id)) {
    res.status(404).send({
      error: 'Invalid id',
    })
    return
  }
  axios
    .get('https://cdn.discordapp.com/emojis/' + id + '.png', {
      responseType: 'arraybuffer',
    })
    .then(
      ({ data }) => {
        res.setHeader('Content-Type', 'image/png')
        res.status(200).send(Buffer.from(data, 'base64'))
      },
      (err) => {
        res.status(503).send(err)
      }
    )
}
