const mongoose = require('mongoose')
const thanhvienSchema = new mongoose.Schema({
    hoTen: {
        type: String,
    },
    gioiTinh: {
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
