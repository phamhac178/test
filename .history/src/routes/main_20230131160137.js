const express = require('express')
const router = express.Router()

//ThanhVien
const {
    createThanhVien,
    getAllThanhVien,
    getSingleThanhVien,
    updateThanhVien,
    deleteThanhVien,
} = require('../controllers/Thanhvien.controller')

// HoatDong
const {
    createHoatDong,
    getAllHoatDong,
    getSingleHoatDong,
    updateHoatDong,
    deleteHoatDong,
} = require('../controllers/HoatDong.controller')

// ThamGia
const {
    createThamGia,
    getAllThamGia,
    getSingleThamGia,
    updateThamGia,
    deleteThamGia,
} = require('../controllers/ThamGia.controller');
const { home } = require('../controllers/Home.controller');

//home
router.get('/', home)
// ThanhVien
router.post('/ThanhViens', createThanhVien)
router.get('/ThanhViens', getAllThanhVien)
router.get('/ThanhViens/:ThanhVienId', getSingleThanhVien)
router.patch('/HoatDongs/:HoatDongId', updateHoatDong)
router.delete('/HoatDongs/:HoatDongId', deleteHoatDong)
// HoatDong
router.post('/HoatDongs', createHoatDong)
router.get('/HoatDongs', getAllHoatDong)
router.get('/HoatDongs/:HoatDongId', getSingleHoatDong)
router.patch('/HoatDongs/:HoatDongId', updateHoatDong)
router.delete('/HoatDongs/:HoatDongId', deleteHoatDong)
// ThamGia
router.post('/ThamGias', createThamGia)
router.get('/ThamGias', getAllThamGia)
router.get('/ThamGias/:ThamGiaId', getSingleThamGia)
router.patch('/ThamGias/:ThamGiaId', updateThamGia)
router.delete('/ThamGias/:ThamGiaId', deleteThamGia)

module.exports = router
