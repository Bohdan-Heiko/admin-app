module.exports = (req, res, next) => {
  res.header('Content-Range', 'posts 1-20/20')
  next()
}