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
        type: String,
        require: true,
    }
})
module.exports = mongoose.model('ThanhVien', thanhvienSchema)
