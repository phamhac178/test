const express = require('express')
const {
  createCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
} = require('../controllers/course')
const { createUser } = require('../controllers/user')

const router = express.Router()

// Courses
router.post('/courses', createCourse)
router.get('/courses', getAllCourse)
router.get('/courses/:courseId', getSingleCourse)
router.patch('/courses/:courseId', updateCourse)
router.delete('/courses/:courseId', deleteCourse)

// Users
router.post('/users', createUser)

module.exports = router
