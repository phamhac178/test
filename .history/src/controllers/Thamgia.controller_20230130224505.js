const mongoose = require('mongoose')
const ThamGia = require('../models/ThamGia.model')
module.exports = {
    creat: function (req, res) {
        const = new({
            _id: mongoose.Types.ObjectId(),
            ...req.body,
        })
        return
            .save()
            .then((ne) => {
                return res.status(201).json({
                    succes: true,
                    message: 'new create successfully',
                : ne,
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