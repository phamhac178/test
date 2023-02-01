const express = require('express')
const {
  createThanhVien,
  getAllThanhVien,
  getSingleThanhVien,
  updateThanhVien,
  deleteThanhVien,
} = require('../controllers/ThanhVien')
const { createUser } = require('../controllers/user')

const router = express.Router()

// ThanhViens
router.post('/ThanhViens', createThanhVien)
router.get('/ThanhViens', getAllThanhVien)
router.get('/ThanhViens/:ThanhVienId', getSingleThanhVien)
router.patch('/ThanhViens/:ThanhVienId', updateThanhVien)
router.delete('/ThanhViens/:ThanhVienId', deleteThanhVien)

// Users
router.post('/users', createUser)

module.exports = router
