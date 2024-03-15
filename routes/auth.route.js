const { Router } = require('express')
const { 
  register, 
  login,
  getProfile,
  updateDetails,
  updatePassword,
  paymentBalance,
  activateProfile
} = require('../controllers/auth.controller')
const router = Router()
const { protected } = require('../middlewares/auth')

router.post('/register', register)
router.post('/login', login)
router.get('/profile', protected, getProfile)
router.put('/update', protected, updateDetails)
router.put('/updatepassword', protected, updatePassword)
router.put('/paymentBalance', protected, paymentBalance)
router.put('/activate', protected, activateProfile)

module.exports = router