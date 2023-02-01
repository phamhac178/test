const mongoose = require('mongoose')
const ThanhVien  = require('../models/thanhvien.model')
module.exports = {
    createThanhVien
    const thanhvien = new ThanhVien({
        _id: mongoose.Types.ObjectId(),
        ... req.body,
    })
    return thanhvien
}