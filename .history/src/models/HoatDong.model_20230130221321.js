const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    MaHD:{
        type: Number,
        require: true,
    },
    TenHD: {
        type: String,
    },
    MoTaHD:{
        type:String,
    },
    NgayGioBD:{
        type:Date,
    },
    NgayGioKT:{
        type: Date,
    },
    SLToiThieu:{
        type: Number,
    },
    SLToiDa: {
        type: Number
    }
})