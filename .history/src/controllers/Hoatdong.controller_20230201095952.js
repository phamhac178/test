const mongoose = require('mongoose')
const HoatDong = require('../models/HoatDong.model')
const ThanhVien = require('../models/')
module.exports = {
    // creat hoat dong
    createHoatDong: function (req, res) {
        const hoatdong = new HoatDong({
            tenHD: req.body.tenHD,
            moTaHD: req.body.moTaHD,
            ngayGioBD: req.body.ngayGioBD,
            ngayGioKT: req.body.ngayGioKT,
            SLToiThieuYC: req.body.SLToiThieuYC,
            SLToiDaYC: req.body.SLToiDaYC,
            thoiHanDK: req.body.thoiHanDK,
            trangThai: req.body.trangThai,
            maTV: req.body.maTV,
            lyDoHuy: req.body.lyDoHuy,
        })
        return hoatdong
            .save()
            .then(() => {
                return res.redirect('/api/hoatdongs')
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
    getAllHoatDong: function (req, res) {
        HoatDong.find()
            .populate('maTV')
            .then((hoatdongs) => res.render("listHoatdong", { hoatdongs }))
            .then()
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                    error: err.message,
                })
            })
    },

    // get single HoatDong
    getSingleHoatDong: function (req, res) {
        const id = req.params.HoatDongId
        HoatDong.findById(id)
            .then((singleHoatDong) => {
                res.status(200).json({
                    success: true,
                    message: `More on ${singleHoatDong.title}`,
                    HoatDong: singleHoatDong,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'This HoatDong does not exist',
                    error: err.message,
                })
            })
    },

    // update HoatDong
    updateHoatDong(req, res) {
        HoatDong.update({ _id: req.params.id }, { $set: req.body })
            .exec()
            .then(() => {
                res.redirect('/api/hoatdongs')
            })
    },

    // delete a HoatDong
    deleteHoatDong: function (req, res) {
        const id = req.body.id;
        HoatDong.findByIdAndRemove(id)
            .exec()
            .then(() => res.redirect('/api/hoatdongs'))
    },
}