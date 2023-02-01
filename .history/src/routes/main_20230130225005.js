const express = require('express')

//ThanhVien
const {
    createThanhVien,
    getAllThanhVien,
    getSingleThanhVien,
    updateThanhVien,
    deleteThanhVien,
} = require('../controllers/Thanhvien.controller')
const router = express.Router()

// ThanhVien
router.post('/ThanhViens', createThanhVien)
router.get('/ThanhViens', getAllThanhVien)
router.get('/ThanhViens/:ThanhVienId', getSingleThanhVien)
router.patch('/ThanhViens/:ThanhVienId', updateThanhVien)
router.delete('/ThanhViens/:ThanhVienId', deleteThanhVien)

// Hoat Dong
const {
    createHoatDong,
    getAllHoatDong,
    getSingleHoatDong,
    updateHoatDong,
    deleteHoatDong,
} = require('../controllers/HoatDong.controller')
const { createUser } = require('../controllers/user')
// HoatDong
router.post('/HoatDongs', createHoatDong)
router.get('/HoatDongs', getAllHoatDong)
router.get('/HoatDongs/:HoatDongId', getSingleHoatDong)
router.patch('/HoatDongs/:HoatDongId', updateHoatDong)
router.delete('/HoatDongs/:HoatDongId', deleteHoatDong)

// Hoat Dong
const {
    createThamGia,
    getAllThamGia,
    getSingleThamGia,
    updateThamGia,
    deleteThamGia,
} = require('../controllers/ThamGia.controller')
const { createUser } = require('../controllers/user')
// ThamGia
router.post('/ThamGias', createThamGia)
router.get('/ThamGias', getAllThamGia)
router.get('/ThamGias/:ThamGiaId', getSingleThamGia)
router.patch('/ThamGias/:ThamGiaId', updateThamGia)
router.delete('/ThamGias/:ThamGiaId', deleteThamGia)


module.exports = router
