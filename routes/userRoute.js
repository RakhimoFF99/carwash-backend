const {Router} = require('express')
const  {addUser,getAllUser,getUserById,deleteUserById}  = require('../controllers/userController')
const router = Router()


router.get('/user/all',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user/add',addUser)
router.delete('/user/delete/:id',deleteUserById)

module.exports = router