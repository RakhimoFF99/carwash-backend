const {Router}  = require('express')
const {auth,register,getUserData} = require('../controllers/authUserController')
const verifyToken = require('../controllers/verifyToken')
const checkRole = require('../controllers/checkRole')
const router = Router()

router.post('/login',auth)
router.get('/get/user/me',verifyToken,getUserData)
router.post('/register',register)


module.exports = router