const mongoose = require('mongoose')
const ThamgiaSchema = new mongoose.Schema({
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
module.exports = mongoose.model('HoatDong', HoatDongSchema)
