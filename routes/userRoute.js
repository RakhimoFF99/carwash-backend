const {Router} = require('express')
const  {addUser}  = require('../controllers/userController')
const router = Router()


router.get('/adduser',addUser)

module.exports = router