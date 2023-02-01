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
    diemTieuChi3: {
        type: Number,
    },
    nhanXetKhac: {
        type: String,
    },
})
module.exports = mongoose.model('ThamGia', ThamGiaSchema)
