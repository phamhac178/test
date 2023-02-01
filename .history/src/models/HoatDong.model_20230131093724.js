const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    tenHD: {
        type: String,
    },
    moTaHD: {
        type: String,
    },
    ngayGioBD: {
        type: String,
    },
    ngayGioKT: {
        type: String,
    },
    SLToiThieuYC: {
        type: Number,
    },
    SLToiDaYC: {
        type: Number,
    },
    thoiHanDK: {
        type: String,
    },
    trangThai: {
        type: String,
    },
    maTV: {
        type: String,
        ref: 'ThanhVien',
        require: true,
    },
    lyDoHuy: {
        type: String,
    }
})
module.exports = mongoose.model('HoatDong', HoatDongSchema)
