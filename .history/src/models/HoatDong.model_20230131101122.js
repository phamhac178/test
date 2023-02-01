const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    tenHD: {
        type: String,
        require: true
    },
    moTaHD: {
        type: String,
        require: true
    },
    ngayGioBD: {
        type: String,
        require: true
    },
    ngayGioKT: {
        type: String,
        require: true
    },
    SLToiThieuYC: {
        type: Number,
        require: true
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
