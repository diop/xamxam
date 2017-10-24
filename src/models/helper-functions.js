const bcrypt = require('bcrypt')
const saltRounds = 10

const helperFunctions = {

  isEmpty: (name, email, password) => {
    return (name === '' || email === '' || password === '')
  },

  encryptPassword: (plainTextPassword) => {
    return bcrypt.hash(plainTextPassword, saltRounds)
  },

  comparePassword: (plainTextPassword, hashedPassword) => {
    return bcrypt.compare(plainTextPassword, hashedPassword)
  },

  signInUser: (user, request) => {
    request.session.user = user
  },

  destroyUser: (request) => {
    request.session = null
  },

  createUserSession: (session) => ({
    id: session.id,
    name: session.name,
    email: session.email,
    date_joined: date_joined
  })

}

module.exports = helperFunctions
