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
        require: true
    },
    thoiHanDK: {
        type: String,
        require: true
    },
    trangThai: {
        type: String,
        require: true
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
