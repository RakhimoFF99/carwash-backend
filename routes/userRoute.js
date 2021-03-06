const {Router} = require('express')
const  {addUser,getAllUser,getUserById,deleteUserById,updateUserById}  = require('../controllers/userController')
const verifyToken = require('../controllers/verifyToken')
const router = Router()


router.get('/user/all',getAllUser)
router.get('/user/:id',getUserById)
router.post('/user/add',verifyToken,addUser)
router.delete('/user/delete/:id',verifyToken,deleteUserById)
router.put('/user/update/:id',updateUserById)

module.exports = router