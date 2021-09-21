const {Router} = require('express')
const  {addUser,getAllUser,getUserById}  = require('../controllers/userController')
const router = Router()


router.get('/user/all',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user/add',addUser)

module.exports = router