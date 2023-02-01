const mongoose = require('mongoose')
const thanhvienSchema = new mongoose.Schema({
    HoTen: {
        type: String,
    },
    GioiTinh: {
        type: Boolean,
    },
    NgaySinh: {
        type: String,
    },
    Email: {
        type: String,
    },
    SDT: {
        type: Number,
        require: true,
    }
})
module.exports = mongoose.model('ThanhVien', thanhvienSchema)
