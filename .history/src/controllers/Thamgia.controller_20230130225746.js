const mongoose = require('mongoose')
const { runInNewContext } = require('vm')
const ThamGia = require('../models/ThamGia.model')
module.exports = {
    // creat hoat dong
    createThamGia: function (req, res) {
        const thamgia = new ThamGia({
            _id: mongoose.Types.ObjectId(),
            MaTV: req.body.
            MaHD: req.body.MaHD,
            TenHD: req.body.TenHD,
            MoTaHD: req.body.MoTaHD,
            NgayGioBD: req.body.NgayGioBD,
            NgayGioKT: req.body.NgayGioKT,
            SLToiThieuYC: req.body.SLToiThieuYC,
            SLToiDaYC: req.body.SLToiDaYC,
            ThoiHanDK: req.body.ThoiHanDK,
            TrangThai: req.body.TrangThai,
            MaTV: req.body.MaTV,
            LyDoHuy: req.body.LyDoHuy,
        })
        return thamgia
            .save()
            .then((newThamGia) => {
                return res.status(201).json({
                    succes: true,
                    message: 'new create successfully',
                    ThamGia: newThamGia,
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
    getAllThamGia: function (req, res) {
        ThamGia.find()
            .populate('user')
            .then((allThamGia) => {
                return res.status(200).json({
                    success: true,
                    message: 'A list of all ThamGia',
                    ThamGia: allThamGia,
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

    // get single ThamGia
    getSingleThamGia: function (req, res) {
        const id = req.params.ThamGiaId
        ThamGia.findById(id)
            .then((singleThamGia) => {
                res.status(200).json({
                    success: true,
                    message: `More on ${singleThamGia.title}`,
                    ThamGia: singleThamGia,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'This ThamGia does not exist',
                    error: err.message,
                })
            })
    },

    // update ThamGia
    updateThamGia: function (req, res) {
        const id = req.params.ThamGiaId
        const updateObject = req.body
        ThamGia.update({ _id: id }, { $set: updateObject })
            .exec()
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'ThamGia is updated',
                    updateThamGia: updateObject,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                })
            })
    },

    // delete a ThamGia
    deleteThamGia: function (req, res) {
        const id = req.params.ThamGiaId
        ThamGia.findByIdAndRemove(id)
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