const mongoose = require('mongoose')
const thanhvienSchema = new mongoose.Schema({
    hoTen: {
        type: String,
    },
    gioiTinh: {
        type: String,
    },
    ngaySinh: {
        type: String,
    },
    email: {
        type: String,
    },
    soDienThoai: {
        type: Number,
        require: true,
    }
})
module.exports = mongoose.model('ThanhVien', thanhvienSchema)
