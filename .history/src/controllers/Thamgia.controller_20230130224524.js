const mongoose = require('mongoose')
const ThamGia = require('../models/ThamGia.model')
module.exports = {
    createThamGia: function (req, res) {
        const thamgia = new ThamGia({
            _id: mongoose.Types.ObjectId(),
            ...req.body,
        })
        return ThamGia
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
    }
}