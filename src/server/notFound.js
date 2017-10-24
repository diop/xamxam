module.exports = (request, response) => {
  response.status(404).render('Resource not found')
}
