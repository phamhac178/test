const mongoose = require('mongoose')
const thanhvienSchema = new mongoose.Schema({
    hoTen: {
        type: String,
    },
    gioiTinh: {
        type: Boolean,
    },
    ngaySinh: {
        type: String,
    },
    email: {
        type: String,
    },
    SoDienThoai: {
        type: Number,
        require: true,
    }
})
module.exports = mongoose.model('ThanhVien', thanhvienSchema)
