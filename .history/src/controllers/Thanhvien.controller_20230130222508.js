const mongoose = require('mongoose')
const ThanhVien  = require('../models/thanhvien.model')
module.exports = {
    createThanhVien: function(req, res){
    const thanhvien = new ThanhVien({
        _id: mongoose.Types.ObjectId(),
        ... req.body,
    })
    return thanhvien
        .save()
        .then((newUser)=>{
            return res.status(201).json({
                succes: true,
                message: 'new succes'
            })
        })
}}