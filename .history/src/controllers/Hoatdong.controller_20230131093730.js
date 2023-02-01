const mongoose = require('mongoose')
const { runInNewContext } = require('vm')
const HoatDong = require('../models/HoatDong.model')
module.exports = {
    // creat hoat dong
    createHoatDong: function (req, res) {
        const hoatdong = new HoatDong({
            maHD: req.body.MaHD,
            tenHD: req.body.TenHD,
            moTaHD: req.body.MoTaHD,
            ngayGioBD: req.body.NgayGioBD,
            ngayGioKT: req.body.NgayGioKT,
            SLToiThieuYC: req.body.SLToiThieuYC,
            SLToiDaYC: req.body.SLToiDaYC,
            thoiHanDK: req.body.ThoiHanDK,
            trangThai: req.body.TrangThai,
            MaTV: req.body.MaTV,
            lyDoHuy: req.body.LyDoHuy,
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
    getAllHoatDong: function (req, res) {
        HoatDong.find()
            .populate('MaTV')
            .then((allHoatDong) => {
                return res.status(200).json({
                    success: true,
                    message: 'A list of all HoatDong',
                    HoatDong: allHoatDong,
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
    updateHoatDong: function (req, res) {
        const id = req.params.HoatDongId
        const updateObject = req.body
        HoatDong.update({ _id: id }, { $set: updateObject })
            .exec()
            .then(() => {
                res.status(200).json({
                    success: true,
                    message: 'HoatDong is updated',
                    updateHoatDong: updateObject,
                })
            })
            .catch((err) => {
                res.status(500).json({
                    success: false,
                    message: 'Server error. Please try again.',
                })
            })
    },

    // delete a HoatDong
    deleteHoatDong: function (req, res) {
        const id = req.params.HoatDongId
        HoatDong.findByIdAndRemove(id)
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