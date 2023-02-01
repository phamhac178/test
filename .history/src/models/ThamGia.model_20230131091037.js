const mongoose = require('mongoose')
const ThamGiaSchema = new mongoose.Schema({
    maTV: {
        type: String,
        ref: 'ThanhVien',
        require: true,
    },
    maHD: {
        type: String,
        ref: 'HoatDong',
        require: true,
    },
    ngayGioDangKy: {
        type: String,
    },
    diemTruongDoan: {
        type: Number,
    },
    diemTieuChi1: {
        type: Number,
    },
    DiemTieuChi2: {
        type: Number,
    },
    DiemTieuChi3: {
        type: Number,
    },
    NhanXetKhac: {
        type: String,
    },
})
module.exports = mongoose.model('ThamGia', ThamGiaSchema)
