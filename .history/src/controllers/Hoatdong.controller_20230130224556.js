const mongoose = require('mongoose')
const HoatDong = require('../models/HoatDong.model')
module.exports = {
    createHoatDong: function (req, res) {
        const HoatDong = new HoatDong({
            _id: mongoose.Types.ObjectId(),
            ...req.body,
        })
        return HoatDong
            .save()
            .then((newHoatDong) => {
                return res.status(201).json({
                    succes: true,
                    message: 'new create successfully',
                    HoatDong: newHoatDong,
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