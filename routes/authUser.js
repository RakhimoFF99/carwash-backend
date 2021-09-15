const {Router}  = require('express')
const {auth,register} = require('../controllers/authUserController')
const router = Router()

router.post('/login',auth)

router.post('/register',register)

module.exports = router