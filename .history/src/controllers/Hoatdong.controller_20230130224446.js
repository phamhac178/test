const mongoose = require('mongoose')
const HoatDong = require('../models/HoatDong.model')
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
    }
}