const mongoose = require('mongoose')
const ThanhVien = require('../models/thanhvien.model')
module.exports = {
    createThanhVien: function (req, res) {
        const thanhvien = new ThanhVien({
            hoTen: req.body.hoTen,
            gioiTinh: req.body.gioiTinh,
            ngaySinh: req.body.ngaySinh,
            email: req.body.email,
            soDienThoai: req.body.soDienThoai,
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
    getAllThanhVien: function (req, res) {
        ThanhVien.find()
            .then((allThanhVien) => 
            res.render.
            {
                return res.status(200).json({
                    success: true,
                    message: 'A list of all ThanhVien',
                    ThanhVien: allThanhVien,
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

    // get single ThanhVien
    getSingleThanhVien: function (req, res) {
        const id = req.params.ThanhVienId
        ThanhVien.findById(id)
            .then((singleThanhVien) => {
                res.status(200).json({
                    success: true,
                    message: `More on ${singleThanhVien.title}`,
                    ThanhVien: singleThanhVien,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'This ThanhVien does not exist',
                    error: err.message,
                })
            })
    },

    // update ThanhVien
    updateThanhVien: function (req, res) {
        const id = req.params.ThanhVienId
        const updateObject = req.body
        ThanhVien.update({ _id: id }, { $set: updateObject })
            .exec()
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'ThanhVien is updated',
                    updateThanhVien: updateObject,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                })
            })
    },

    // delete a ThanhVien
    deleteThanhVien: function (req, res) {
        const id = req.params.ThanhVienId
        ThanhVien.findByIdAndRemove(id)
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