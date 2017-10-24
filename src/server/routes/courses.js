const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const courses = require('../../models/courses')
const reviews = require('../../models/reviews')

const urlEncodedParser = bodyParser.urlencoded({ extended: false })

router.get('/:courseID', (request, response) => {
 const {courseID} = request.params
 const options = [ courses.getById(courseID), reviews.getByCourseId(courseID) ]

 Promise.all(options)
   .then(([course, reviews]) => {
     console.log('courses =====>', course, reviews)
     response.render('course', { course: course[0], reviews })
   })
   .catch(error => response.status(500).render('error', {error: error}))
})

module.exports = router
