const express = require('express')
const router = express.Router()
const courses = require('../../models/courses')
const reviews = require('../../models/reviews')

router.get('/', (request, response) => {
  const options = [courses.getAll(), reviews.getThreeNewest()]
  Promise.all(options)
    .then( ([courses, reviews]) => {
      console.log('succesful')
      response.render('index', {courses, reviews})
    })
    .catch((err) => {
      console.log(err)
      response.status(500).render('error', { error: err})
    })
})

module.exports = router
