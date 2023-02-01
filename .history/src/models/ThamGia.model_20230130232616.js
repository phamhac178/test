const mongoose = require('mongoose')
const ThamGiaSchema = new mongoose.Schema({
    MaTV: {
        type: Number,
        ref: 'ThanhVien',
        require: true,
    },
    MaHD: {
        type: Number,
        ref: 'HoatDong',
        require: true,
    },
    NgayGioDangKy: {
        type: Date,
    },
    DiemTruongDoan: {
        type: Number,
    },
    DiemTieuChi1: {
        type: Number,
    },
    DiemTieuChi2: {
        type: Number,
    },
    DiemTieuChi3: {
        type: Number,
    },
        : {
        type: String,
    },
})
module.exports = mongoose.model('ThamGia', ThamGiaSchema)
