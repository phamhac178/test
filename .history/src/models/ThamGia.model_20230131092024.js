const mongoose = require('mongoose')
const ThamGiaSchema = new mongoose.Schema({
    MaTV: {
        type: String,
        ref: 'ThanhVien',
        require: true,
    },
    MaHD: {
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
    diemTieuChi2: {
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
