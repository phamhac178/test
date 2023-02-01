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
router.post('/ThanhViens/delete', deleteThanhVien)
router.post('/thanhviens/update/:id', updateThanhVien)
// HoatDong
router.post('/HoatDongs', createHoatDong)
router.get('/HoatDongs', getAllHoatDong)
router.get('/HoatDongs/:HoatDongId', getSingleHoatDong)
router.post('/HoatDongs/update/:id', updateHoatDong)
router.post('/HoatDongs/delete', deleteHoatDong)
// ThamGia
router.post('/ThamGias', createThamGia)
router.get('/ThamGias', getAllThamGia)
router.get('/ThamGias/:ThamGiaId', getSingleThamGia)
router.post('/ThamGias/update/:id', updateThamGia)
router.post('/ThamGias/delete', deleteThamGia)

module.exports = router
