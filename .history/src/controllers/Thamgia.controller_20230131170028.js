const mongoose = require('mongoose')
const ThamGia = require('../models/ThamGia.model')
module.exports = {
    // creat hoat dong
    createThamGia: function (req, res) {
        const thamgia = new ThamGia({
            maTV: req.body.maTV,
            maHD: req.body.maHD,
            ngayGioDangKy: req.body.ngayGioDangKy,
            diemTruongDoan: req.body.diemTruongDoan,
            diemTieuChi1: req.body.diemTieuChi1,
            diemTieuChi2: req.body.diemTieuChi2,
            diemTieuChi3: req.body.diemTieuChi3,
            nhanXetKhac: req.body.nhanXetKhac,
        })
        return thamgia
            .save()
            .then(() => {
                return res.redirect('/api/thamgias')
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
            .populate(['maTV', 'maHD'])
            .then((thamgias) => res.render("listThamGia", { thamgias }))
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

    // delete a ThanhVien
    deleteThanhVien: function (req, res) {
        const id = req.body.id;
        ThamGia.findByIdAndRemove(id)
            .exec()
            .then(() => res.redirect('/api/thamgias'))
    },
}