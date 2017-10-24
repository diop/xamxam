const middlewares = {

sessionChecker: (request, response, next) => {
    if (!request.session.user) {
      request.sessionChecker = false
    } else {
      request.sessionChecker = true
    }
  }
}

module.exports = { sessionChecker }
