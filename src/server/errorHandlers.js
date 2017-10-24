module.exports = (error, response, request, next) => {
  response.render('error', {error: error})
}
