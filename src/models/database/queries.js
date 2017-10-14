const database = require('./connection')

const queries = {

  getCourses: () => {
    return database.any(`SELECT * FROM courses`)
  },

  getCourseByID: (courseID) => {
    return database.any(`SELECT * FROM courses WHERE id = $1`, [courseID])
  },

  createstudent: (name, email, password) => {
    return database.one(`INSERT INTO student (name, email, password)
      VALUES ($1, $2, $3) RETURNING *`, [name, email, password])
  },

  getstudentById: (studentID) => {
    return database.one('SELECT id, name, email, date_joined FROM student WHERE id = $1', [studentID])
  },

  getstudentByEmail: (email) => {
    return database.one('SELECT * FROM student WHERE email = $1', [email])
  },

  getThreeNewestReviews: () => {
    return database.any(`SELECT reviews.*, courses.title AS album_title, student.name AS student_name
      FROM reviews
      INNER JOIN courses ON reviews.album_id = courses.id
      INNER JOIN students ON reviews.student_id = student.id
      ORDER BY reviews.date_created DESC
      LIMIT 3`)
  },

  createReview: (content, album_id, student_id) => {
    return database.none(`INSERT INTO reviews (content, album_id, student_id) VALUES ($1, $2, $3)`, [content, album_id, student_id])
  },

  getReviewsByStudentId: (studentID) => {
    return database.any(`SELECT reviews.*, courses.title AS album_title, student.name AS student_name
      FROM reviews
      INNER JOIN student ON reviews.student_id = student.id
      INNER JOIN courses ON reviews.album_id = courses.id
      WHERE reviews.student_id = $1
      ORDER BY reviews.date_created DESC`, [studentID])
  },

  getReviewsByCourseId: (courseID) => {
    return database.any(`SELECT * FROM reviews WHERE album_id = $1`, [courseID])
  },

  getReviewsByCourseId: (courseID) => {
    return database.any(`SELECT reviews.id, reviews.content, reviews.album_id, reviews.student_id, reviews.date_created, courses.title AS album_title, student.name AS student_name FROM reviews
      INNER JOIN student ON reviews.student_id = student.id
      INNER JOIN courses ON reviews.album_id = courses.id
      WHERE reviews.album_id = $1
      ORDER BY reviews.date_created DESC`, [courseID])
  },

  deleteByReviewID: (reviewID) => {
    return database.none('DELETE FROM reviews WHERE id = $1', [reviewID]);
  }

}

module.exports = queries
