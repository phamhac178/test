const mongoose = require('mongoose')
const HoatDongSchema = new mongoose.Schema({
    MaHD:{
        type: Number,
        require: true,
    },
    TenHD: {
        type: String,
    },
})