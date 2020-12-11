module.exports = (req, res) => {
  const { id } = req.query
  res.redirect(`/api/emojis/${id}`)
}
