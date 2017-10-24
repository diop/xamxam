const database = require('./database/queries')

// Database Processing

module.exports = {
  getAll: database.getCourses,
  getById: database.getCourseByID
}
