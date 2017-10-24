const database = require('./connection')

const queries = {

  getCourses: () => {
    return database.any(`SELECT * FROM courses`)
  },

  getCourseByID: (courseID) => {
    return database.any(`SELECT * FROM courses WHERE id = $1`, [courseID])
  },

  createUser: (name, email, password) => {
    return database.one(`INSERT INTO students (name, email, password)
      VALUES ($1, $2, $3) RETURNING *`, [name, email, password])
  },

  getUserById: (studentID) => {
    return database.one('SELECT id, name, email, date_joined FROM students WHERE id = $1', [studentID])
  },

  getUserByEmail: (email) => {
    return database.one('SELECT * FROM students WHERE email = $1', [email])
  },

  getThreeNewestReviews: () => {
    return database.any(`SELECT reviews.*, courses.title AS course_title, students.name AS student_name
      FROM reviews
      INNER JOIN courses ON reviews.course_id = courses.id
      INNER JOIN students ON reviews.student_id = students.id
      ORDER BY reviews.date_created DESC
      LIMIT 3`)
  },

  createReview: (content, course_id, student_id) => {
    return database.none(`INSERT INTO reviews (content, course_id, student_id) VALUES ($1, $2, $3)`, [content, course_id, student_id])
  },

  getReviewsByUserId: (studentID) => {
    return database.any(`SELECT reviews.*, courses.title AS course_title, students.name AS student_name
      FROM reviews
      INNER JOIN students ON reviews.student_id = students.id
      INNER JOIN courses ON reviews.course_id = courses.id
      WHERE reviews.student_id = $1
      ORDER BY reviews.date_created DESC`, [studentID])
  },

  getReviewsByCourseId: (courseId) => {
    return database.any(`SELECT * FROM reviews WHERE course_id = $1`, [courseId])
  },

  getReviewsByCourseId: (courseID) => {
    return database.any(`SELECT reviews.id, reviews.content, reviews.course_id, reviews.student_id, reviews.date_created, courses.title AS course_title, students.name AS student_name FROM reviews
      INNER JOIN students ON reviews.student_id = students.id
      INNER JOIN courses ON reviews.course_id = courses.id
      WHERE reviews.course_id = $1
      ORDER BY reviews.date_created DESC`, [courseID])
  },

  deleteByReviewID: (reviewID) => {
    return database.none('DELETE FROM reviews WHERE id = $1', [reviewID]);
  }

}

module.exports = queries
