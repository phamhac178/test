const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    MaTP: {
        type: Number,
        require: true,
    },
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
        type: Date,
    },
    NgayGioKT: {
        type: Date,
    },
    SLToiThieuYC: {
        type: Number,
    },
    SLToiDaYC: {
        type: Number,
    },
    ThoiHanDK: {
        type: Date,
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
