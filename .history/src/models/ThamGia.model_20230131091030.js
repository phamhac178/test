const mongoose = require('mongoose')
const ThamGiaSchema = new mongoose.Schema({
    maTV: {
        type: String,
        ref: 'ThanhVien',
        require: true,
    },
    MaHD: {
        type: String,
        ref: 'HoatDong',
        require: true,
    },
    NgayGioDangKy: {
        type: String,
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
    NhanXetKhac: {
        type: String,
    },
})
module.exports = mongoose.model('ThamGia', ThamGiaSchema)
