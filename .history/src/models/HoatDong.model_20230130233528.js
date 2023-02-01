const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    MaHD: {
        type: Number,
        require: true,
    },
    TenHD: {
        type: String,
    },
    MoTaHD: {
        type: String,
    },
    NgayGioBD: {
        type: String,
    },
    NgayGioKT: {
        type: String,
    },
    SLToiThieuYC: {
        type: Number,
    },
    SLToiDaYC: {
        type: Number,
    },
    ThoiHanDK: {
        type: String,
    },
    TrangThai: {
        type: Boolean,
    },
    MaTV: {
        type: Number,
        ref: 'ThanhVien',
        require: true,
    },
    LyDoHuy: {
        type: String,
    }
})
module.exports = mongoose.model('HoatDong', HoatDongSchema)
