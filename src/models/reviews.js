const database = require('./database/queries')

// Database Processing

module.exports = {
  getThreeNewest: database.getThreeNewestReviews,
  getByStudentId: database.getReviewsByStudentId,
  getByCourseId: database.getReviewsByCourseId,
}
