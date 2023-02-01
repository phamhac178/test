const mongoose = require('mongoose')
const ThanhVien = require('../models/thanhvien.model')
module.exports = {
    createThanhVien: function (req, res) {
        const thanhvien = new ThanhVien({
            _id: mongoose.Types.ObjectId(),
            ...req.body,
        })
        return thanhvien
            .save()
            .then((newThanhVien) => {
                return res.status(201).json({
                    succes: true,
                    message: 'new create successfully',
                    thanhvien: newThanhVien,
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
    getAllThanhVIen: function (req, res) {
        ThanhVIen.find()
            .populate('user')
            .then((allThanhVIen) => {
                return res.status(200).json({
                    success: true,
                    message: 'A list of all ThanhVIen',
                    ThanhVIen: allThanhVIen,
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

    // get single ThanhVIen
    getSingleThanhVIen: function (req, res) {
        const id = req.params.ThanhVIenId
        ThanhVIen.findById(id)
            .then((singleThanhVIen) => {
                res.status(200).json({
                    success: true,
                    message: `More on ${singleThanhVIen.title}`,
                    ThanhVIen: singleThanhVIen,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'This ThanhVIen does not exist',
                    error: err.message,
                })
            })
    },

    // update ThanhVIen
    updateThanhVIen: function (req, res) {
        const id = req.params.ThanhVIenId
        const updateObject = req.body
        ThanhVIen.update({ _id: id }, { $set: updateObject })
            .exec()
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'ThanhVIen is updated',
                    updateThanhVIen: updateObject,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                })
            })
    },

    // delete a ThanhVIen
    deleteThanhVIen: function (req, res) {
        const id = req.params.ThanhVIenId
        ThanhVIen.findByIdAndRemove(id)
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