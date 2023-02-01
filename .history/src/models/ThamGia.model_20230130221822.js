const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    MaTV: {
        type: Number,
        ref: 'ThanhVien',
        require: true,
    },
    MaHD: {
        type: Number,
        ref:'HoatDong',
        require: true,
    },
    NgayGioDangKy: {
        type: Date,
    },
    DiemTruongDoan: {
        type: Number,
    },
    DiemTieuChi1: {
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
