const mongoose = require('mongoose')
const HoatDong = require('../models/HoatDong.model')
module.exports = {
    // creat hoat dong
    createHoatDong: function (req, res) {
        const hoatdong = new HoatDong({
            _id: mongoose.Types.ObjectId(),
            ...req.body,
        })
        return hoatdong
            .save()
            .then((newHoatDong) => {
                return res.status(201).json({
                    succes: true,
                    message: 'new create successfully',
                    hoatdong: newHoatDong,
                })
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({
                    succes: false,
                    message: "error",
                    error: error.message,
                })
            })
    },
    // get
    getAllCourse: function (req, res) {
        Course.find()
          .populate('user')
          .then((allCourse) => {
            return res.status(200).json({
              success: true,
              message: 'A list of all course',
              Course: allCourse,
            })
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: 'Server error. Please try again.',
              error: err.message,
            })
          })
      },
    
      // get single course
      getSingleCourse: function (req, res) {
        const id = req.params.courseId
        Course.findById(id)
          .then((singleCourse) => {
            res.status(200).json({
              success: true,
              message: `More on ${singleCourse.title}`,
              Course: singleCourse,
            })
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: 'This course does not exist',
              error: err.message,
            })
          })
      },
    
      // update course
      updateCourse: function (req, res) {
        const id = req.params.courseId
        const updateObject = req.body
        Course.update({ _id: id }, { $set: updateObject })
          .exec()
          .then(() => {
            res.status(200).json({
              success: true,
              message: 'Course is updated',
              updateCourse: updateObject,
            })
          })
          .catch((err) => {
            res.status(500).json({
              success: false,
              message: 'Server error. Please try again.',
            })
          })
      },
    
      // delete a course
      deleteCourse: function (req, res) {
        const id = req.params.courseId
        Course.findByIdAndRemove(id)
          .exec()
          .then(() =>
            res.status(204).json({
              success: true,
            })
          )
          .catch((err) =>
            res.status(500).json({
              success: false,
            })
          )
      },
    }
    
}