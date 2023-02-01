const mongoose = require('mongoose')
const thanhvienSchema = new mongoose.Schema({
    MaTV: {
        type: Number,
        require: true,
    },
    HoTen: {
        type: String,
    },
    GioiTinh: {
        type: Boolean,
    },
    NgaySinh: {
        type: Strng,
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
